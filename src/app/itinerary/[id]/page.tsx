import { Suspense } from "react";
import DayScheduleList, { DayScheduleListSkeleton } from "./day-schedule-list";

export const experimental_ppr = true;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Suspense fallback={<DayScheduleListSkeleton />}>
        <DayScheduleList id={id} />
      </Suspense>
    </>
  );
}
