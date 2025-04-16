import { DaySchedule } from "@/components/day-schedule";
import { Tape } from "@/components/tape";
import { attractions, cities } from "@/data";
import { db } from "@/db";
import { MapPin } from "lucide-react";
import { auth } from "@/lib/auth";
import { Heart } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import { DayScheduleSkeleton } from "@/components/day-schedule-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

async function getItinerary(id: string, userId: string) {
  "use cache";
  const data = await db.query.itineraries.findFirst({
    with: {
      days: {
        with: {
          attractions: true,
        },
      },
    },
    where: (itinerary, { eq, and }) =>
      and(eq(itinerary.id, id), eq(itinerary.userId, userId)),
  });

  if (!data) {
    return null;
  }
  const itinerary = {
    name: data.name,
    city: cities[data.cityId],
    schedule: data.days.map((day) => ({
      day: day.value,
      attractions: day.attractions.map((attraction) => ({
        ...attractions[attraction.attractionId],
        startTime: attraction.startTime,
        endTime: attraction.endTime,
      })),
    })),
  };
  return itinerary;
}

export default async function DayScheduleList({ id }: { id: string }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="font-handwritten text-center">
        You must be logged in to view your itinerary
      </div>
    );
  }
  const itinerary = await getItinerary(id, session.user.id);

  if (!itinerary) {
    return (
      <div className="font-handwritten text-center">Itinerary not found</div>
    );
  }

  return (
    <>
      <div className="bubble-pattern relative mx-auto mb-12 w-full max-w-4xl bg-white p-8 shadow-sm">
        <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
        <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative md:w-1/2">
            <div className="transform border bg-white p-3 shadow-md transition-transform duration-200 hover:-rotate-1">
              <Image
                src={itinerary.city.image}
                alt={itinerary.city.name}
                placeholder="blur"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute right-2 bottom-4 -rotate-6">
                <Heart className="size-8 fill-red-400 text-red-500 drop-shadow-sm" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="mb-2 flex items-start">
              <h1 className="font-handwritten text-scrapbook-text text-3xl font-bold">
                {itinerary.name}
              </h1>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <MapPin className="size-4 text-red-500" />
              <span className="font-handwritten pt-1">
                {itinerary.city.name}, {itinerary.city.country}
              </span>
            </div>

            <div className="isolate border-l-4 border-amber-200 bg-yellow-50 p-4 shadow-sm">
              <p className="font-handwritten text-scrapbook-text leading-relaxed">
                {itinerary.city.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-6 bottom-0 left-4 border-l-2 border-dashed border-zinc-700" />
        {itinerary.schedule.map((schedule) => (
          <DaySchedule key={schedule.day} schedule={schedule} />
        ))}
      </div>
    </>
  );
}

export function DayScheduleListSkeleton() {
  return (
    <>
      <div className="bubble-pattern relative mx-auto mb-12 w-full max-w-4xl bg-white p-8 shadow-sm">
        <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
        <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="relative md:w-1/2">
            <div className="transform border bg-white p-3 shadow-md transition-transform duration-200 hover:-rotate-1">
              <Skeleton className="h-[256px] w-[378px] object-cover" />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="mb-2 flex items-start">
              <Skeleton className="h-8 w-52" />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <Skeleton className="h-4 w-32" />
            </div>

            <div className="isolate flex flex-col gap-2 border-l-4 border-amber-200 bg-yellow-50 p-4 shadow-sm">
              <Skeleton className="h-4 w-80" />
              <Skeleton className="h-4 w-80" />
              <Skeleton className="h-4 w-80" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-6 bottom-0 left-4 border-l-2 border-dashed border-zinc-700" />
        {Array.from({ length: 3 }).map((_, index) => (
          <DayScheduleSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
