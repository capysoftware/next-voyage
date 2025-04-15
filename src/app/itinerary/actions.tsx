"use server";

import { streamUI } from "ai/rsc";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import DaySchedule, { Schedule } from "@/components/day-schedule";

const LoadingItinerary = () => (
  <div className="animate-pulse rounded-lg border p-4">
    <p className="mb-4 text-lg font-medium">Planning your itinerary...</p>
    <div className="space-y-3">
      <div className="h-4 w-3/4 rounded bg-gray-200"></div>
      <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      <div className="h-4 w-5/6 rounded bg-gray-200"></div>
    </div>
  </div>
);

const ItineraryDisplay = ({ itinerary }: { itinerary: Schedule[] }) => (
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute top-6 bottom-0 left-4 border-l-2 border-dashed border-zinc-700" />

    {itinerary.map((schedule) => (
      <DaySchedule key={schedule.day} schedule={schedule} />
    ))}
  </div>
);

// Function to generate itinerary using streamUI
export async function generateItinerary(userPrompt?: string) {
  const result = await streamUI({
    model: openai("gpt-3.5-turbo"),
    prompt:
      userPrompt ||
      "Generate an itinerary for Vancouver that includes visits to the following attractions: Stanley Park (ID: 1), Capilano Suspension Bridge (ID: 2), Vancouver Aquarium (ID: 4), and Granville Island (ID: 3). Determine how many days would be appropriate to visit all these attractions without rushing. Make sure all start and end times are formatted as '9:00 AM' (with AM/PM indicator).",
    text: ({ content }) => <div className="rounded border p-4">{content}</div>,
    tools: {
      createItinerary: {
        description:
          'Create a multi-day itinerary with attractions, start times, and end times. Times should be in format "9:00 AM".',
        parameters: z.object({
          itinerary: z.array(
            z.object({
              day: z.number(),
              attractions: z.array(
                z.object({
                  id: z.string(),
                  startTime: z
                    .string()
                    .describe(
                      'Start time in format "9:00 AM" with AM/PM indicator',
                    ),
                  endTime: z
                    .string()
                    .describe(
                      'End time in format "9:00 AM" with AM/PM indicator',
                    ),
                }),
              ),
            }),
          ),
        }),
        generate: async function* ({ itinerary }) {
          yield <LoadingItinerary />;
          return <ItineraryDisplay itinerary={itinerary} />;
        },
      },
    },
  });

  return result.value;
}
