"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { sendContactEmail } from "@/lib/mailjet";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100, "Keep your name under 100 characters."),
  email: z.email("Enter a valid email address so I can reply.").max(200),
  company: z.string().trim().max(100, "Keep the company name under 100 characters.").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Write at least a sentence so I know what it's about.")
    .max(5000, "Keep your message under 5,000 characters."),
});

type Fields = keyof z.infer<typeof schema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<Fields, string>>;
  /** Submitted values, sent back so the form keeps them after an error. */
  values?: Partial<Record<Fields, string>>;
};

// Anti-spam: a hidden field bots fill in, a minimum time on the page, and a per-IP rate limit.
const MIN_FILL_MS = 3_000;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) return true;
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5_000) recent.clear();
  return false;
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Pretend success to bots so they don't retry.
  const startedAt = Number(formData.get("startedAt"));
  if (formData.get("website") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success" };
  }

  const parsed = schema.safeParse({ ...values, company: values.company || undefined });
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as Fields;
      fieldErrors[field] ??= issue.message;
    }
    return { status: "error", message: "Check the highlighted fields.", fieldErrors, values };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return { status: "error", message: "You've sent several messages in the last hour. Try again later.", values };
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("[contact]", err);
    return {
      status: "error",
      message: "Your message couldn't be sent. Try again in a few minutes, or reach me on LinkedIn.",
      values,
    };
  }
  return { status: "success" };
}
