import { Loader2 } from "lucide-react";
import { Tape } from "@/components/tape";
import { Skeleton } from "@/components/ui/skeleton";

export function ItinerarySkeleton() {
  return (
    <div className="mb-10">
      <div className="relative mb-4 flex items-center">
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-300">
          <div className="h-2 w-2 rounded-full bg-red-600" />
        </div>
        <div className="font-handwritten ml-4 flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          <span className="pt-1">Loading Itinerary...</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="relative mx-auto mb-6 ml-16 max-w-2xl bg-white p-8 shadow-sm"
          >
            <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
            <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
            <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
            <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 flex flex-1 flex-col gap-4 p-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-6 w-32 pt-1" />
                </div>
                <Skeleton className="h-8 w-48" />
                <div className="font-handwritten mb-2 flex items-start gap-1 text-xs text-gray-600">
                  <div className="flex h-[1lh] items-center"></div>
                  <Skeleton className="h-4 w-48 pt-0.5" />
                </div>
                <Skeleton className="mt-auto h-10 w-48" />
              </div>
              <div className="relative">
                <Skeleton className="h-46 w-48 object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
