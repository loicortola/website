import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection, LegalSummary } from "@/components/LegalPage";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What personal data loicortola.com handles, why, and for how long.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <LegalSummary
        items={[
          "No analytics, no advertising, no tracking cookies. Reading this site tells me nothing about you.",
          "If you use the contact form, your name, email, company and message reach my inbox by email, so I can reply. They are not stored on this site.",
          "YouTube only loads when you press play on a talk video. Until then, Google receives nothing from this site.",
          "Fonts and images are served from this site, not from third parties.",
        ]}
      />

      <LegalSection title="1. Data controller">
        <p>
          The data controller is {legal.publisher.name}, whose details appear in the{" "}
          <Link href="/legal-notice/">legal notice</Link>. Any question about your data can be sent through the{" "}
          <Link href="/contact/">contact form</Link> or by email to{" "}
          <a href={`mailto:${legal.publisher.email}`}>{legal.publisher.email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Browsing the site">
        <p>
          This site has no audience measurement, no advertising and no social media widgets. The typefaces are
          bundled with the site, so no request goes to a font provider. Nothing is collected about what you read.
        </p>
      </LegalSection>

      <LegalSection title="3. The contact form">
        <ul>
          <li>
            <strong className="text-foreground">What is collected:</strong> your name, your email address, your
            company if you give it, and your message.
          </li>
          <li>
            <strong className="text-foreground">Why:</strong> to read your message and reply to it. Nothing else:
            no mailing list, no newsletter, no resale.
          </li>
          <li>
            <strong className="text-foreground">Legal basis:</strong> my legitimate interest in answering the
            people who write to me, or steps taken at your request before a contract when you write about a
            mission or a talk (article 6.1.f and 6.1.b of the GDPR).
          </li>
          <li>
            <strong className="text-foreground">Where it goes:</strong> the site does not store your message. It
            sends it by email to my inbox through {legal.mailer.name} (
            <a href={legal.mailer.website} target="_blank" rel="noopener">
              {legal.mailer.website.replace("https://", "")}
            </a>
            ), which acts as a processor under its data processing terms.
          </li>
          <li>
            <strong className="text-foreground">How long:</strong> as long as our conversation needs, and no more
            than 3 years after our last exchange.
          </li>
          <li>
            <strong className="text-foreground">Anti-spam:</strong> to limit abuse, the server keeps your IP address
            in memory for one hour, only to count how many messages it has sent. It is never written to disk and
            disappears when the server restarts.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Talk videos">
        <p>
          Talk pages show a thumbnail stored on this site. The YouTube player (in its privacy-enhanced mode,
          youtube-nocookie.com) is only loaded when you press play. From that moment, Google receives your IP address
          and may store data in your browser, under{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            Google&apos;s privacy policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Technical logs">
        <p>
          Like any website, this site runs on infrastructure provided by the host named in the legal notice, which
          may log requests (IP address, date, page requested, browser type) for security and correct operation. Those
          logs are not used to analyse your behaviour.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>
          Under the GDPR and the French Data Protection Act, you can access, correct and erase your data, restrict or
          object to its processing, and ask for a copy in a portable format. Write through the{" "}
          <Link href="/contact/">contact form</Link> or to{" "}
          <a href={`mailto:${legal.publisher.email}`}>{legal.publisher.email}</a>; I answer within one month.
        </p>
        <p>
          If you believe your rights are not respected, you can lodge a complaint with the CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener">
            cnil.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="7. Changes">
        <p>
          This policy may change when the site does. The applicable version is the one published on this page, with
          its update date at the top.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
