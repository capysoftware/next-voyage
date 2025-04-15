"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export async function getItinerary(input: string) {
  "use server";

  const { object: itineraryData } = await generateObject({
    model: openai("gpt-3.5-turbo"),
    system: "You generate a travel itinerary with scheduled attractions.",
    prompt: input,
    schema: z.object({
      itinerary: z.array(
        z.object({
          day: z.number().describe("Day number"),
          attractions: z.array(
            z.object({
              id: z.string().describe("Attraction ID."),
              startTime: z.string().describe("Start time of the attraction."),
              endTime: z.string().describe("End time of the attraction."),
            }),
          ),
        }),
      ),
    }),
  });

  return { itineraryData };
}
