import Image from "next/image";
import { getImage } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Logo({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const logoImage = getImage("site-logo");
  return (
    <div className={cn("relative h-20 w-48", className)} {...props}>
      <Image
        src={logoImage.imageUrl}
        alt={logoImage.description}
        data-ai-hint={logoImage.imageHint}
        fill
        className="object-contain dark:invert"
      />
    </div>
  );
}
