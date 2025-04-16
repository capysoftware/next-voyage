import type { Itinerary } from "@/app/itineraries/itineraries-list";
import Link from "next/link";
import { Tape } from "./tape";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
interface IntineraryCardProps {
  itinerary: Itinerary;
}

export default function ItineraryCard({ itinerary }: IntineraryCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-md cursor-pointer bg-white p-2 shadow-md">
      <Link href={`/itinerary/${itinerary.id}`}>
        <div className="relative overflow-hidden">
          <Image
            src={itinerary.city.image}
            alt={itinerary.city.name}
            placeholder="blur"
            loading="lazy"
            className="mb-3 h-48 w-full object-cover"
          />
        </div>
        <Tape className="absolute top-0 -left-4 -translate-y-1/2 -rotate-12" />
        <Tape className="absolute top-0 -right-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
        <div className="p-2 text-center">
          <h3 className="font-handwritten text-foreground text-xl font-bold">
            {itinerary.name}
          </h3>
          <p className="text-foreground flex items-center justify-center gap-1 text-sm">
            <MapPin className="size-3.5" />
            <span>
              {itinerary.city.name}, {itinerary.city.country}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export function ItineraryCardSkeleton() {
  return (
    <div className="relative mx-auto w-full max-w-md bg-white p-2 shadow-md">
      <div className="relative overflow-hidden">
        <Skeleton className="mb-3 h-48 w-52 object-cover" />
      </div>
      <Tape className="absolute top-0 -left-4 -translate-y-1/2 -rotate-12" />
      <Tape className="absolute top-0 -right-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
      <div className="flex flex-col items-center gap-2 p-2 text-center">
        <div className="">
          <Skeleton className="h-6 w-40" />
        </div>
        <div className="">
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </div>
  );
}
