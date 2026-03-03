'use client';

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ImageUp, FileJson, Code } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

// A component to display code snippets
const CodeBlock = ({ code }: { code: string }) => (
  <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
    <code className="font-code text-muted-foreground">{code}</code>
  </pre>
);

export default function HowToPage() {
  const { t } = useTranslation();

  const jsonExample = `{
  "id": "my-new-image",
  "description": "A description of my beautiful new image.",
  "imageUrl": "https://example.com/path/to/your/image.jpg",
  "imageHint": "new image",
  "width": 800,
  "height": 600
}`;

  const usageExample = `import { getImage } from '@/lib/placeholder-images';
import Image from "next/image";

// Get your image data
const myImage = getImage('my-new-image');

// Use it in your component
<Image
  src={myImage.imageUrl}
  alt={myImage.description}
  width={myImage.width}
  height={myImage.height}
  data-ai-hint={myImage.imageHint}
/>`;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
                {t('howto.title')}
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed font-body">
                {t('howto.description')}
              </p>
            </div>

            <div className="space-y-12">
              {/* Download Project Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <Download className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{t('howto.download.title')}</CardTitle>
                      <CardDescription>{t('howto.download.description')}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{t('howto.download.para1')}</p>
                  <p className="text-muted-foreground text-sm">{t('howto.download.note')}</p>
                </CardContent>
              </Card>

              {/* Upload Images Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <ImageUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{t('howto.images.title')}</CardTitle>
                      <CardDescription>{t('howto.images.description')}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="font-headline text-xl font-semibold flex items-center gap-2"><FileJson className="h-5 w-5"/> {t('howto.images.step1.title')}</h3>
                    <p className="mt-2 text-muted-foreground">{t('howto.images.step1.para1')} <code className="font-code bg-muted px-1 py-0.5 rounded">src/lib/placeholder-images.json</code>.</p>
                    <p className="mt-2 text-muted-foreground">{t('howto.images.step1.para2')}</p>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{t('howto.images.step2.title')}</h3>
                    <p className="mt-2 text-muted-foreground">{t('howto.images.step2.para1')}</p>
                    <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                      <li>{t('howto.images.step2.li1')}</li>
                      <li>{t('howto.images.step2.li2')}</li>
                    </ul>
                     <p className="mt-4">{t('howto.images.step2.para2')}</p>
                    <CodeBlock code={jsonExample} />
                  </div>

                   <div>
                    <h3 className="font-headline text-xl font-semibold flex items-center gap-2"><Code className="h-5 w-5"/> {t('howto.images.step3.title')}</h3>
                    <p className="mt-2 text-muted-foreground">{t('howto.images.step3.para1')}</p>
                    <p className="mt-2 text-muted-foreground">{t('howto.images.step3.para2')} <code className="font-code bg-muted px-1 py-0.5 rounded">getImage('your-image-id')</code>.</p>
                    <CodeBlock code={usageExample} />
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
