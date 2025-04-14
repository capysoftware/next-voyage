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

export default function Page() {
  return (
    <div className="grid gap-4">
      {itinerary.map((schedule) => (
        <DaySchedule key={schedule.day} schedule={schedule} />
      ))}
    </div>
  );
}
