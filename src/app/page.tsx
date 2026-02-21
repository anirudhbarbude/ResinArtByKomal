'use client';

import { useState } from 'react';
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { CheckCircle, PlayCircle } from "lucide-react";
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
  
  const komalImage = getImage('komal-portrait');

  const pastArtworksIds = [
    'tilak-thali-1', 'rakhi-1', 'frame-1', 'beach-watch-1', 'wine-glass-1', 'radha-art-1',
    'rakhi-2', 'frame-2', 'beach-watch-2', 'wine-glass-2', 'radha-art-2', 'tilak-thali-2',
    'rakhi-3', 'frame-3', 'beach-watch-3', 'wine-glass-3', 'radha-art-3',
    'rakhi-4', 'frame-4',
    'rakhi-5', 'frame-5',
    'rakhi-6',
    'rakhi-7',
    'rakhi-8',
    'rakhi-9',
    'rakhi-10',
  ];

  const pastArtworks: ImagePlaceholder[] = pastArtworksIds
    .map(id => PlaceHolderImages.find(img => img.id === id))
    .filter((img): img is ImagePlaceholder => !!img);

  const videos = [
    {
      href: "https://www.instagram.com/reel/DDhiNu4Br_I/?igsh=dngxb2U1MWQ3MjI=",
      thumbnail: getImage('resin-video-thumb-1'),
    },
    {
      href: "https://www.instagram.com/reel/C8q_1Z_yY3L/",
      thumbnail: getImage('resin-video-thumb-2'),
    },
    {
      href: "https://www.instagram.com/reel/C9A_Z_YyZJ_/",
      thumbnail: getImage('resin-video-thumb-3'),
    },
  ];
  
  const heroDescription = "Explore a unique collection of handcrafted resin art, from elegant home décor to beautiful personal accessories. Each piece is a one-of-a-kind creation, made with passion and precision.";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative flex items-center justify-center min-h-[calc(100vh-3.5rem)] bg-secondary/50 overflow-hidden">
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
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 font-body">
              {heroDescription.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500"
                  style={{ animationDelay: `${200 + index * 50}ms`, animationFillMode: 'both' }}
                >
                  {word}{' '}
                </span>
              ))}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-in fade-in slide-in-from-top-4 duration-1000 delay-400">
                <Button asChild size="lg">
                    <Link href="/about">Our Story</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/#products">Our Collections</Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="products" className="py-12 md:py-24">
          <div className="container">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary animate-in fade-in slide-in-from-top-4 duration-500">
              Our Collection
            </h2>

            <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
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

        <section id="past-artworks" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary animate-in fade-in slide-in-from-top-4 duration-500">
              My Resin Arts
            </h2>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {pastArtworks.map((artwork, index) => (
                <Dialog key={artwork.id}>
                  <DialogTrigger asChild>
                    <div
                      className="break-inside-avoid cursor-pointer animate-in fade-in-0 zoom-in-95 duration-300"
                      style={{ animationDelay: `${200 + index * 50}ms`, animationFillMode: 'both' }}
                    >
                      <Card className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                        <CardContent className="p-0">
                          <Image
                            src={artwork.imageUrl}
                            alt={artwork.description}
                            data-ai-hint={artwork.imageHint}
                            width={artwork.width}
                            height={artwork.height}
                            className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
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
          </div>
        </section>

        <section id="watch-me-create" className="py-12 md:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-top-4 duration-500">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
                Watch Me Create
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed font-body">
                See the magic happen! Watch a timelapse of a beautiful piece being created from start to finish.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full animate-in fade-in-0 zoom-in-95 duration-300"
                  style={{ animationDelay: `${200 + index * 150}ms`, animationFillMode: 'both' }}
                >
                  <Card className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
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
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
