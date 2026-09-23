import { legal } from "@/content/legal";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-20">
      <h1 className="type-display text-4xl sm:text-6xl">{title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {legal.lastUpdated}</p>
      <div className="mt-10 space-y-10 leading-relaxed [&_a]:text-water [&_a]:underline [&_a]:underline-offset-3 [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-heading text-xl font-semibold tracking-tight">{title}</h2>
      <div className="text-muted-foreground">{children}</div>
    </section>
  );
}

/** "In short" summary box at the top of a policy. */
export function LegalSummary({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="rounded-xl bg-card p-5 ring-1 ring-foreground/10">
      <p className="font-semibold">In short</p>
      <ul className="text-muted-foreground">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function DetailList({ rows }: { rows: [string, React.ReactNode][] }) {
  return (
    <dl className="grid grid-cols-[minmax(0,10rem)_1fr] gap-x-6 gap-y-2 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-sm text-muted-foreground">{k}</dt>
          <dd className="text-sm text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
