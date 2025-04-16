import { attractions } from "@/data";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import { Tape } from "./tape";
import { Button } from "./ui/button";
import Image from "next/image";

export interface Schedule {
  day: number;
  attractions: {
    id: string;
    startTime: string;
    endTime: string;
  }[];
}

export interface OptionalSchedule {
  day?: number;
  attractions?: {
    id?: string;
    startTime?: string;
    endTime?: string;
  }[];
}

interface StreamDayScheduleProps {
  schedule: OptionalSchedule;
}

interface DayScheduleProps {
  schedule: Schedule;
}

export function DaySchedule({ schedule }: DayScheduleProps) {
  return (
    <div className="mb-10">
      <div className="relative mb-4 flex items-center">
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-300">
          <div className="h-2 w-2 rounded-full bg-red-600" />
        </div>
        <div className="ml-4">
          <span className="font-handwritten">Day {schedule.day}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {schedule.attractions
          .map((a) => {
            return {
              ...a,
              ...attractions[a.id],
            };
          })
          .map((attraction) => (
            <div
              key={attraction.id}
              className="relative mx-auto mb-6 ml-16 max-w-2xl bg-white p-8 shadow-sm"
            >
              <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
              <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
              <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
              <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 flex flex-1 flex-col gap-4 p-2">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span className="font-handwritten pt-1">
                      {attraction.startTime} - {attraction.endTime}
                    </span>
                  </div>
                  <h3 className="font-handwritten text-lg font-bold">
                    {attraction.name}
                  </h3>
                  <div className="font-handwritten mb-2 flex items-start gap-1 text-xs text-gray-600">
                    <div className="flex h-[1lh] items-center">
                      <MapPin className="size-3" />
                    </div>
                    <p className="pt-0.5">{attraction.address}</p>
                  </div>
                  <Button
                    size="lg"
                    asChild
                    className="text-md mt-auto flex w-fit items-center"
                  >
                    <a
                      href={attraction.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-handwritten"
                    >
                      <span className="mt-1">View on Google Maps</span>{" "}
                      <ExternalLink />
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    placeholder="blur"
                    className="h-46 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function StreamDaySchedule({ schedule }: StreamDayScheduleProps) {
  return (
    <div className="mb-10">
      <div className="relative mb-4 flex items-center">
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-300">
          <div className="h-2 w-2 rounded-full bg-red-600" />
        </div>
        <div className="ml-4">
          <span className="font-handwritten">Day {schedule?.day}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {schedule.attractions &&
          schedule.attractions.length > 0 &&
          schedule.attractions
            .map((a) => {
              if (!a.id) {
                return null;
              }
              if (!a.startTime || !a.endTime) {
                return null;
              }
              return {
                ...a,
                ...attractions[a.id],
              };
            })
            .map(
              (attraction) =>
                attraction && (
                  <div
                    key={attraction.id}
                    className="relative mx-auto mb-6 ml-16 max-w-2xl bg-white p-8 shadow-sm"
                  >
                    <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
                    <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
                    <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
                    <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 flex flex-1 flex-col gap-4 p-2">
                        <div className="flex items-center gap-2">
                          <Clock className="size-4" />
                          <span className="font-handwritten pt-1">
                            {attraction.startTime} - {attraction.endTime}
                          </span>
                        </div>
                        <h3 className="font-handwritten text-lg font-bold">
                          {attraction.name}
                        </h3>
                        <div className="font-handwritten mb-2 flex items-start gap-1 text-xs text-gray-600">
                          <div className="flex h-[1lh] items-center">
                            <MapPin className="size-3" />
                          </div>
                          <p className="pt-0.5">{attraction.address}</p>
                        </div>
                        <Button
                          size="lg"
                          asChild
                          className="text-md mt-auto flex w-fit items-center"
                        >
                          <a
                            href={attraction.googleMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-handwritten"
                          >
                            <span className="mt-1">View on Google Maps</span>{" "}
                            <ExternalLink />
                          </a>
                        </Button>
                      </div>
                      <div className="relative">
                        <Image
                          src={attraction.image}
                          alt={attraction.name}
                          placeholder="blur"
                          className="h-46 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ),
            )}
      </div>
    </div>
  );
}
