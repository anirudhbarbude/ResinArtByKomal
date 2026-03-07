import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "font-logo text-4xl text-primary select-none",
        className
      )}
      {...props}
    >
      AK
    </div>
  );
}
