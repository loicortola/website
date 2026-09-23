import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { TopoMap } from "@/components/TopoMap";
import { Section } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { TalkCard } from "@/components/TalkCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { expertise, figures, profile } from "@/content/profile";
import { featured } from "@/content/projects";
import { talks } from "@/content/talks";

export default function Home() {
  const { lat, lng } = profile.location;
  return (
    <>
      <section className="relative -mt-14 overflow-hidden border-b pt-14">
        <TopoMap label={[`${lat.toFixed(4)}° N`, `${lng.toFixed(4)}° E, Paris`]} />
        <div className="relative mx-auto flex min-h-[min(88dvh,820px)] max-w-6xl flex-col justify-end px-4 pt-20 pb-14 sm:px-6 sm:pb-20">
          <div className="flex items-center gap-3">
            <Avatar className="size-14 ring-2 ring-background">
              <AvatarImage src={profile.photo} alt="" />
              <AvatarFallback>LO</AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="h-6 px-2.5">
              {profile.role}
            </Badge>
          </div>
          <h1 className="type-display mt-6 text-[clamp(3.5rem,12vw,9.5rem)]">
            Loïc
            <br />
            Ortola
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium sm:text-2xl">{profile.headline}</p>
          <p className="mt-3 max-w-xl text-muted-foreground">{profile.pitch}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild size="lg" className="h-10 px-4">
              <Link href="/contact/">
                <Mail data-icon="inline-start" /> Get in touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-10 px-4">
              <Link href="/work/">
                See my experience <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section title="What I do" description="Eight years leading the technical strategy of Takima, a leading IT consulting firm in France.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e) => (
            <Card key={e.title}>
              <CardHeader>
                <CardTitle className="font-semibold">{e.title}</CardTitle>
                <CardDescription>{e.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Card className="mt-4">
          <CardContent className="grid grid-cols-2 gap-6 py-2 md:grid-cols-4">
            {figures.map((f) => (
              <div key={f.label}>
                <p className="font-heading text-3xl font-bold tracking-tight tabular-nums">{f.value}</p>
                <p className="text-sm text-muted-foreground">{f.label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      <Section
        title="Latest talks"
        description="200+ talks and keynotes, rated in the top 5% at public conferences."
        action={
          <Button asChild variant="ghost">
            <Link href="/talks/">
              All talks <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {talks.slice(0, 3).map((t) => (
            <TalkCard key={t.slug} talk={t} />
          ))}
        </div>
      </Section>

      <Section
        title="Side projects"
        description="Web apps, games, hardware and open-source libraries."
        action={
          <Button asChild variant="ghost">
            <Link href="/projects/">
              All projects <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.slice(0, 4).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
