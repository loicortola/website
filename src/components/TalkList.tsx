import Link from "next/link";
import { formatDuration, type Talk } from "@/content/talks";

export function TalkList({ items }: { items: Talk[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((t) => (
        <li key={t.slug}>
          <Link href={`/talks/${t.slug}`} className="group block">
            <div className="relative aspect-video overflow-hidden bg-rule">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.thumbnail}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              {t.duration && (
                <span className="tabular absolute bottom-2 right-2 bg-ink px-2 py-0.5 text-sm text-paper">
                  {formatDuration(t.duration)}
                </span>
              )}
            </div>
            <h3 className="type-heading mt-4 text-xl group-hover:text-water">{t.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">
              {t.event}
              {t.year ? `, ${t.year}` : ""}. In {t.language}.
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
