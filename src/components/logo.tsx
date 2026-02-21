import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-9 w-9 flex-shrink-0", className)}
      {...props}
    >
      <svg
        className="absolute inset-0 h-full w-full text-primary"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="resinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <path
          d="M 20,20 C 40,0 60,0 80,20 C 100,40 100,60 80,80 C 60,100 40,100 20,80 C 0,60 0,40 20,20 Z"
          fill="url(#resinGradient)"
          transform="rotate(15 50 50)"
        />
      </svg>
      <span className="relative flex h-full w-full items-center justify-center font-headline text-xl font-bold text-primary-foreground">
        AK
      </span>
    </div>
  );
}
