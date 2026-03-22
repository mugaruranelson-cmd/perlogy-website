import SectionTag from "@/components/ui/SectionTag";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";
import SIBanner from "@/components/ui/SIBanner";
import Button from "@/components/ui/Button";
import { CaseStudyPullStrip } from '@/components/case-studies/CaseStudyPullStrip'

/* ── Product cards data ── */
const products = [
  {
    icon: "🖥️",
    title: "LED Video Walls",
    body: "High-resolution indoor and outdoor LED displays for retail, hospitality, corporate lobbies, and live events — available in fine-pitch and standard configurations.",
  },
  {
    icon: "📊",
    title: "Commercial Displays",
    body: "Professional-grade LCD panels for digital menu boards, meeting rooms, wayfinding, and always-on advertising in high-traffic environments.",
  },
  {
    icon: "☀️",
    title: "Outdoor Screens",
    body: "High-brightness, weatherproof LED and LCD solutions for building façades, forecourts, stadiums, and roadside installations.",
  },
];

import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'LED & Digital Signage Distribution Africa | Unilumin | Perlogy',
  description:
    'Unilumin LED video walls, commercial displays, and outdoor screens for ' +
    'retail, corporate, and airport environments across English-speaking Africa. ' +
    'Perlogy is the authorised Unilumin distributor for sub-Saharan Africa.',
  alternates: { canonical: buildCanonical('/solutions/digital-signage') },
  openGraph: {
    title: 'LED & Digital Signage Africa | Authorised Unilumin Distributor | Perlogy',
    description:
      'Fine-pitch indoor LED, outdoor panels, and commercial displays across ' +
      'East, West, and Southern Africa.',
    url: buildCanonical('/solutions/digital-signage'),
  },
}

const signageServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SEO.siteUrl}/solutions/digital-signage#service`,
  name: 'LED & Digital Signage Distribution — Africa',
  serviceType: 'ProAV Distribution',
  description:
    'Authorised distribution of Unilumin LED video walls, commercial displays, ' +
    'and outdoor screens for high-traffic environments across Africa.',
  provider: { '@id': `${SEO.siteUrl}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'South Africa' },
  ],
}

const signageBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Digital Signage', item: `${SEO.siteUrl}/solutions/digital-signage` },
  ],
}

import Image from "next/image";
import signageHeroImg from "../../../../../public/images/solutions/signage-led-wall.webp";

export default function DigitalSignagePage() {
  return (
    <>
      <StructuredData data={[signageServiceSchema, signageBreadcrumb]} />
      {/* ─── 2-Column Hero ─── */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-28">
        <Image src={signageHeroImg} alt="Massive indoor LED video wall in a premium African shopping mall" fill priority className="object-cover opacity-[0.35] pointer-events-none" placeholder="blur" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left — copy */}
          <div className="max-w-xl text-center lg:text-left">
            <SectionTag className="mb-5 [&_span]:text-brand-orange">
              Digital Signage
            </SectionTag>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              LED &amp; display systems for Africa&apos;s commercial sector.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 lg:text-lg">
              From retail video walls to outdoor spectaculars, Perlogy supplies
              and supports the full range of commercial display technology — backed
              by our official Unilumin distribution partnership.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button variant="orange" href="/contact">
                Spec a project
              </Button>
              <Button
                variant="outline-blue"
                href="/brands"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View brands
              </Button>
            </div>
          </div>

          {/* Right — badge */}
          <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-brand-navy-mid px-10 py-8 text-center">
            <div className="text-4xl font-extrabold text-brand-orange">
              Unilumin
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
              Authorised Distributor
            </div>
            <div className="mt-1 text-xs text-white/40">
              Sub-Saharan Africa
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Cards ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SectionTag>Product Range</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Displays for Every Environment
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-brand-gray-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Reference Case Study ─── */}
      <section className="mx-auto max-w-5xl px-4 pb-16 lg:px-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase
          text-[#1635D4] mb-2">
          Reference project
        </p>
        <h2 className="text-[20px] font-medium
          text-[var(--color-text-primary)] mb-6">
          Proven at the largest scale in East Africa.
        </h2>
        <CaseStudyPullStrip
          slug="uhuru-gardens-museum"
          ctaText="View the full installation →"
        />
      </section>

      {/* ─── Unilumin Partnership Section ─── */}
      <div className="mx-auto max-w-5xl px-4 pb-16 lg:px-8">
        <CaseStudyBlock
          tag="LED Technology · Partnership"
          title="Unilumin — Official Distribution for Sub-Saharan Africa"
          description="Perlogy is the authorised distributor for Unilumin LED display products across sub-Saharan Africa, giving system integrators direct access to one of the world's top LED manufacturers."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                About Unilumin
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Unilumin is a global top-three LED display manufacturer, supplying
                fine-pitch, rental, outdoor, and creative LED solutions to markets
                worldwide. Their technology is trusted in broadcast studios,
                stadiums, retail flagships, and command centres.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                What This Means for Integrators
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Through Perlogy, African system integrators gain factory-direct
                pricing, regional stock availability, technical pre-sales support,
                and warranty-backed after-sales service — without the complexity of
                importing directly.
              </p>
            </div>
          </div>
        </CaseStudyBlock>
      </div>

      {/* ─── SIBanner ─── */}
      <div className="mx-auto max-w-5xl px-4 pb-16 lg:px-8">
        <SIBanner
          headline="Speccing a signage project?"
          subtext="Tell us about your display requirements and we'll recommend the right products, pricing, and support package."
        >
          <Button variant="orange" href="/contact">
            Request a quote
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
