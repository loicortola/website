import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/content/profile";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about an AI or platform transformation, a talk, or anything else.",
};

export default function ContactPage() {
  const linkedin = profile.social.find((s) => s.label === "LinkedIn");
  return (
    <>
      <PageHeader title="Contact">
        <p>
          Leading an AI or platform transformation, planning a conference, or just want to talk tech? Send me a
          message and I&apos;ll reply by email.
        </p>
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_18rem]">
        <Card>
          <CardContent className="py-2">
            <ContactForm />
          </CardContent>
        </Card>
        <aside className="space-y-3 text-sm text-muted-foreground">
          <p>Prefer another channel? I&apos;m also on LinkedIn.</p>
          {linkedin && (
            <Button asChild variant="outline">
              <a href={linkedin.href} target="_blank" rel="me noopener">
                Message me on LinkedIn
              </a>
            </Button>
          )}
        </aside>
      </div>
    </>
  );
}
