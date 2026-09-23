"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";

const nav = [
  { href: "/about/", label: "About" },
  { href: "/work/", label: "Work" },
  { href: "/talks/", label: "Talks" },
  { href: "/projects/", label: "Projects" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:px-6">
        <Link href="/" className="mr-auto font-heading text-base font-semibold tracking-tight">
          Loïc Ortola
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={isActive(item.href) ? "secondary" : "ghost"}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <Button asChild size="default" className="hidden sm:inline-flex">
          <Link href="/contact/" aria-current={isActive("/contact/") ? "page" : undefined}>
            <Mail data-icon="inline-start" /> Contact
          </Link>
        </Button>
        <ModeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {[{ href: "/", label: "Home" }, ...nav].map((item) => (
                <SheetClose asChild key={item.href}>
                  <Button asChild variant="ghost" size="lg" className="justify-start text-base">
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-4">
                  <Link href="/contact/">
                    <Mail data-icon="inline-start" /> Contact me
                  </Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
