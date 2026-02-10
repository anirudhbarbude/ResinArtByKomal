'use client';

import { useState } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Palette, Sparkles, Brush, CheckCircle } from "lucide-react";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const filterCategories = [
  "All Products",
  "Jewelry",
  "Home Decor",
  "Custom Pieces",
];

export default function Home() {
  const [filter, setFilter] = useState("All Products");

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
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            >
              <defs>
                <pattern
                  id="lines-1"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 6 H 12"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1.5"
                  />
                </pattern>
                <pattern
                  id="lines-2"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 6 H 12"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                  />
                </pattern>
                <pattern
                  id="lines-3"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 6 H 12"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <g transform="translate(100, 100) scale(0.8) rotate(-15 500 500)">
                <circle cx="650" cy="300" r="250" fill="url(#lines-1)" />
                <circle cx="300" cy="700" r="220" fill="url(#lines-2)" />
                <circle cx="800" cy="750" r="150" fill="url(#lines-3)" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  d="M 543 986 C 596 820, 615 651, 658 493 C 688 381, 725 268, 775 168 
                   M 658 493 C 603 446, 523 424, 452 387 C 401 360, 355 323, 331 270
                   M 658 493 C 711 547, 750 632, 792 703
                   M 565 831 C 590 754, 624 672, 658 493
                   M 732 328 C 695 381, 676 439, 658 493
                   M 402 334 C 493 381, 579 430, 658 493
                "
                />
              </g>
            </svg>
          </div>

          <div className="container relative px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
              Artistic Resin By Komal
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 font-body animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
              Explore a unique collection of handcrafted resin art, from elegant
              home décor to beautiful personal accessories. Each piece is a
              one-of-a-kind creation, made with passion and precision.
            </p>
            <div className="flex justify-center gap-6 mt-8 text-accent animate-in fade-in slide-in-from-top-4 duration-1000 delay-400">
              <Brush size={32} />
              <Palette size={32} />
              <Sparkles size={32} />
            </div>
          </div>
        </section>

        <section id="products" className="py-12 md:py-24">
          <div className="container">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
              Our Collection
            </h2>

            <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="font-body"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="mx-auto max-w-max grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            >
              <defs>
                <pattern
                  id="lines-1"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 6 H 12"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1.5"
                  />
                </pattern>
                <pattern
                  id="lines-2"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 6 H 12"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                  />
                </pattern>
                <pattern
                  id="lines-3"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 6 H 12"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <g transform="translate(100, 100) scale(0.8) rotate(-15 500 500)">
                <circle cx="650" cy="300" r="250" fill="url(#lines-1)" />
                <circle cx="300" cy="700" r="220" fill="url(#lines-2)" />
                <circle cx="800" cy="750" r="150" fill="url(#lines-3)" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                  fill="none"
                  stroke="hsl(var(--foreground))"
                  d="M 543 986 C 596 820, 615 651, 658 493 C 688 381, 725 268, 775 168 
                   M 658 493 C 603 446, 523 424, 452 387 C 401 360, 355 323, 331 270
                   M 658 493 C 711 547, 750 632, 792 703
                   M 565 831 C 590 754, 624 672, 658 493
                   M 732 328 C 695 381, 676 439, 658 493
                   M 402 334 C 493 381, 579 430, 658 493
                "
                />
              </g>
            </svg>
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex justify-center">
                <Card className="rounded-xl shadow-2xl overflow-hidden w-full max-w-sm">
                  <CardContent className="p-0">
                    <Image
                      src="https://picsum.photos/seed/komal/600/700"
                      alt="Portrait of Komal, the artist"
                      data-ai-hint="artist portrait"
                      width={600}
                      height={700}
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="font-headline text-3xl text-primary tracking-tight">
                  The Artisan's Touch
                </h2>
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary mt-2">
                  Hi, I'm Komal
                </h1>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  - the artist behind AK Artistic Resin. What started as a
                  passion project has blossomed into a dedicated craft of
                  creating beautiful resin art pieces.
                </p>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  Each creation is meticulously handcrafted with attention to
                  detail, using high-quality materials and sustainable
                  practices. My inspiration comes from the beauty of nature,
                  abstract patterns, and the endless possibilities of resin as a
                  medium.
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
