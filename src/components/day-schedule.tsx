import { attractions, categories } from "@/data";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import { Tape } from "./tape";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface Schedule {
  day: number;
  attractions: {
    id: string;
    startTime: string;
    endTime: string;
  }[];
}

interface DayScheduleProps {
  schedule: Schedule;
}

export default function DaySchedule({ schedule }: DayScheduleProps) {
  return (
    <div className="bubble-pattern relative mb-8 inline-block bg-white p-4 px-8 pt-8 shadow-md">
      <h2 className="font-handwritten relative mb-4 text-4xl font-bold">
        Day {schedule.day}
      </h2>
      <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
      <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
      <div className="grid gap-2">
        {schedule.attractions
          .map((a) => ({
            ...schedule.attractions,
            ...attractions[a.id],
          }))
          .map((attraction) => (
            <div key={attraction.id} className="">
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span className="font-handwritten pt-1">9:00 am - 5:00pm</span>
              </div>
              <div className="relative mx-auto flex flex-col gap-2 bg-white p-3 shadow-md md:flex-row">
                <div className="relative flex">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    placeholder="blur"
                    className="h-80 w-full object-cover md:h-64"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-2">
                  <h3 className="font-handwritten text-lg font-bold">
                    {attraction.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {attraction.categories
                      .map((cId) => categories[cId])
                      .map((category) => (
                        <Badge
                          key={category.id}
                          className="text-foreground"
                          style={{
                            backgroundColor: category.color,
                          }}
                        >
                          {category.name}
                        </Badge>
                      ))}
                  </div>

                  <p className="font-handwritten line-clamp-3 text-sm">
                    {attraction.description}
                  </p>
                  <div className="font-handwritten mb-2 flex items-start gap-1 text-xs text-gray-600">
                    <div className="flex h-[1lh] items-center">
                      <MapPin className="size-3" />
                    </div>
                    <p className="pt-0.5">{attraction.address}</p>
                  </div>
                  <Button
                    size="lg"
                    asChild
                    className="text-md mt-auto flex items-center"
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
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
