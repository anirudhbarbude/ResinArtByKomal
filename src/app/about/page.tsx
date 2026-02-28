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
      <defs>
        <g id="floral-border-motif">
          {/* Scalloped edge shadow */}
          <path
            d="M 0 0 C 30 0, 50 20, 50 50 S 30 100, 0 100 C -30 100, -50 80, -50 50 S -30 0, 0 0 Z"
            id="scallop"
            fill="hsl(var(--muted))"
            opacity="0.6"
          />
          <path d="M0,0 C10,15 30,15 40,0 L20,-5 Z" id="leaf" fill="hsl(var(--chart-2))" />
          <g id="flower">
            <circle r="12" fill="hsl(var(--accent))" />
            <circle r="5" fill="hsl(var(--chart-4))" />
          </g>
          <circle r="4" id="berry" fill="hsl(var(--chart-4))" opacity="0.9" />

          <g id="floral-vine-section">
            {/* Scallops behind */}
            <use href="#scallop" x="-60" y="50" transform="scale(0.8)" />
            <use href="#scallop" x="-60" y="150" transform="scale(0.8)" />
            <use href="#scallop" x="-60" y="250" transform="scale(0.8)" />
            <use href="#scallop" x="-60" y="350" transform="scale(0.8)" />
            <use href="#scallop" x="-60" y="450" transform="scale(0.8)" />

            {/* Vine Path */}
            <path
              d="M 0 0 C 50 100, -50 200, 0 300 C 50 400, -50 500, 0 600"
              stroke="hsl(var(--primary))"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Decor */}
            <use href="#flower" x="25" y="50">
              <animateTransform attributeName="transform" type="scale" additive="sum" values="1; 1.05; 1" dur="7s" begin="-0.5s" repeatCount="indefinite" />
            </use>
            <use href="#leaf" x="15" y="120" transform="rotate(-30 15 120)">
              <animateTransform attributeName="transform" type="rotate" additive="sum" values="0; 5; 0" dur="6s" begin="0s" repeatCount="indefinite" />
            </use>
            <use href="#berry" x="35" y="150" />
            <use href="#berry" x="45" y="160" />

            <use href="#leaf" x="-25" y="220" transform="rotate(210 -25 220)">
              <animateTransform attributeName="transform" type="rotate" additive="sum" values="0; -5; 0" dur="6s" begin="-1.5s" repeatCount="indefinite" />
            </use>
            <use href="#flower" x="-20" y="280">
              <animateTransform attributeName="transform" type="scale" additive="sum" values="1; 1.05; 1" dur="7s" begin="-2s" repeatCount="indefinite" />
            </use>
            <use href="#berry" x="-35" y="180" />
            
            <use href="#flower" x="25" y="380">
              <animateTransform attributeName="transform" type="scale" additive="sum" values="1; 1.05; 1" dur="7s" begin="-3.5s" repeatCount="indefinite" />
            </use>
            <use href="#leaf" x="15" y="450" transform="rotate(-30 15 450)">
              <animateTransform attributeName="transform" type="rotate" additive="sum" values="0; 5; 0" dur="6s" begin="-4s" repeatCount="indefinite" />
            </use>
            <use href="#berry" x="35" y="480" />
            
            <use href="#leaf" x="-25" y="520" transform="rotate(210 -25 520)">
              <animateTransform attributeName="transform" type="rotate" additive="sum" values="0; -5; 0" dur="6s" begin="-5.5s" repeatCount="indefinite" />
            </use>
            <use href="#berry" x="-35" y="550" />
          </g>
        </g>
      </defs>

      <g opacity="0.7">
        <use href="#floral-vine-section" transform="translate(980 0) rotate(10)" />
        <use href="#floral-vine-section" transform="translate(20 1000) rotate(190)" />
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
                  {t('about.title_prefix')}
                  <span className="inline-block animate-fall-and-bounce">{t('about.title_name')}</span>
                  {t('about.title_suffix')}
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
