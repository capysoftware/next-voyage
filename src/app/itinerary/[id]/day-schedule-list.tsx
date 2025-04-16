import { DaySchedule } from "@/components/day-schedule";
import { attractions, cities } from "@/data";
import { db } from "@/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getItinerary(id: string, userId: string) {
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
  const itinerary = data.days.map((day) => ({
    day: day.value,
    city: cities[data.cityId],
    attractions: day.attractions.map((attraction) => ({
      ...attractions[attraction.attractionId],
      startTime: attraction.startTime,
      endTime: attraction.endTime,
    })),
  }));
  return itinerary;
}

export default async function DayScheduleList({ id }: { id: string }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <div>You must be logged in to view your itinerary</div>;
  }
  const itinerary = await getItinerary(id, session.user.id);

  if (!itinerary) {
    return <div>Itinerary not found</div>;
  }

  return itinerary.map((schedule) => (
    <DaySchedule key={schedule.day} schedule={schedule} />
  ));
}
