"use client";

import { useActionState, useEffect, useRef } from "react";
import { CircleAlert, CircleCheck, Loader2, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const startedAt = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <Alert>
        <CircleCheck />
        <AlertTitle>Message sent</AlertTitle>
        <AlertDescription>Thanks for reaching out. I&apos;ll get back to you at the address you gave.</AlertDescription>
      </Alert>
    );
  }

  const err = state.fieldErrors ?? {};
  const v = state.values ?? {};

  return (
    <form action={action} noValidate>
      <FieldGroup>
        {state.status === "error" && state.message && (
          <Alert variant="destructive">
            <CircleAlert />
            <AlertTitle>{state.message}</AlertTitle>
          </Alert>
        )}

        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={!!err.name || undefined}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" name="name" autoComplete="name" required defaultValue={v.name} aria-invalid={!!err.name} />
            <FieldError>{err.name}</FieldError>
          </Field>
          <Field data-invalid={!!err.email || undefined}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={v.email}
              aria-invalid={!!err.email}
            />
            <FieldError>{err.email}</FieldError>
          </Field>
        </div>

        <Field data-invalid={!!err.company || undefined}>
          <FieldLabel htmlFor="company">
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </FieldLabel>
          <Input id="company" name="company" autoComplete="organization" defaultValue={v.company} aria-invalid={!!err.company} />
          <FieldError>{err.company}</FieldError>
        </Field>

        <Field data-invalid={!!err.message || undefined}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={7}
            className="min-h-36"
            required
            defaultValue={v.message}
            aria-invalid={!!err.message}
            aria-describedby="message-help"
          />
          <FieldDescription id="message-help">
            A few words on your context helps: your team, your timeline, the event.
          </FieldDescription>
          <FieldError>{err.message}</FieldError>
        </Field>

        {/* Anti-spam: hidden from people, filled in by bots. */}
        <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <input ref={startedAt} type="hidden" name="startedAt" />

        <div>
          <Button type="submit" size="lg" className="h-10 px-4" disabled={pending}>
            {pending ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <Send data-icon="inline-start" />}
            {pending ? "Sending…" : "Send message"}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
