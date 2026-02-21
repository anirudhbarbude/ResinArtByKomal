import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Instagram, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  PHONE_NUMBER,
} from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
                Get In Touch
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed font-body">
                Have questions about our products or interested in a custom
                piece? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-headline">Email</CardTitle>
                  <p className="mt-2 text-muted-foreground">
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="hover:text-primary"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-headline">
                    Instagram
                  </CardTitle>
                  <p className="mt-2 text-muted-foreground">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      @{INSTAGRAM_USERNAME}
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-headline">Phone</CardTitle>
                  <p className="mt-2 text-muted-foreground">{PHONE_NUMBER}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
