import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Tape(props: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(props.className, "bg-white/60  shadow-sm w-16 h-5")}
    />
  );
}
