import type { Metadata } from "next";
import Link from "next/link";
import { DetailList, LegalPage, LegalSection } from "@/components/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Publisher, publication director and host of loicortola.com.",
};

export default function LegalNoticePage() {
  const { publisher, host } = legal;
  return (
    <LegalPage title="Legal notice">
      <p className="text-muted-foreground">
        This is the personal website of Loïc Ortola, at <a href={legal.site}>{legal.site}</a>. It presents my work,
        talks and projects, and lets you contact me.
      </p>

      <LegalSection title="1. Publisher">
        <DetailList
          rows={[
            ["Publisher", publisher.name],
            ["Legal form", publisher.form],
            ["Address", publisher.address],
            ["Email", <a key="e" href={`mailto:${publisher.email}`}>{publisher.email}</a>],
            ["Registration", publisher.registration],
            ["Intra-community VAT", publisher.vat],
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Publication director">
        <DetailList rows={[["Publication director", legal.director]]} />
      </LegalSection>

      <LegalSection title="3. Hosting">
        <p className="mb-3">This site is hosted by:</p>
        <DetailList
          rows={[
            ["Host", host.name],
            ["Address", host.address],
            ["Website", <a key="w" href={host.website} target="_blank" rel="noopener">{host.website}</a>],
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Intellectual property">
        <p>
          The structure of this site, its texts, its illustrations, its photographs and its code are protected by
          copyright. Any reproduction or representation, whole or partial, without the publisher&apos;s permission is
          prohibited, except for uses permitted by law: private copying, short quotation, review.
        </p>
        <p>
          Company names, logos and conference recordings shown on this site belong to their respective owners. Talk
          videos are published by the conferences that recorded them and are shown here from YouTube.
        </p>
      </LegalSection>

      <LegalSection title="5. Links to other sites">
        <p>
          This site links to other websites: conferences, projects, LinkedIn and GitHub. The publisher has no control
          over their content and cannot be held responsible for it.
        </p>
      </LegalSection>

      <LegalSection title="6. Personal data and cookies">
        <p>
          How the contact form and the rest of the site handle personal data is described in the{" "}
          <Link href="/privacy/">privacy policy</Link>, and what this site stores in your browser in the{" "}
          <Link href="/cookies/">cookie policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="7. Governing law">
        <p>
          This site and this notice are governed by French law. In the event of a dispute, an amicable solution will
          be sought first; failing that, the French courts have jurisdiction.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
