import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Tape(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(props.className, "isolate h-5 w-16 bg-white/60 shadow-sm")}
    />
  );
}
