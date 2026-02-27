'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { getImage } from "@/lib/placeholder-images";

export default function AboutPage() {
  const komalImage = getImage("komal-portrait");
  const para1 =
    "- the artist behind AK Artistic Resin. What started as a passion project has blossomed into a dedicated craft of creating beautiful resin art pieces.";
  const para2 =
    "Each creation is meticulously handcrafted with attention to detail, using high-quality materials and sustainable practices. My inspiration comes from the beauty of nature, abstract patterns, and the endless possibilities of resin as a medium.";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-12 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <rect width="1000" height="1000" fill="transparent" />
              <path d="M -100 500 A 350 350 0 0 1 600 500 L 600 1000 L -100 1000 Z" fill="hsl(var(--primary))" opacity="0.7" />
              <path d="M 700 800 A 250 250 0 0 1 1200 800 L 1200 1000 L 700 1000 Z" fill="hsl(var(--accent))" opacity="0.8" />
              <circle cx="750" cy="200" r="80" fill="hsl(var(--primary))" opacity="0.7" />
              <g stroke="hsl(var(--foreground))" strokeWidth="12" fill="none" opacity="0.7">
                  <path d="M 100 550 A 150 150 0 0 1 400 550" />
                  <path d="M 125 550 A 125 125 0 0 1 375 550" />
                  <path d="M 150 550 A 100 100 0 0 1 350 550" />
              </g>
              <g fill="hsl(var(--foreground))" opacity="0.7">
                  <circle cx="450" cy="400" r="10" />
                  <circle cx="480" cy="420" r="5" />
                  <circle cx="460" cy="370" r="7" />
                  <circle cx="500" cy="380" r="8" />
              </g>
            </svg>
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <h2 className="font-headline text-3xl text-primary tracking-tight">
                  The Artisan's Touch
                </h2>
                <h1
                  className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary mt-2"
                >
                  Hi, I'm Komal
                </h1>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  {para1}
                </p>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  {para2}
                </p>
                <ul className="mt-6 space-y-4 text-muted-foreground md:text-lg font-body">
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                    <span>Unique, one-of-a-kind designs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                    <span>Eco-friendly materials & practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                    <span>Made with love & attention to detail</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center animate-in fade-in slide-in-from-right-8 duration-700" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
                <Card className="rounded-xl shadow-2xl overflow-hidden w-full max-w-sm">
                  <CardContent className="p-0 relative aspect-[2/3]">
                    <Image
                      src={komalImage.imageUrl}
                      alt={komalImage.description}
                      data-ai-hint={komalImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
