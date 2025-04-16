import { Suspense } from "react";
import ItinerariesList, { ItinerariesListSkeleton } from "./itineraries-list";

export default async function Page() {
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Suspense fallback={<ItinerariesListSkeleton />}>
          <ItinerariesList />
        </Suspense>
      </div>
    </div>
  );
}
