import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { TalkCard } from "@/components/TalkCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDuration, talks } from "@/content/talks";

export const dynamicParams = false;

export function generateStaticParams() {
  return talks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/talks/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const talk = talks.find((t) => t.slug === slug);
  if (!talk) return {};
  return {
    title: talk.title,
    description: talk.description,
    openGraph: { type: "video.other", images: [talk.thumbnail] },
  };
}

export default async function TalkPage({ params }: PageProps<"/talks/[slug]">) {
  const { slug } = await params;
  const talk = talks.find((t) => t.slug === slug);
  if (!talk) notFound();

  const others = talks.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12">
      <Button asChild variant="ghost" className="-ml-2.5">
        <Link href="/talks/">
          <ArrowLeft data-icon="inline-start" /> All talks
        </Link>
      </Button>
      <h1 className="type-display mt-4 max-w-4xl text-4xl sm:text-6xl">{talk.title}</h1>
      <div className="mt-5 flex flex-wrap gap-1.5">
        <Badge variant="secondary">
          {talk.event}
          {talk.year ? ` ${talk.year}` : ""}
        </Badge>
        <Badge variant="outline">In {talk.language}</Badge>
        {talk.duration && <Badge variant="outline">{formatDuration(talk.duration)}</Badge>}
      </div>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{talk.description}</p>

      <VideoEmbed youtubeId={talk.youtubeId} start={talk.start} title={talk.title} thumbnail={talk.thumbnail} />
      <Button asChild variant="link" className="mt-2 px-0">
        <a href={`https://www.youtube.com/watch?v=${talk.youtubeId}${talk.start ? `&t=${talk.start}` : ""}`} target="_blank" rel="noopener">
          Watch on YouTube <ExternalLink data-icon="inline-end" />
        </a>
      </Button>

      <section className="mt-16" aria-labelledby="more-talks">
        <h2 id="more-talks" className="mb-6 font-heading text-2xl font-semibold tracking-tight">
          More talks
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((t) => (
            <TalkCard key={t.slug} talk={t} />
          ))}
        </div>
      </section>
    </article>
  );
}
