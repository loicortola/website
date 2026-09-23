import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-heading" });

const fullName = `${profile.firstName} ${profile.lastName}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${fullName}, CTO for platforms, automation and AI`, template: `%s | ${fullName}` },
  description: `${profile.headline} ${profile.role}, speaker, and former CEO of Jawg Maps, based in Paris.`,
  authors: [{ name: fullName, url: profile.siteUrl }],
  openGraph: { type: "profile", siteName: fullName, images: [profile.photo] },
  twitter: { card: "summary", creator: "@loicortola" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#edf0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1b22" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  jobTitle: "CTO",
  worksFor: { "@type": "Organization", name: "Takima" },
  sameAs: profile.social.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(geist.variable, archivo.variable)}>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
