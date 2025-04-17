import ItineraryCard, {
  ItineraryCardSkeleton,
} from "@/components/itinerary-card";
import { Button } from "@/components/ui/button";
import { cities } from "@/data";
import { db } from "@/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

async function getItineraries(userId: string) {
  "use cache";
  const data = await db.query.itineraries.findMany({
    where: (itineraries, { eq }) => eq(itineraries.userId, userId),
  });
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

  const itineraries = await getItineraries(session.user.id);

  return itineraries.length > 0 ? (
    <div className="mx-auto grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
      ))}
    </div>
  ) : (
    <div className="font-handwritten flex h-full flex-col items-center justify-center gap-4">
      <p className="text-center text-sm">
        No itineraries found. Start planning your next adventure!
      </p>
      <div>
        <Link href="/" className="text-center text-sm">
          <Button>Start Planning</Button>
        </Link>
      </div>
    </div>
  );
}

export function ItinerariesListSkeleton() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <ItineraryCardSkeleton key={index} />
      ))}
    </div>
  );
}
