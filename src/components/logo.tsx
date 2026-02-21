import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative w-32 h-12", className)} {...props}>
      <Image
        src="/logo.png"
        alt="Artistic Resin by Komal Logo"
        fill
        className="object-contain dark:invert"
      />
    </div>
  );
}
