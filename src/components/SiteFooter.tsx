import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/content/profile";

const columns: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Site",
    links: [
      { href: "/", label: "Home" },
      { href: "/about/", label: "About" },
      { href: "/work/", label: "Experience" },
      { href: "/talks/", label: "Talks" },
      { href: "/projects/", label: "Projects" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    title: "Elsewhere",
    links: profile.social.map((s) => ({ href: s.href, label: s.label, external: true })),
  },
  {
    title: "Legal",
    links: [
      { href: "/legal-notice/", label: "Legal notice" },
      { href: "/privacy/", label: "Privacy" },
      { href: "/cookies/", label: "Cookies" },
    ],
  },
];

export function SiteFooter() {
  const { lat, lng } = profile.location;
  return (
    <footer className="mt-24">
      <Separator />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))]">
        <div className="md:pr-8">
          <p className="font-heading text-2xl font-semibold tracking-tight">{profile.catchline}.</p>
          <p className="mt-2 text-muted-foreground">
            Need a sparring partner for your AI transformation, or any other tech-related matter? Let&apos;s chat.
          </p>
          <Button asChild className="mt-5">
            <Link href="/contact/">
              <Mail data-icon="inline-start" /> Get in touch
            </Link>
          </Button>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-medium">{col.title}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="me noopener" className="text-muted-foreground hover:text-foreground">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-muted-foreground hover:text-foreground">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:px-6">
        <p>© {new Date().getFullYear()} Loïc Ortola. All rights reserved.</p>
        <p className="tabular-nums">
          Paris, {lat.toFixed(4)}° N, {lng.toFixed(4)}° E
        </p>
      </div>
    </footer>
  );
}
