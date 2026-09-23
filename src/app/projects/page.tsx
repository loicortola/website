import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { PageHeader, Section } from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { featured, more } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Side projects, open-source libraries, hardware hacks and training material.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects">
        <p>Things I built on evenings and weekends: web apps, games, hardware, libraries and training material.</p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6">
        {featured.map((p) => (
          <Card key={p.slug} id={p.slug} className="scroll-mt-20 lg:flex-row lg:py-0">
            <div className="flex flex-1 flex-col gap-4 lg:py-6">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold tracking-tight">{p.title}</CardTitle>
                <CardDescription className="text-base">{p.summary}</CardDescription>
              </CardHeader>
              <CardContent className="text-base text-muted-foreground">
                <Markdown>{p.body}</Markdown>
              </CardContent>
              <CardFooter className="mt-auto flex-wrap gap-1.5 border-t-0 bg-transparent">
                {p.stack.map((s) => (
                  <Badge key={s} variant="outline">
                    {s}
                  </Badge>
                ))}
                {p.website && (
                  <Button asChild size="sm" variant="secondary" className="ml-auto">
                    <a href={p.website} target="_blank" rel="noopener">
                      Visit <ExternalLink data-icon="inline-end" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </div>
            {p.images && (
              <div className="grid grid-cols-2 items-center gap-3 px-4 lg:w-[44%] lg:bg-muted/50 lg:p-6">
                {p.images.map((img) => (
                  <figure key={img.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-lg ring-1 ring-foreground/10" />
                    <figcaption className="mt-1.5 text-xs text-muted-foreground">{img.alt}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      <Section title="More on GitHub">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <Card key={p.slug} id={p.slug}>
              <CardHeader>
                <CardTitle className="font-semibold">{p.title}</CardTitle>
                <CardDescription>{p.summary}</CardDescription>
              </CardHeader>
              {p.body && (
                <CardContent className="text-muted-foreground">
                  <Markdown>{p.body}</Markdown>
                </CardContent>
              )}
              {p.website && (
                <CardFooter className="mt-auto">
                  <Button asChild variant="link" className="h-auto px-0">
                    <a href={p.website} target="_blank" rel="noopener">
                      View source <ExternalLink data-icon="inline-end" />
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
