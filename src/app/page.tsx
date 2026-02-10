import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products, Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Palette, Sparkles, Brush } from "lucide-react";

const productCategories: Product["category"][] = [
  "Home Decor",
  "Art work",
  "Designs",
  "Jewellery",
];

export default function Home() {
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

            {productCategories.map((category) => {
              const categoryProducts = products.filter(
                (p) => p.category === category
              );
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category} className="mb-16">
                  <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8 text-primary/80">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
