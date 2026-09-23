import type { Metadata } from "next";
import { MapPin, TrendingUp } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { PageHeader } from "@/components/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { jobs } from "@/content/work";

export const metadata: Metadata = {
  title: "Experience",
  description: "CTO and board member at Takima, former CEO and co-founder of Jawg Maps.",
};

const coord = (n: number, pos: string, neg: string) => `${Math.abs(n).toFixed(2)}° ${n >= 0 ? pos : neg}`;

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Experience">
        <p>From system administration in California to leading the technical strategy of a 200-person consultancy.</p>
      </PageHeader>

      <ol className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* The route between stops */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[calc(1rem+7px)] border-l-[3px] border-dashed border-road sm:left-[calc(1.5rem+7px)] lg:left-[calc(1.5rem+13rem+7px)]"
        />
        {jobs.map((job) => (
          <li key={job.slug} className="relative grid gap-4 pb-14 pl-10 last:pb-0 lg:grid-cols-[13rem_1fr] lg:gap-0 lg:pl-0">
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 size-[17px] rounded-full border-[3px] border-road bg-background lg:left-52"
            />
            <div className="text-sm lg:pr-10 lg:text-right">
              <p className="font-semibold tabular-nums">{job.period ?? job.duration}</p>
              {job.period && <p className="text-muted-foreground">{job.duration}</p>}
              <p className="mt-1 inline-flex items-center gap-1 text-muted-foreground lg:justify-end">
                <MapPin className="size-3.5" aria-hidden="true" /> {job.place.name}
              </p>
              <p className="text-xs text-muted-foreground tabular-nums">
                {coord(job.place.lat, "N", "S")}, {coord(job.place.lng, "E", "W")}
              </p>
            </div>

            <Card className="lg:ml-10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="size-11 rounded-lg after:rounded-lg">
                    {job.logo && <AvatarImage src={job.logo} alt="" className="rounded-lg bg-white object-contain" />}
                    <AvatarFallback className="rounded-lg">{job.company.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold">{job.position}</CardTitle>
                    <CardDescription>
                      {job.company}, {job.sector}
                    </CardDescription>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground">{job.about}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {job.summary && <p>{job.summary}</p>}
                {job.highlights && (
                  <ul className="space-y-1.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 font-medium text-water">
                        <TrendingUp className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> {h}
                      </li>
                    ))}
                  </ul>
                )}
                <Accordion type="multiple" defaultValue={job.slug === "takima" ? [job.missions[0].label] : []}>
                  {job.missions.map((m) => (
                    <AccordionItem key={m.label} value={m.label}>
                      <AccordionTrigger className="text-base">{m.label}</AccordionTrigger>
                      <AccordionContent className="space-y-3 text-base text-muted-foreground">
                        <Markdown>{m.details}</Markdown>
                        {m.highlight && (
                          <p className="flex gap-2 font-medium text-water">
                            <TrendingUp className="mt-1 size-4 shrink-0" aria-hidden="true" /> {m.highlight}
                          </p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>

              {(job.references || job.stack) && (
                <CardFooter className="flex-col items-start gap-2">
                  {job.references?.map((r) => (
                    <div key={r.label} className="flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 text-sm text-muted-foreground">{r.label} references:</span>
                      {r.items.map((i) => (
                        <Badge key={i} variant="secondary">
                          {i}
                        </Badge>
                      ))}
                    </div>
                  ))}
                  {job.stack && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 text-sm text-muted-foreground">Stack:</span>
                      {job.stack.map((s) => (
                        <Badge key={s} variant="outline">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardFooter>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </>
  );
}
