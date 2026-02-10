import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM_URL = "https://www.instagram.com/artisticresinbykomal";
const EMAIL_ADDRESS = "mailto:komal.resin.art@example.com";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
              Get In Touch
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 font-body">
              Have a question, a custom request, or just want to say hello?
              I&apos;d love to hear from you. Reach out via email or connect with
              me on Instagram.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="outline">
                <a href={EMAIL_ADDRESS}>
                  <Mail className="mr-2" />
                  Email Me
                </a>
              </Button>
              <Button asChild size="lg">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2" />
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
