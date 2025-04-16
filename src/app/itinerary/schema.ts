import { z } from "zod";

export const itineraryAIResultSchema = z.object({
  itinerary: z.array(
    z.object({
      day: z.number(),
      attractions: z.array(
        z.object({
          id: z.string(),
          startTime: z
            .string()
            .describe('Start time in format "9:00 AM" with AM/PM indicator'),
          endTime: z
            .string()
            .describe('End time in format "9:00 AM" with AM/PM indicator'),
        }),
      ),
    }),
  ),
});

export type ItineraryAIResult = z.infer<typeof itineraryAIResultSchema>;
