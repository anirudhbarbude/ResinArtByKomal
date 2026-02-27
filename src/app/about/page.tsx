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
      <g opacity="0.6">
        {/* Pink watercolor circles */}
        <circle cx="150" cy="250" r="180" fill="hsl(var(--accent))" opacity="0.1" />
        <circle cx="800" cy="850" r="200" fill="hsl(var(--accent))" opacity="0.1" />
        <circle cx="500" cy="500" r="100" fill="hsl(var(--accent))" opacity="0.05" />
        <circle cx="900" cy="150" r="120" fill="hsl(var(--accent))" opacity="0.12" />

        {/* Lighter secondary circles */}
        <circle cx="250" cy="800" r="150" fill="hsl(var(--secondary))" opacity="0.5" />
        <circle cx="700" cy="300" r="130" fill="hsl(var(--secondary))" opacity="0.4" />
        
        {/* Arch/Rainbow shape */}
        <path d="M 400 700 A 100 100 0 0 1 600 700" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.2" />
        <path d="M 380 700 A 120 120 0 0 1 620 700" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.2" />
        <path d="M 360 700 A 140 140 0 0 1 640 700" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.2" />

         {/* Scribble texture */}
        <g transform="translate(750, 50) rotate(-30)">
          <path d="M0,0 L80,10" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
          <path d="M0,10 L80,20" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
          <path d="M0,20 L80,30" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
          <path d="M0,30 L80,40" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.3" />
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
