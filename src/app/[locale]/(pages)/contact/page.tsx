"use client";

import { useState, Suspense } from "react";
import DarkHero from "@/components/ui/DarkHero";
import Button from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { BRANDS } from "@/lib/brands-data";
import { useTranslations } from "next-intl";

function ContactPageContent() {
  const t = useTranslations("Contact");
  
  const RADIO_OPTIONS = [
    t("optSystemIntegrator"),
    t("optEndUser"),
    t("optBrand"),
    t("optOther"),
  ];

  const searchParams = useSearchParams();
  const brandId = searchParams.get("brand");
  const project = searchParams.get("project");
  const interest = searchParams.get("interest");
  const prefilledBrand = brandId ? BRANDS.find((b) => b.id === brandId) : null;

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const defaultMessage = prefilledBrand
    ? `I would like to enquire about ${prefilledBrand.name} products and pricing.`
    : project === 'embassy-nairobi'
    ? 'I would like to enquire about the Unilumin LSK Series ' +
      'outdoor LED display for a project in Kenya / Africa.'
    : interest === 'unilumin-lsk'
    ? 'I would like to enquire about Unilumin LSK Series ' +
      'outdoor LED solutions.'
    : "";

  return (
    <>
      <DarkHero
        title={prefilledBrand ? t("heroTitleBrand", { brand: prefilledBrand.name }) : t("heroTitleDefault")}
        subtitle={prefilledBrand ? t("heroSubtitleBrand") : t("heroSubtitleDefault")}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ─── Left Column: Contact Paths ─── */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-blue shadow-sm">
              <h3 className="text-lg font-bold text-brand-navy">{t("siCardTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted mb-4">
                {t("siCardDesc")}
              </p>
              <div className="mb-4 space-y-1 text-sm font-medium text-brand-navy">
                <div>
                  <a href="mailto:info@perlogy.africa" className="hover:text-brand-blue transition-colors">
                    info@perlogy.africa
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/254792651241" className="hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">
                    WhatsApp: +254 792 651 241
                  </a>
                </div>
              </div>
              <Button variant="primary" href="/partners/apply" className="w-full sm:w-auto">
                {t("btnApply")}
              </Button>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-blue shadow-sm">
              <h3 className="text-lg font-bold text-brand-navy">{t("euCardTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted mb-4">
                {t("euCardDesc")}
              </p>
              <div className="space-y-1 text-sm font-medium text-brand-navy">
                <div>
                  <a href="mailto:info@perlogy.africa" className="hover:text-brand-blue transition-colors">
                    info@perlogy.africa
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/254792651241" className="hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">
                    WhatsApp: +254 792 651 241
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-blue shadow-sm">
              <h3 className="text-lg font-bold text-brand-navy">{t("hoCardTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy mb-4 font-medium">
                {t("hoCardLocation")}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-brand-light-blue-bg px-3 py-1 text-xs font-semibold text-brand-blue">
                   {t("tagEastAfrica")}
                </span>
                <span className="inline-block rounded-full bg-brand-light-blue-bg px-3 py-1 text-xs font-semibold text-brand-blue">
                   {t("tagWestAfrica")}
                </span>
                <span className="inline-block rounded-full bg-brand-light-blue-bg px-3 py-1 text-xs font-semibold text-brand-blue">
                   {t("tagSouthernAfrica")}
                </span>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Contact Form ─── */}
          <div>
            {/* Context notice banner */}
            {project === 'embassy-nairobi' && (
              <div className="bg-[#1635D4]/8 border border-[#1635D4]/25
                rounded-lg px-4 py-3 mb-6">
                <p className="text-[12px] text-[#1635D4] font-medium">
                  Enquiring about: Embassy in Nairobi —
                  Unilumin LSK P2.9 LED display
                </p>
              </div>
            )}

            <div className="rounded-xl border border-brand-gray-border bg-white shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-brand-navy px-6 py-5 text-white">
                <h3 className="text-xl font-bold">
                  {prefilledBrand ? t("formTitleBrand", { brand: prefilledBrand.name }) : t("formTitleDefault")}
                </h3>
                <p className="text-sm text-white/70 mt-1">{t("formSubtitle")}</p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                {status === "success" ? (
                  <div className="py-8 text-center text-brand-navy">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t("successTitle")}</h4>
                    <p className="mt-2 text-brand-gray-muted">{t("successDesc")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {prefilledBrand && (
                      <input type="hidden" name="enquiry_subject" value={`Brand Enquiry: ${prefilledBrand.name}`} />
                    )}
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label={t("labelName")} name="name" required />
                      <Field label={t("labelOrg")} name="organization" required />
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label={t("labelEmail")} name="email" type="email" required />
                      <Field label={t("labelPhone")} name="phone" type="tel" required />
                    </div>

                    {/* Radio Group */}
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-3">
                        {t("labelRole")}
                      </label>
                      <div className="space-y-2">
                        {RADIO_OPTIONS.map((opt) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="radio"
                              name="role"
                              value={opt}
                              required
                              className="h-4 w-4 text-brand-blue border-brand-gray-border focus:ring-brand-blue"
                            />
                            <span className="text-sm text-brand-gray-text">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-brand-navy">
                        {t("labelMessage")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        defaultValue={defaultMessage}
                        className="mt-1.5 block w-full rounded-lg border border-brand-gray-border px-4 py-2.5 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-600">{t("errorMsg")}</p>
                    )}

                    <Button type="submit" disabled={status === "submitting"} variant="primary" className="w-full">
                      {status === "submitting" ? t("btnSending") : t("btnSend")}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-navy flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-white/20 border-t-white animate-spin"/></div>}>
      <ContactPageContent />
    </Suspense>
  )
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-brand-navy">
        {label}
        {required && <span className="ml-0.5 text-brand-orange">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 block w-full rounded-lg border border-brand-gray-border px-4 py-2.5 text-sm text-brand-gray-text outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      />
    </div>
  );
}
