"use client";

import { useState } from "react";

import AttractionCard from "@/components/attraction-card";
import { Button } from "@/components/ui/button";
import type { Attraction } from "@/data";
import { X } from "lucide-react";
import { generateItinerary } from "@/app/itinerary/actions";

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
  const [itinerary, setItinerary] = useState<React.ReactNode>();

  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cityAttractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            isSelecting={isSelecting}
            isSelected={selectedAttractions.some((a) => a.id === attraction.id)}
            setSelectedAttractions={setSelectedAttractions}
          />
        ))}
      </div>
      <div className="mt-20">{itinerary}</div>
      <div className="flex justify-center">
        <div className="fixed bottom-5 flex items-center gap-2">
          {isSelecting ? (
            <>
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
              <div className="relative">
                <Button
                  size="lg"
                  className="hover:cursor-pointer"
                  disabled={!selectedAttractions.length}
                  onClick={async () => {
                    setItinerary(
                      await generateItinerary(
                        `Generate an itinerary for ${cityName} that includes visits to the following attractions:
                      ${selectedAttractions
                        .map((a) => `- ${a.name} (ID: ${a.id})`)
                        .join("\n")}
              
                      Determine how many days would be appropriate to visit all these attractions without rushing. Schedule the attractions across the days with suitable start and end times for each visit. Consider travel time between attractions and provide a balanced schedule. Make sure to include the correct ID number for each attraction as specified above.
                    `,
                      ),
                    );
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
            </>
          ) : (
            <Button
              size="lg"
              className="hover:cursor-pointer"
              onClick={() => setIsSelecting(true)}
            >
              Create Itinerary
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
