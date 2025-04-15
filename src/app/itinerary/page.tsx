import DaySchedule, { type Schedule } from "@/components/day-schedule";
import { getItinerary } from "./actions";

const itinerary: Schedule[] = [
  {
    day: 1,
    attractions: [
      {
        id: "1",
        startTime: "9:00",
        endTime: "10:00",
      },
      {
        id: "2",
        startTime: "9:00",
        endTime: "10:00",
      },
    ],
  },
  {
    day: 2,
    attractions: [
      {
        id: "4",
        startTime: "9:00",
        endTime: "10:00",
      },
      {
        id: "3",
        startTime: "9:00",
        endTime: "10:00",
      },
    ],
  },
];

export default async function Page() {
  const { itineraryData } = await getItinerary(`
    Generate an itinerary for Vancouver that includes visits to the following attractions:
    - Stanley Park (ID: 1)
    - Capilano Suspension Bridge (ID: 2)
    - Vancouver Aquarium (ID: 4)
    - Granville Island (ID: 3)

    Determine how many days would be appropriate to visit all these attractions without rushing. Schedule the attractions across the days with suitable start and end times for each visit. Consider travel time between attractions and provide a balanced schedule. Make sure to include the correct ID number for each attraction as specified above.
  `);
  console.dir(itineraryData, { depth: null });

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-6 bottom-0 left-4 border-l-2 border-dashed border-zinc-700" />

      {itinerary.map((schedule) => (
        <DaySchedule key={schedule.day} schedule={schedule} />
      ))}
    </div>
  );
}
