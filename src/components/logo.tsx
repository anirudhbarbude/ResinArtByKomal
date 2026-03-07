import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Image from "next/image";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} {...props}>
      <Image
        src="https://i.imgur.com/iNpV4QY.png"
        alt="Artistic Resin by Komal logo"
        width={103}
        height={83}
        className="dark:invert w-auto h-12"
        priority
      />
    </div>
  );
}
