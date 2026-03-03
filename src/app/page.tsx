'use client';

import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { CheckCircle, PlayCircle, Truck } from "lucide-react";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  getImage,
  PlaceHolderImages,
  type ImagePlaceholder,
} from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useTranslation } from '@/lib/i18n';
import { PincodeChecker } from '@/components/pincode-checker';

const filterCategories = [
  "All Products",
  "Jewelry",
  "Home Decor",
  "Custom Pieces",
];

export default function Home() {
  const [filter, setFilter] = useState("All Products");
  const { t } = useTranslation();

  const [isImageHeroVisible, setIsImageHeroVisible] = useState(false);
  const imageHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageHeroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = imageHeroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    if (filter === "All Products") {
      return true;
    }
    if (filter === "Jewelry") {
      return product.category === "Jewellery";
    }
    if (filter === "Home Decor") {
      return product.category === "Home Decor";
    }
    if (filter === "Custom Pieces") {
      return product.category === "Art work" || product.category === "Designs";
    }
    return false;
  });
  
  const komalImage = getImage('komal-portrait');
  const artImage = getImage('shree-krishna-art-1');

  const pastArtworksIds = [
    'resin-coasters-1', 'resin-tray-1', 'resin-jewelry-1', 'resin-wall-art-1', 'resin-clock-1', 'resin-keychains-1', 
    'tilak-thali-1', 'tilak-thali-2', 'rakhi-1', 'rakhi-2', 'rakhi-3', 'rakhi-4', 'rakhi-5', 'rakhi-6', 'rakhi-7', 
    'rakhi-8', 'rakhi-9', 'rakhi-10', 'frame-1', 'frame-2', 'frame-3', 'frame-4', 'frame-5', 'beach-watch-1', 
    'beach-watch-2', 'beach-watch-3', 'wine-glass-1', 'wine-glass-2', 'wine-glass-3', 'radha-art-1', 'radha-art-2', 
    'radha-art-3', 'shubh-labh-1', 'phone-cover-1', 'moksmala-frame-1', 'beach-theme-clock-1', 'flower-preservation-1', 
    'custom-diyas-1', 'birthmoon-pendant-1', 'resin-necklaces-1', 'tissue-box-1', 'scanner-stand-1', 'rose-vase-1', 
    'oceanic-journal-1', 'navkar-mantra-standee-1', 'resin-art-thali-1', 'shree-krishna-art-1', 'resin-ring-platter-1', 
    'birthday-bouquet-1', 'ganpati-standee-1'
  ];

  const pastArtworks: ImagePlaceholder[] = pastArtworksIds
    .map(id => PlaceHolderImages.find(img => img.id === id))
    .filter((img): img is ImagePlaceholder => !!img);

  const artworksInGroups: ImagePlaceholder[][] = [];
  const groupSize = 12;
  for (let i = 0; i < pastArtworks.length; i += groupSize) {
    artworksInGroups.push(pastArtworks.slice(i, i + groupSize));
  }

  const videos = [
    {
      href: "https://i.imgur.com/2K2d32a.mp4",
      thumbnail: getImage('resin-video-thumb-1'),
    },
    {
      href: "https://i.imgur.com/46BMkdw.mp4",
      thumbnail: getImage('resin-video-thumb-2'),
    },
    {
      href: "https://i.imgur.com/KP4FFye.mp4",
      thumbnail: getImage('resin-video-thumb-3'),
    },
  ];
  
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
        <section className="relative flex items-center justify-center min-h-[calc(100vh-3.5rem)] bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BotanicalBackground />
          </div>

          <div className="container relative px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
              {t('home.hero.title_prefix')}
              <span className="font-logo text-accent text-5xl sm:text-7xl inline-block animate-fall-and-bounce mx-1">{t('home.hero.title_name')}</span>
              {t('home.hero.title_suffix')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 font-body">
              {t('home.hero.description').split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500 mr-1.5"
                  style={{ animationDelay: `${200 + index * 50}ms`, animationFillMode: 'both' }}
                >
                  {word}
                </span>
              ))}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-top-4 duration-1000 delay-400">
                <Button asChild size="lg">
                    <Link href="/about">{t('home.hero.button1')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/#products">{t('home.hero.button2')}</Link>
                </Button>
            </div>
          </div>
        </section>

        <section ref={imageHeroRef} id="image-hero" className="relative h-[70vh] overflow-hidden flex items-center justify-center text-center">
          <Image
            src={artImage.imageUrl}
            alt={artImage.description}
            data-ai-hint={artImage.imageHint}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-white">
              <h2 className="font-logo text-5xl sm:text-6xl md:text-7xl text-white mb-4 drop-shadow-lg">
                {t('home.video.title').split(" ").map((word, index) => (
                    <span
                    key={index}
                    className={`inline-block mr-1.5 ${isImageHeroVisible ? 'animate-in fade-in slide-in-from-bottom-2 duration-500' : 'opacity-0'}`}
                    style={isImageHeroVisible ? { animationDelay: `${200 + index * 100}ms`, animationFillMode: 'both' } : {}}
                    >
                    {word}
                    </span>
                ))}
              </h2>
              <p className="text-xl md:text-2xl font-body text-white/90 drop-shadow-md">
                {t('home.video.subtitle').split(" ").map((word, index) => (
                    <span
                    key={index}
                    className={`inline-block mr-1.5 ${isImageHeroVisible ? 'animate-in fade-in slide-in-from-bottom-2 duration-500' : 'opacity-0'}`}
                    style={isImageHeroVisible ? { animationDelay: `${700 + index * 100}ms`, animationFillMode: 'both' } : {}}
                    >
                    {word}
                    </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            <div className="flex items-center justify-center gap-4 rounded-xl bg-muted p-6 text-center shadow-md animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <Truck className="h-8 w-8 text-primary" />
              <p className="font-headline text-2xl font-semibold text-primary tracking-wide">
                {t('home.delivery.text')}
              </p>
            </div>
            <div className="mt-8">
              <PincodeChecker />
            </div>
          </div>
        </section>

        <section id="products" className="relative py-12 md:py-24 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BotanicalBackground />
          </div>
          <div className="container relative">
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                <svg
                    className="w-16 md:w-24 text-primary opacity-70"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M100 10C80 0 70 2 50 10S10 19 0 20" stroke="currentColor" strokeWidth="2" />
                    <path d="M75 10C80 5 85 5 90 8" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                </svg>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-primary shrink-0">
                    {t('home.collection.title')}
                </h2>
                <svg
                    className="w-16 md:w-24 text-primary opacity-70 transform -scale-x-100"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M100 10C80 0 70 2 50 10S10 19 0 20" stroke="currentColor" strokeWidth="2" />
                    <path d="M75 10C80 5 85 5 90 8" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                </svg>
            </div>

            <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="font-body"
                >
                  {t(`home.collection.filters.${category.replace(/ /g, '')}`)}
                </Button>
              ))}
            </div>

            <div className="mx-auto max-w-max grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-top-8 duration-500"
                  style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'both' }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BotanicalBackground />
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex justify-center animate-in fade-in slide-in-from-left-8 duration-700">
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
              <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                <h2 className="font-headline text-3xl text-primary tracking-tight">
                  {t('about.subtitle')}
                </h2>
                <h1 className="font-headline text-4xl tracking-tighter sm:text-5xl text-primary mt-2">
                  {t('about.title_prefix')}
                  <span className="font-logo text-accent text-5xl sm:text-7xl inline-block animate-fall-and-bounce mx-1">{t('about.title_name')}</span>
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
            </div>
          </div>
        </section>

        <section id="past-artworks" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                <svg
                    className="w-16 md:w-24 text-primary opacity-70"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M100 10C80 0 70 2 50 10S10 19 0 20" stroke="currentColor" strokeWidth="2" />
                    <path d="M75 10C80 5 85 5 90 8" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                </svg>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-primary shrink-0">
                    {t('home.gallery.title')}
                </h2>
                <svg
                    className="w-16 md:w-24 text-primary opacity-70 transform -scale-x-100"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M100 10C80 0 70 2 50 10S10 19 0 20" stroke="currentColor" strokeWidth="2" />
                    <path d="M75 10C80 5 85 5 90 8" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                </svg>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: artworksInGroups.length > 1,
              }}
              className="w-full relative"
            >
              <CarouselContent>
                {artworksInGroups.map((group, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {group.map((artwork) => (
                        <Dialog key={artwork.id}>
                          <DialogTrigger asChild>
                            <div className="cursor-pointer">
                              <Card className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                                <CardContent className="p-0 relative aspect-[3/4]">
                                  <Image
                                    src={artwork.imageUrl}
                                    alt={artwork.description}
                                    data-ai-hint={artwork.imageHint}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </CardContent>
                              </Card>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-5xl w-auto">
                            <Image
                              src={artwork.imageUrl}
                              alt={artwork.description}
                              data-ai-hint={artwork.imageHint}
                              width={artwork.width * 2}
                              height={artwork.height * 2}
                              className="object-contain w-full h-auto max-h-[90vh] rounded-lg"
                            />
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-background/50 backdrop-blur-sm border-none text-foreground/80 hover:bg-background/70 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-background/50 backdrop-blur-sm border-none text-foreground/80 hover:bg-background/70 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all" />
            </Carousel>
          </div>
        </section>

        <section id="watch-me-create" className="relative py-12 md:py-24 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BotanicalBackground />
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-4">
                  <svg
                      className="w-16 md:w-24 text-primary opacity-70"
                      viewBox="0 0 100 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M100 10C80 0 70 2 50 10S10 19 0 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M75 10C80 5 85 5 90 8" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  </svg>
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary shrink-0">
                      {t('home.create.title')}
                  </h2>
                  <svg
                      className="w-16 md:w-24 text-primary opacity-70 transform -scale-x-100"
                      viewBox="0 0 100 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M100 10C80 0 70 2 50 10S10 19 0 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M75 10C80 5 85 5 90 8" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  </svg>
              </div>
              <p className="text-muted-foreground md:text-xl/relaxed font-body">
                {t('home.create.description')}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div
                      className="animate-in fade-in-0 zoom-in-95 duration-300"
                      style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'both' }}
                    >
                      <Card className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                        <CardContent className="p-0">
                          <div className="aspect-video w-full relative">
                            <Image
                              src={video.thumbnail.imageUrl}
                              alt={video.thumbnail.description}
                              data-ai-hint={video.thumbnail.imageHint}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <PlayCircle className="h-20 w-20 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-5xl w-auto">
                    <video
                      src={video.href}
                      controls
                      autoPlay
                      className="w-full h-auto max-h-[90vh] rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
