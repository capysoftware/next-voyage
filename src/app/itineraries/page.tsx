import { Suspense } from "react";
import ItinerariesList, { ItinerariesListSkeleton } from "./itineraries-list";

export const experimental_ppr = true;

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<ItinerariesListSkeleton />}>
        <ItinerariesList />
      </Suspense>
    </div>
  );
}
