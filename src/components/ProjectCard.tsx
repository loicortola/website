import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/content/projects";

export function ProjectCard({ project: p }: { project: Project }) {
  const cover = p.cover ?? p.images?.[0]?.src;
  return (
    <Card className="relative pt-0">
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
      )}
      <CardHeader>
        <CardTitle className="font-semibold">
          <Link href={`/projects/#${p.slug}`} className="after:absolute after:inset-0">
            {p.title}
          </Link>
        </CardTitle>
        <CardDescription>{p.summary}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex-wrap gap-1.5">
        {p.stack.slice(0, 3).map((s) => (
          <Badge key={s} variant="outline">
            {s}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
