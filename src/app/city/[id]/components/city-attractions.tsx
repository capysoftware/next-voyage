"use client";

import { useState } from "react";

import Link from "next/link";
import AttractionCard from "@/components/attraction-card";
import { Button } from "@/components/ui/button";
import type { Attraction } from "@/data";

export default function CityAttractions({
  cityAttractions,
}: {
  cityAttractions: Attraction[];
}) {
  const [selectedAttractions, setSelectedAttractions] = useState<Attraction[]>(
    [],
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cityAttractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            isSelected={selectedAttractions.some((a) => a.id === attraction.id)}
            setSelectedAttractions={setSelectedAttractions}
          />
        ))}
      </div>

      {!!selectedAttractions.length && (
        <div className="flex justify-center">
          <div className="fixed bottom-5">
            <span className="relative top-3 left-2 ml-auto flex size-fit">
              <span className="text-primary-foreground relative inline-flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-xs font-medium">
                {selectedAttractions.length}
              </span>
            </span>
            <Button
              asChild
              variant="secondary"
              className="rounded-xl border-none px-4 py-6 text-lg font-medium"
            >
              <Link href={""}>Plan Itinerary</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
