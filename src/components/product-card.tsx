import Image from "next/image";
import type { Product } from "@/lib/products";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/constants";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <div className="aspect-square w-full relative overflow-hidden">
        <Image
          src={product.image.imageUrl}
          alt={product.description}
          data-ai-hint={product.image.imageHint}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex-grow flex flex-col bg-card text-center">
        <h3 className="font-headline text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
          {product.name}
        </h3>
        <p className="mt-2 text-muted-foreground font-body flex-grow text-sm">
          {product.description}
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram />
              Shop on Instagram
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
