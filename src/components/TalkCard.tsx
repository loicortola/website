import Link from "next/link";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDuration, type Talk } from "@/content/talks";

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <Card className="group relative pt-0 transition-shadow hover:shadow-md">
      <AspectRatio ratio={16 / 9} className="overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={talk.thumbnail}
          alt=""
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 grid place-items-center bg-black/0 transition-colors group-hover:bg-black/20">
          <span className="grid size-12 place-items-center rounded-full bg-background/90 text-foreground opacity-0 shadow transition-opacity group-hover:opacity-100">
            <Play className="size-5 fill-current" />
          </span>
        </span>
      </AspectRatio>
      <CardHeader>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">
            {talk.event}
            {talk.year ? ` ${talk.year}` : ""}
          </Badge>
          {talk.duration && <Badge variant="outline">{formatDuration(talk.duration)}</Badge>}
        </div>
        <CardTitle className="mt-1 text-base font-semibold">
          <Link href={`/talks/${talk.slug}/`} className="after:absolute after:inset-0">
            {talk.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{talk.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
