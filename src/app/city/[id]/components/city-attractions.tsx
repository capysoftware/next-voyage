"use client";

import { useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AttractionCard from "@/components/attraction-card";
import { Button } from "@/components/ui/button";
import type { Attraction } from "@/data";
import { X } from "lucide-react";
import { createItinerary, generateItinerary } from "@/app/city/[id]/actions";
import type { ItineraryAIResult } from "@/app/itinerary/schema";
import { readStreamableValue } from "ai/rsc";
import { StreamDaySchedule } from "@/components/day-schedule";
import LiveIsland, { LiveIslandHandle } from "@/components/live-island";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Login } from "@/components/auth/login";

export default function CityAttractions({
  cityName,
  cityAttractions,
  cityId,
}: {
  cityName: string;
  cityAttractions: Attraction[];
  cityId: number;
}) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedAttractions, setSelectedAttractions] = useState<Attraction[]>(
    [],
  );
  const [itinerary, setItinerary] = useState<ItineraryAIResult | null>(null);
  const islandRef = useRef<LiveIslandHandle>(null);
  const { data: session } = useSession();

  const handleCloseIsland = () => {
    islandRef.current?.close();
  };

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

      {/* Dynamic Island Component */}
      {!session ? (
        <Dialog>
          <DialogTrigger className="absolute bg-black text-white" asChild>
            <Button className="font-handwritten fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full text-sm hover:cursor-pointer hover:bg-gray-800">
              Create Itinerary
            </Button>
          </DialogTrigger>
          <DialogContent className="font-handwritten bg-white sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>
                Please login to create an itinerary.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Login />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : !itinerary ? (
        <LiveIsland
          ref={islandRef}
          className="font-handwritten flex items-center justify-center"
          bottom={10}
          smallWidth={150}
          smallHeight={40}
          largeWidth={240}
          largeHeight={60}
          triggerType="click"
          initialAnimation={false}
          closeOnScroll={false}
          closeOnOutsideClick={false}
        >
          {(isSmall) =>
            isSmall ? (
              // Small island content
              <div onClick={() => setIsSelecting(true)}>
                <p>Create Itinerary</p>
              </div>
            ) : (
              // Expanded island content
              <div className="flex items-center justify-center gap-3">
                <div className="relative">
                  <Button
                    variant="ghost"
                    className="hover:text-secondary rounded-full bg-gray-800 text-base hover:cursor-pointer hover:bg-gray-700 disabled:text-gray-400 disabled:opacity-100"
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
                    <span className="text-primary-foreground absolute -top-1 -left-1 inline-flex size-5 items-center justify-center rounded-full bg-blue-500 text-center text-xs font-medium">
                      {selectedAttractions.length}
                    </span>
                  </Button>
                </div>
                <Button
                  className="rounded-full bg-red-500 hover:rotate-90 hover:cursor-pointer hover:bg-red-400"
                  size="icon"
                  onClick={() => {
                    handleCloseIsland();
                    setSelectedAttractions([]);
                    setIsSelecting(false);
                  }}
                >
                  <X className="size-4" />
                </Button>
              </div>
            )
          }
        </LiveIsland>
      ) : (
        <SaveItinerary cityId={cityId} schedule={itinerary.itinerary} />
      )}
    </>
  );
}

function SaveItinerary({
  cityId,
  schedule,
}: {
  cityId: number;
  schedule: ItineraryAIResult["itinerary"];
}) {
  const [name, setName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-handwritten fixed bottom-4 left-1/2 mt-5 h-[40px] w-[150px] -translate-x-1/2 rounded-full text-base hover:cursor-pointer">
          Save Itinerary
        </Button>
      </DialogTrigger>
      <DialogContent className="font-handwritten bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Save Itinerary</DialogTitle>
          <DialogDescription>
            Give your itinerary a name below and click save to store it for
            later.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="sr-only text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="My Itinerary"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={isSaving}
            className="hover:cursor-pointer"
            onClick={async () => {
              if (name.trim().length <= 3) {
                toast.error("Name must be at least 3 characters long");
                return;
              }

              setIsSaving(true);

              const { error, itineraryId } = await createItinerary({
                cityId,
                name,
                schedule,
              });

              if (error) {
                toast.error("Failed to save itinerary");
              } else {
                toast.success("Itinerary saved successfully");
                router.push(`/itinerary/${itineraryId}`);
              }
              setIsSaving(false);
            }}
          >
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
