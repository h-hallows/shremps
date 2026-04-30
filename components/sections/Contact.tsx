"use client";

import { useState, type FormEvent } from "react";
import { SectionLabel, SectionHeading } from "./_shared";

// ----------------------------------------------------------------------------
// CONTACT FORM — TWO SUBMIT PATHS, MAILTO ACTIVE BY DEFAULT.
//
// To flip from mailto → API for production:
//   1. Comment out the `handleSubmitMailto` line below.
//   2. Uncomment the `handleSubmitApi` line.
//   3. Set RESEND_API_KEY in your environment (see app/api/contact/route.ts).
//
// Both handlers are kept in this file so the swap is one line.
// ----------------------------------------------------------------------------

const STUDIO_EMAIL = "contact@shremps.com";

const REASONS = ["Collab", "Client work", "Press", "Other"] as const;
type Reason = (typeof REASONS)[number];

interface ContactFields {
  name: string;
  email: string;
  reason: Reason;
  message: string;
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: ContactFields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      reason: (data.get("reason") as Reason) ?? "Other",
      message: String(data.get("message") ?? ""),
    };

    // ─── Active in v0 ─────────────────────────────────────────
    handleSubmitMailto(fields);
    // ─── Production swap (uncomment, then comment the line above) ──
    // handleSubmitApi(fields).then(
    //   () => setStatus("sent"),
    //   () => setStatus("error"),
    // );

    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="border-t border-[var(--hairline)] scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>// contact</SectionLabel>
            <SectionHeading>Send a note.</SectionHeading>
            <p className="mt-4 text-base sm:text-lg text-ink/60 leading-relaxed">
              For collabs, client inquiries, or press. We read everything; we
              reply to most.
            </p>
            <p className="mt-6 font-mono text-sm text-ink/70">
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="hover:text-shremp-orange transition-colors"
              >
                {STUDIO_EMAIL}
              </a>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </Field>

            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </Field>

            <Field label="What's this about" htmlFor="reason" full>
              <select
                id="reason"
                name="reason"
                defaultValue="Collab"
                className={inputClass}
              >
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message" htmlFor="message" full>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClass} resize-none`}
              />
            </Field>

            <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center h-11 px-5
                  rounded-full bg-ink text-paper text-sm font-medium
                  hover:bg-shremp-orange transition-colors
                "
              >
                Send
              </button>
              {status === "sent" && (
                <p className="font-mono text-xs text-ink/60">
                  // mail client opened — finish sending from there
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-xs text-shremp-orange">
                  // something broke — try emailing directly
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClass = `
  w-full h-11 px-3
  bg-paper text-ink text-sm
  border border-ink/15 rounded-md
  focus:border-ink/40 focus:outline-none
  placeholder:text-ink/30
`;

function Field({
  label,
  htmlFor,
  full,
  children,
}: {
  label: string;
  htmlFor: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={full ? "sm:col-span-2" : ""}>
      <span className="block font-mono text-[11px] tracking-widest uppercase text-ink/50 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

// ----------------------------------------------------------------------------
// Submit handlers
// ----------------------------------------------------------------------------

function handleSubmitMailto(fields: ContactFields) {
  const subject = `[${fields.reason}] from ${fields.name || "the site"}`;
  const body = [
    `From: ${fields.name} <${fields.email}>`,
    `About: ${fields.reason}`,
    "",
    fields.message,
  ].join("\n");
  const href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

// Production path — POSTs to /api/contact (Resend or Formspree on the server).
// Currently unused; kept here so the swap is a one-liner above.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function handleSubmitApi(fields: ContactFields): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) {
    throw new Error(`Contact API failed: ${res.status}`);
  }
}
