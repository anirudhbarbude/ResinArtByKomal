import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
        <span className="font-headline text-2xl font-bold text-primary tracking-wider">
            AK
        </span>
    </div>
  );
}
