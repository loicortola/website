import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TalkCard } from "@/components/TalkCard";
import { talks } from "@/content/talks";

export const metadata: Metadata = {
  title: "Talks",
  description: "Conference talks on load testing, platform engineering, GitOps, performance and chaos engineering.",
};

export default function TalksPage() {
  return (
    <>
      <PageHeader title="Talks">
        <p>
          200+ talks and keynotes over a decade, at public and private conferences, executive meetings and schools.
          Here are the ones you can watch.
        </p>
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {talks.map((t) => (
          <TalkCard key={t.slug} talk={t} />
        ))}
      </div>
    </>
  );
}
