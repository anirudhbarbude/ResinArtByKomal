'use client';

import { Instagram, Heart, Mail } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
} from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary/50 border-t border-border/40 font-body">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-12 p-8 bg-card rounded-xl shadow-lg">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary">
            {t('footer.shop.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            {t('footer.shop.description')}
          </p>
          <Button asChild size="lg" className="mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2" /> {t('footer.shop.button')}
            </a>
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">
            {t('footer.shop.note')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.tagline')}
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
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold text-primary">
                {t('footer.quicklinks.title')}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.quicklinks.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.quicklinks.products')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.quicklinks.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.quicklinks.contact')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-to"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.quicklinks.howto')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg font-semibold text-primary">
                {t('footer.categories.title')}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.categories.jewelry')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.categories.homedecor')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.categories.wallart')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.categories.customorders')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">
              {t('footer.newsletter.title')}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              {t('footer.newsletter.description')}
            </p>
            <form className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1"
                aria-label="Email for newsletter"
              />
              <Button type="submit">{t('footer.newsletter.button')}</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {t('footer.handcrafted')} <Heart className="h-4 w-4 text-accent" /> {t('footer.ineverypiece')}
          </p>
        </div>
      </div>
    </footer>
  );
}
