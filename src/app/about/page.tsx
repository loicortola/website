import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  agentTooling,
  dailyAi,
  education,
  maker,
  profile,
  strengths,
  teaching,
  techSkills,
} from "@/content/profile";
import { showcased } from "@/content/projects";

export const metadata: Metadata = {
  title: "About",
  description: "Skills, education, teaching and my latest side projects.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About me">
        <p>{profile.pitch}</p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[18rem_1fr]">
        <Card className="self-start pt-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.photo} alt="Portrait of Loïc Ortola" width={461} height={461} className="aspect-square w-full object-cover" />
          <CardHeader>
            <CardTitle className="font-semibold">Loïc Ortola</CardTitle>
            <CardDescription>{profile.role}. Based in Paris.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="self-start">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">How I work</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {strengths.map((s) => (
                <li key={s} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-water" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Section id="skills" title="Technical skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techSkills.map((set) => (
            <Card key={set.label}>
              <CardHeader>
                <CardTitle className="font-semibold">{set.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {set.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="font-semibold">AIs I use every day</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {dailyAi.map((a) => (
                <li key={a.tool}>
                  <span className="font-medium">{a.tool}</span>
                  <span className="text-muted-foreground"> for {a.use}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <span className="mr-1">MCPs and skills my agents use most:</span>
              {agentTooling.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section title="Teaching and speaking">
        <Card className="pt-0 lg:flex-row lg:py-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/conf-1.jpg"
            alt="Giving a talk to a packed lecture hall"
            loading="lazy"
            className="aspect-video w-full object-cover lg:aspect-auto lg:w-1/2"
          />
          <div className="flex flex-col gap-4 px-4 lg:py-6 lg:pr-6">
            <blockquote className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              “{teaching.quote}”
              <footer className="mt-1 font-sans text-sm font-normal text-muted-foreground">{teaching.quoteAuthor}</footer>
            </blockquote>
            <p className="text-muted-foreground">{teaching.body}</p>
            <div>
              <p className="mb-2 text-sm font-medium">Schools I have spoken or taught at</p>
              <div className="flex flex-wrap gap-1.5">
                {teaching.schools.map((s) => (
                  <Badge key={s} variant="outline">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section title="Education">
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <Card key={e.title}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-secondary">
                    <GraduationCap className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <CardTitle className="font-semibold">{e.title}</CardTitle>
                    <CardDescription>
                      {e.school}, {e.place}. {e.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Latest projects"
        description={<span className="block max-w-2xl">{maker.body}</span>}
        action={
          <Button asChild variant="ghost">
            <Link href="/projects/">
              All projects <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {showcased.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
