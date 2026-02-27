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
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            >
                <path d="M-100,0 C 200,200 150,400 400,300 C 650,200 800,400 1100,200 L 1100,0 Z" fill="hsl(var(--secondary))" />
                <path d="M-100,1000 C 200,800 150,600 400,700 C 650,800 800,600 1100,800 L 1100,1000 Z" fill="hsl(var(--accent) / 0.5)" />

                <g transform="translate(650, 100) scale(1.2)" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" fill="none" stroke="hsl(var(--primary))">
                  <path d="M 0,0 C 50,50 100,50 150,0" />
                  <path d="M 25,50 C 35,40 45,40 55,50" />
                  <path d="M 75,50 C 85,40 95,40 105,50" />
                  <path d="M 125,40 C 135,30 145,30 155,40" />

                  <path d="M 75,50 C 75,100 125,120 150,150" />
                  <path d="M 95,95 C 105,85 115,85 125,95" />
                  <path d="M 130,135 C 140,125 150,125 160,135" />
                </g>

                <g transform="translate(100, 600) scale(1.5) rotate(20)" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" fill="none" stroke="hsl(var(--primary))">
                    <path d="M 0,0 C 50,50 100,50 150,0" />
                    <path d="M 25,50 C 35,40 45,40 55,50" />
                    <path d="M 75,50 C 85,40 95,40 105,50" />
                    <path d="M 125,40 C 135,30 145,30 155,40" />
                    <path d="M 0,0 C 0,50 -50,70 -80,100" />
                    <path d="M -20,45 C -30,35 -40,35 -50,45" />
                    <path d="M -60,85 C -70,75 -80,75 -90,85" />
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
