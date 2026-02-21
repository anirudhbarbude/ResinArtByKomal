import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { PaintSplatterEffect } from "@/components/paint-splatter-effect";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artistic Resin By Komal",
  description: "Discover beautiful, handcrafted resin art by Komal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PaintSplatterEffect />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
