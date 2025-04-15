import DaySchedule, { type Schedule } from "@/components/day-schedule";

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
