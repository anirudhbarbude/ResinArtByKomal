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
  
  const BotanicalBackground = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full object-cover opacity-100"
    >
      <rect width="1000" height="1000" fill="hsl(var(--background))" />
      <path d="M -200 -100 C 300 200, 200 500, 600 400 L -200 400 Z" fill="hsl(var(--secondary))" opacity="0.5" />
      <path d="M 1200 1100 C 700 800, 800 500, 400 600 L 1200 600 Z" fill="hsl(var(--secondary))" opacity="0.5" />
      <g transform="translate(650, 50) scale(1.4)" stroke="hsl(var(--accent))" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M 0,150 C 50,100 100,100 150,150" />
          <path d="M 10,140 C 20,130 30,130 40,140" />
          <path d="M 50,130 C 60,120 70,120 80,130" />
          <path d="M 90,140 C 100,130 110,130 120,140" />
          <path d="M 130,150 C 140,140 150,140 160,150" />
          <path d="M 75,150 V 50" />
          <path d="M 75,120 L 25,70" />
          <path d="M 75,90 L 125,40" />
          <path d="M 35,60 C 25,50 15,50 5,60" />
          <path d="M 115,30 C 125,20 135,20 145,30" />
      </g>
      <g transform="translate(100, 650) scale(1.8) rotate(-15)" stroke="hsl(var(--accent))" strokeWidth="6" fill="none" strokeLinecap="round">
          <path d="M 0,200 C 50,150 100,150 150,200" />
          <path d="M 10,190 C 20,180 30,180 40,190" />
          <path d="M 50,180 C 60,170 70,170 80,180" />
          <path d="M 90,190 C 100,180 110,180 120,190" />
          <path d="M 75,200 V 100" />
          <path d="M 75,170 L 25,120" />
          <path d="M 75,140 L 125,90" />
      </g>
    </svg>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-12 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BotanicalBackground />
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
