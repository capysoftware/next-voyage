"use client";

import { useState } from "react";

import AttractionCard from "@/components/attraction-card";
import { Button } from "@/components/ui/button";
import type { Attraction } from "@/data";
import { X } from "lucide-react";
import { generateItinerary } from "@/app/itinerary/actions";
import type { ItineraryAIResult } from "@/app/itinerary/schema";
import { readStreamableValue } from "ai/rsc";
import { StreamDaySchedule } from "@/components/day-schedule";

export default function CityAttractions({
  cityName,
  cityAttractions,
}: {
  cityName: string;
  cityAttractions: Attraction[];
}) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedAttractions, setSelectedAttractions] = useState<Attraction[]>(
    [],
  );
  const [itinerary, setItinerary] = useState<ItineraryAIResult | null>(null);
  return (
    <>
      {itinerary ? (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-6 bottom-0 left-4 border-l-2 border-dashed border-zinc-700" />
          {itinerary.itinerary?.length > 0 &&
            itinerary.itinerary.map(
              (schedule) =>
                schedule &&
                schedule.day && (
                  <StreamDaySchedule key={schedule.day} schedule={schedule} />
                ),
            )}
        </div>
      ) : (
        <>
          <h2 className="font-handwritten text-scrapbook-text mb-8 text-center text-2xl font-bold">
            Top Attractions in {cityName}
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cityAttractions.map((attraction) => (
              <AttractionCard
                key={attraction.id}
                attraction={attraction}
                isSelecting={isSelecting}
                isSelected={selectedAttractions.some(
                  (a) => a.id === attraction.id,
                )}
                setSelectedAttractions={setSelectedAttractions}
              />
            ))}
          </div>
        </>
      )}
      <div className="flex justify-center">
        {!itinerary && (
          <div className="font-handwritten fixed right-5 bottom-5 flex items-center gap-2">
            {isSelecting ? (
              <>
                <div className="relative">
                  <Button
                    size="lg"
                    className="hover:cursor-pointer disabled:text-gray-500 disabled:opacity-100"
                    disabled={selectedAttractions.length === 0}
                    onClick={async () => {
                      const result = await generateItinerary(
                        `Generate an itinerary for ${cityName} that includes visits to the following attractions:
                      ${selectedAttractions
                        .map((a) => `- ${a.name} (ID: ${a.id})`)
                        .join("\n")}
                      Determine how many days would be appropriate to visit all these attractions without rushing. Schedule the attractions across the days with suitable start and end times for each visit. Consider travel time between attractions and provide a balanced schedule. Make sure to include the correct ID number for each attraction as specified above.
                    `,
                      );
                      for await (const partialObject of readStreamableValue(
                        result,
                      )) {
                        setItinerary(partialObject);
                      }
                      setSelectedAttractions([]);
                      setIsSelecting(false);
                    }}
                  >
                    Generate Itinerary
                  </Button>
                  <span className="text-primary-foreground absolute -top-1 -right-1 inline-flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-xs font-medium">
                    {selectedAttractions.length}
                  </span>
                </div>
                <Button
                  className="rounded-full"
                  size="icon"
                  onClick={() => {
                    setSelectedAttractions([]);
                    setIsSelecting(false);
                  }}
                >
                  <X className="size-4" />
                </Button>
              </>
            ) : (
              <Button
                size="lg"
                className="hover:cursor-pointer disabled:text-gray-500 disabled:opacity-100"
                onClick={() => setIsSelecting(true)}
              >
                Create Itinerary
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
