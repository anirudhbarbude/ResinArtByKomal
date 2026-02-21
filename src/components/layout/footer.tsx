import { Instagram, Heart, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  PHONE_NUMBER,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/40 font-body">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12 p-8 bg-card rounded-xl shadow-lg">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary">
            Shop Directly on Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Browse our latest collections, see behind-the-scenes, and purchase
            directly through Instagram DMs. Follow us for updates on new
            arrivals and exclusive offers!
          </p>
          <Button asChild size="lg" className="mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2" /> Visit Our Instagram Shop
            </a>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">
            DM us on Instagram to purchase any product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <div>
                <span className="font-bold sm:inline-block font-headline text-primary text-lg">
                  Artistic Resin
                </span>
                <span className="block text-sm text-muted-foreground">
                  by Komal
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Creating beautiful resin art pieces that inspire and delight.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@{INSTAGRAM_USERNAME}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{PHONE_NUMBER}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold text-primary">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold text-primary">
                Categories
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resin Jewelry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Wall Art
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Custom Orders
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe for updates on new collections and exclusive offers.
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Artistic Resin By Komal. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Handcrafted with <Heart className="h-4 w-4 text-accent" /> in every
            piece
          </p>
        </div>
      </div>
    </footer>
  );
}
