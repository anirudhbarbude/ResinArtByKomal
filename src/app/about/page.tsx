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
  
  const ModernBohoBackground = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full object-cover opacity-100"
    >
      <rect width="1000" height="1000" fill="hsl(var(--background))" />
      <path d="M 500 1000 A 400 400 0 0 0 500 200 A 400 400 0 0 0 500 1000 Z" fill="hsl(var(--secondary))" opacity="0.4" transform="translate(300, -350)" />
      <path d="M 200 1200 A 300 300 0 0 1 200 600" fill="none" stroke="hsl(var(--accent))" strokeWidth="80" opacity="0.3" />
      <circle cx="150" cy="200" r="100" fill="hsl(var(--primary))" opacity="0.2" />
      <circle cx="900" cy="800" r="150" fill="hsl(var(--accent))" opacity="0.25" />
      <rect x="0" y="450" width="1000" height="100" fill="hsl(var(--secondary))" opacity="0.3" />
    </svg>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative py-12 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ModernBohoBackground />
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
