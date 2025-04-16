"use server";

import { createStreamableValue } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import {
  itineraryAIResultSchema,
  type ItineraryAIResult,
} from "../../itinerary/schema";
import { db } from "@/db";
import { attractions, days, itineraries } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// Function to generate itinerary using streamUI
export async function generateItinerary(userPrompt: string) {
  const stream = createStreamableValue();
  (async () => {
    const { partialObjectStream } = streamObject({
      model: openai("gpt-3.5-turbo"),
      prompt:
        userPrompt +
        `\nCreate a multi-day itinerary with attractions, start times, and end times. Times should be in format "9:00 AM".`,
      schema: itineraryAIResultSchema,
    });

    for await (const partialObject of partialObjectStream) {
      stream.update(partialObject);
    }

    stream.done();
  })();

  return stream.value;
}

export async function createItinerary({
  cityId,
  name,
  schedule,
}: {
  cityId: number;
  name: string;
  schedule: ItineraryAIResult["itinerary"];
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return { error: "You must be logged in to create an itinerary" };
  }

  const itinerary = await db
    .insert(itineraries)
    .values({
      userId: session.user.id,
      cityId: cityId.toString(),
      name,
    })
    .returning()
    .then((res) => res[0]);

  // First, insert all days in a single batch operation
  const daysToInsert = schedule.map((day) => ({
    itineraryId: itinerary.id,
    value: day.day,
  }));

  const createdDays = await db
    .insert(days)
    .values(daysToInsert)
    .returning()
    .then((res) => res);

  // Map each day's value to its created ID for reference
  const dayValueToId = new Map(createdDays.map((day) => [day.value, day.id]));

  // Prepare attractions data for batch insert
  const attractionsToInsert = schedule.flatMap((day) =>
    day.attractions.map((attraction) => ({
      dayId: dayValueToId.get(day.day)!,
      attractionId: attraction.id,
      startTime: attraction.startTime,
      endTime: attraction.endTime,
    })),
  );

  // Insert all attractions in a single batch operation
  if (attractionsToInsert.length > 0) {
    await db.insert(attractions).values(attractionsToInsert);
  }

  return { success: true, itineraryId: itinerary.id };
}
