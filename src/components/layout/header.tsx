import Link from "next/link";
import { Globe, Instagram } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { INSTAGRAM_URL } from "@/lib/constants";
import { LanguageSwitcher } from "../language-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex flex-1">
          <Link href="/" className="mr-6 flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </Button>
            <LanguageSwitcher />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
