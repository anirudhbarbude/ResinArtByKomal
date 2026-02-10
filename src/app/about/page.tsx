import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
                  About Komal
                </h1>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  Komal is a passionate resin artist who finds joy in creating
                  unique and beautiful pieces that bring a touch of elegance and
                  artistry to everyday life. Her journey into the world of resin
                  art began as a hobby, a way to express her creativity and
                  experiment with colors, textures, and forms.
                </p>
                <p className="mt-4 max-w-3xl text-muted-foreground md:text-xl/relaxed font-body">
                  What started in a small home studio has blossomed into
                  &quot;Artistic Resin By Komal,&quot; a place where she shares her
                  one-of-a-kind creations with the world. Each piece, whether
                  it&apos;s a delicate piece of jewelry or a statement home décor
                  item, is handcrafted with meticulous attention to detail and a
                  deep love for the craft. Komal believes that art should be
                  accessible and personal, and she pours her heart into every
                  creation, hoping to bring a little bit of beauty and joy into
                  your home.
                </p>
              </div>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
