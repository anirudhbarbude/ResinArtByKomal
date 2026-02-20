import Image from "next/image";
import type { Product } from "@/lib/products";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const INSTAGRAM_URL = "https://www.instagram.com/artisticresinbykomal";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <div className="aspect-square w-full relative overflow-hidden">
        <Image
          src={product.image.imageUrl}
          alt={product.description}
          data-ai-hint={product.image.imageHint}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col bg-card">
        <h3 className="font-headline text-2xl font-bold text-primary">
          {product.name}
        </h3>
        <p className="mt-2 text-muted-foreground font-body flex-grow">
          {product.description}
        </p>
        <div className="mt-4 flex justify-center">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Buy on Instagram Shop
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
