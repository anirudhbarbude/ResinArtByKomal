'use client';

import { useState } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Palette, Sparkles, Brush } from "lucide-react";
import { Button } from '@/components/ui/button';

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
        <section className="py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              Artistic Resin By Komal
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 font-body">
              Explore a unique collection of handcrafted resin art, from elegant
              home décor to beautiful personal accessories. Each piece is a
              one-of-a-kind creation, made with passion and precision.
            </p>
            <div className="flex justify-center gap-6 mt-8 text-accent">
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

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
