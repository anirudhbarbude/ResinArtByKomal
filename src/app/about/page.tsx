'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { getImage } from "@/lib/placeholder-images";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useTranslation();
  const komalImage = getImage("komal-portrait");
  
  const BotanicalBackground = () => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <rect width="1000" height="1000" fill="hsl(var(--background))" />
      <g>
        {/* Bottom left shape */}
        <path
          d="M -100 1100 C 200 1000, 400 900, 500 700 C 600 500, 200 400, -100 600 Z"
          fill="hsl(var(--secondary))"
          opacity="0.4"
        />
        {/* Top right shape */}
        <path
          d="M 1100 -100 C 900 0, 700 100, 600 300 C 500 500, 900 600, 1100 400 Z"
          fill="hsl(var(--muted))"
          opacity="0.6"
        />

        {/* Bottom left branch */}
        <g transform="translate(50, 750) scale(1.2)" stroke="hsl(var(--primary))" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
          <path d="M 0 200 C 50 150, 150 100, 200 0" />
          {/* leaves */}
          <path d="M 40 180 C 20 170, 30 150, 45 155" />
          <path d="M 80 140 C 60 130, 70 110, 85 115" />
          <path d="M 120 100 C 100 90, 110 70, 125 75" />
          <path d="M 160 60 C 140 50, 150 30, 165 35" />
          <path d="M 190 20 C 170 10, 180 -10, 195 -5" />
          <path d="M 10 150 C 0 130, 10 120, 20 125" />
          <path d="M 60 100 C 50 80, 60 70, 70 75" />
          <path d="M 100 60 C 90 40, 100 30, 110 35" />
          <path d="M 140 20 C 130 0, 140 -10, 150 -5" />
        </g>
        
        {/* Top right branch */}
        <g transform="translate(680, 80) scale(1.1) rotate(10)" stroke="hsl(var(--primary))" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
           <path d="M 250 0 C 200 50, 100 100, 0 200" />
           {/* leaves */}
           <path d="M 240 20 C 260 30, 240 40, 235 35" />
           <path d="M 200 50 C 220 60, 200 70, 195 65" />
           <path d="M 160 85 C 180 95, 160 105, 155 100" />
           <path d="M 110 125 C 130 135, 110 145, 105 140" />
           <path d="M 65 160 C 85 170, 65 180, 60 175" />
           <path d="M 20 190 C 40 200, 20 210, 15 205" />
           <path d="M 180 30 C 190 20, 210 30, 200 35" />
           <path d="M 130 70 C 140 60, 160 70, 150 75" />
           <path d="M 85 110 C 95 100, 115 110, 105 115" />
           <path d="M 40 150 C 50 140, 70 150, 60 155" />
           <path d="M 0 180 C 10 170, 30 180, 20 185" />
        </g>
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
                  {t('about.subtitle')}
                </h2>
                <h1
                  className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary mt-2"
                >
                  {t('about.title')}
                </h1>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  {t('about.para1')}
                </p>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  {t('about.para2')}
                </p>
                <ul className="mt-6 space-y-4 text-muted-foreground md:text-lg font-body">
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                    <span>{t('about.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                    <span>{t('about.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0" />
                    <span>{t('about.feature3')}</span>
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
