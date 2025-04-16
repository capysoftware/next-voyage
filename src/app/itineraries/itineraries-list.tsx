import ItineraryCard, {
  ItineraryCardSkeleton,
} from "@/components/itinerary-card";
import { cities } from "@/data";
import { db } from "@/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getItineraries() {
  const data = await db.query.itineraries.findMany();
  return data.map((itinerary) => ({
    ...itinerary,
    city: cities[itinerary.cityId],
  }));
}

export type Itinerary = Awaited<ReturnType<typeof getItineraries>>[number];

export default async function ItinerariesList() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <div>You must be logged in to view your itineraries</div>;
  }

  const itineraries = await getItineraries();

  return itineraries.map((itinerary) => (
    <ItineraryCard key={itinerary.id} itinerary={itinerary} />
  ));
}

export function ItinerariesListSkeleton() {
  return Array.from({ length: 4 }).map((_, index) => (
    <ItineraryCardSkeleton key={index} />
  ));
}
