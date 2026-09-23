import "server-only";

const SEND_URL = process.env.MAILJET_API_URL ?? "https://api.mailjet.com/v3.1/send";

export type ContactMessage = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Sends the contact form to my inbox through Mailjet's Send API v3.1.
 * The visitor is set as Reply-To, so replying from the inbox answers them directly.
 * Throws when Mailjet is not configured or rejects the message.
 */
export async function sendContactEmail(msg: ContactMessage) {
  const apiKey = process.env.MAILJET_API_KEY;
  const apiSecret = process.env.MAILJET_API_SECRET;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !apiSecret || !from || !to) {
    throw new Error("Mailjet is not configured: set MAILJET_API_KEY, MAILJET_API_SECRET, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL");
  }

  const who = msg.company ? `${msg.name} (${msg.company})` : msg.name;
  const res = await fetch(SEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: from, Name: "loicortola.com" },
          To: [{ Email: to }],
          ReplyTo: { Email: msg.email, Name: msg.name },
          Subject: `New message from ${who}`,
          TextPart: `From: ${who} <${msg.email}>\n\n${msg.message}`,
          HTMLPart: `<p><strong>From:</strong> ${escapeHtml(who)} &lt;${escapeHtml(msg.email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(msg.message)}</p>`,
          CustomID: "website-contact-form",
        },
      ],
    }),
    signal: AbortSignal.timeout(10_000),
  });

  const body = (await res.json().catch(() => null)) as { Messages?: { Status: string; Errors?: unknown[] }[] } | null;
  const status = body?.Messages?.[0]?.Status;
  if (!res.ok || status !== "success") {
    throw new Error(`Mailjet send failed (HTTP ${res.status}): ${JSON.stringify(body?.Messages?.[0]?.Errors ?? body)}`);
  }
}
