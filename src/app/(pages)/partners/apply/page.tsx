"use client";

import { useState } from "react";
import DarkHero from "@/components/ui/DarkHero";
import Button from "@/components/ui/Button";

const COUNTRIES = [
  "Kenya",
  "Nigeria",
  "Ghana",
  "South Africa",
  "Uganda",
  "Tanzania",
  "Other",
] as const;

const BUSINESS_TYPES = [
  "AV Systems Integrator",
  "IT Solutions Provider",
  "Electrical Contractor",
  "Interior Fit-Out Contractor",
  "Consultant / Specifier",
  "Other",
] as const;

const SECTORS = [
  "Hospitality",
  "Corporate",
  "Education",
  "Healthcare",
  "Retail",
  "Government",
  "Transport",
  "Residential",
] as const;

const STEPS = [
  { num: 1, text: "We review your application within 24 hours." },
  { num: 2, text: "A short discovery call to understand your business." },
  { num: 3, text: "We agree on a tier and send your welcome pack." },
  { num: 4, text: "You get access to pricing, stock, and support." },
] as const;

export default function PartnerApplyPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [sectors, setSectors] = useState<string[]>([]);

  function toggleSector(s: string) {
    setSectors((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Add sectors separately
    data.sectors = sectors.join(", ");
    data.application_type = "Partner Application";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <DarkHero
        title="Become a Perlogy partner."
        subtitle="No commitment at this stage — just a conversation."
      />

      {/* ─── Form + Sidebar ─── */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
        {status === "success" ? (
          /* ─── Success state ─── */
          <div className="mx-auto max-w-xl rounded-xl border border-green-200 bg-green-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-7 w-7 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy">
              Application received!
            </h2>
            <p className="mt-3 leading-relaxed text-brand-gray-muted">
              Thank you for your interest. A member of our partnerships team
              will be in touch within 24&nbsp;hours.
            </p>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            {/* ── Left: Form ── */}
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                Tell us about your business
              </h2>
              <p className="mt-2 text-brand-gray-muted">
                Fields marked with <span className="text-brand-orange">*</span>{" "}
                are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Company + Name */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Company name" name="company" required />
                  <Field label="Your name" name="name" required />
                </div>

                {/* Email + Phone */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone / WhatsApp" name="phone" type="tel" required />
                </div>

                {/* Country */}
                <div>
                  <Label text="Country" required />
                  <select
                    name="country"
                    required
                    defaultValue=""
                    className="mt-1.5 block w-full rounded-lg border border-brand-gray-border bg-white px-4 py-2.5 text-sm text-brand-gray-text outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="" disabled>
                      Select country
                    </option>
                    {COUNTRIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Business type */}
                <div>
                  <Label text="Business type" />
                  <select
                    name="business_type"
                    defaultValue=""
                    className="mt-1.5 block w-full rounded-lg border border-brand-gray-border bg-white px-4 py-2.5 text-sm text-brand-gray-text outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Sectors (multi-select checkboxes) */}
                <div>
                  <Label text="Sectors you serve" />
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {SECTORS.map((s) => (
                      <label
                        key={s}
                        className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                          sectors.includes(s)
                            ? "border-brand-blue bg-brand-blue/5 text-brand-blue"
                            : "border-brand-gray-border text-brand-gray-text hover:border-brand-blue/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={sectors.includes(s)}
                          onChange={() => toggleSector(s)}
                          className="sr-only"
                        />
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                            sectors.includes(s)
                              ? "border-brand-blue bg-brand-blue text-white"
                              : "border-brand-gray-border"
                          }`}
                        >
                          {sectors.includes(s) && (
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        {s}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pipeline */}
                <div>
                  <Label text="Current or upcoming pipeline" />
                  <textarea
                    name="pipeline"
                    rows={4}
                    placeholder="Tell us about the projects you're working on or planning…"
                    className="mt-1.5 block w-full rounded-lg border border-brand-gray-border px-4 py-2.5 text-sm text-brand-gray-text outline-none transition placeholder:text-brand-gray-muted/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                {/* How you heard */}
                <Field name="heard_about" label="How did you hear about us?" />

                {/* Trust signals */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-gray-muted">
                  <span>✓ 24-hour response</span>
                  <span>✓ No commitment</span>
                  <span>✓ Confidential</span>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                )}

                {/* Submit */}
                <Button type="submit" disabled={status === "submitting"} variant="primary" className="w-full sm:w-auto">
                  {status === "submitting" ? "Sending..." : "Submit application →"}
                </Button>
              </form>
            </div>

            {/* ── Right: Sidebar ── */}
            <aside className="space-y-6">
              {/* What happens next */}
              <div className="rounded-xl border border-brand-gray-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand-navy">
                  What happens next
                </h3>
                <ol className="mt-5 space-y-5">
                  {STEPS.map((s) => (
                    <li key={s.num} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                        {s.num}
                      </span>
                      <span className="text-sm leading-relaxed text-brand-gray-text">
                        {s.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 24-hour guarantee */}
              <div className="rounded-xl border-l-4 border-brand-orange bg-brand-navy p-6">
                <h3 className="text-base font-bold text-white">
                  24-hour guarantee
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Every application receives a personal response within one
                  business day. If we&apos;re not the right fit, we&apos;ll tell
                  you honestly.
                </p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}

/* ── Tiny helpers ────────────────────────────── */

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-brand-navy">
      {text}
      {required && <span className="ml-0.5 text-brand-orange">*</span>}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 block w-full rounded-lg border border-brand-gray-border px-4 py-2.5 text-sm text-brand-gray-text outline-none transition placeholder:text-brand-gray-muted/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      />
    </div>
  );
}
