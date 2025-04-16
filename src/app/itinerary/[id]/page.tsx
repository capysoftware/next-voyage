import { DayScheduleSkeleton } from "@/components/day-schedule-skeleton";
import { Suspense } from "react";
import DayScheduleList from "./day-schedule-list";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <div className="relative">
        <div className="absolute top-6 bottom-0 left-4 border-l-2 border-dashed border-zinc-700" />
        <Suspense
          fallback={Array.from({ length: 3 }).map((_, index) => (
            <DayScheduleSkeleton key={index} />
          ))}
        >
          <DayScheduleList id={id} />
        </Suspense>
      </div>
    </>
  );
}
