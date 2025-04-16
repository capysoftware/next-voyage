"use server";

import { createStreamableValue } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { itineraryAIResultSchema } from "./schema";

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
