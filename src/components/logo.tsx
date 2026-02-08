import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "font-headline text-2xl font-bold tracking-wider text-primary",
        className
      )}
      {...props}
    >
      AK
    </div>
  );
}
