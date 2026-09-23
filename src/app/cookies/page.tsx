import type { Metadata } from "next";
import Link from "next/link";
import { ClearPreferences } from "@/components/ClearPreferences";
import { LegalPage, LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "What loicortola.com stores in your browser: no cookies, one theme preference.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookies and trackers">
      <p className="text-lg text-foreground">This site sets no cookies and uses no trackers.</p>

      <LegalSection title="1. What is stored in your browser">
        <div className="overflow-x-auto rounded-xl bg-card ring-1 ring-foreground/10">
          <table className="w-full text-left text-sm">
            <thead className="border-b text-foreground">
              <tr>
                <th className="p-3 font-medium">Entry</th>
                <th className="p-3 font-medium">What it is for</th>
                <th className="p-3 font-medium">How long</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="p-3">
                  <span className="text-foreground">Your theme choice</span>
                  <br />
                  <code className="text-xs">theme</code> · localStorage
                </td>
                <td className="p-3">
                  Remembers whether you picked light, dark or system, so the page doesn&apos;t flash the wrong colours.
                  Set only when you use the theme menu, and never sent to the server.
                </td>
                <td className="p-3">Until you erase it</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          This entry is a preference you set yourself, which is why no consent banner is needed (article 82 of the
          French Data Protection Act).
        </p>
      </LegalSection>

      <LegalSection title="2. YouTube, once you press play">
        <p>
          Talk videos stay a simple image until you press play. Only then does YouTube&apos;s player load, and Google
          may store data in your browser under its own rules. The{" "}
          <Link href="/privacy/">privacy policy</Link> has the detail.
        </p>
      </LegalSection>

      <LegalSection title="3. Erasing it">
        <p className="mb-4">
          You can erase the theme choice here, or clear this site&apos;s data from your browser settings.
        </p>
        <ClearPreferences />
      </LegalSection>
    </LegalPage>
  );
}
