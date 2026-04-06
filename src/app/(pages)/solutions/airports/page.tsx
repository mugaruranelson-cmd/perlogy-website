import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'
import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import FeatureCard from "@/components/ui/FeatureCard";
import SIBanner from "@/components/ui/SIBanner";
import Button from "@/components/ui/Button";
import airportHeroImg from "../../../../../public/images/solutions/airport-fids.webp";

// ── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Airport FIDS & Terminal Display Systems Africa | Perlogy',
  description:
    'Perlogy supplies Flight Information Display Systems (FIDS), passenger ' +
    'wayfinding, and terminal AV for international airports across Kenya, ' +
    'Nigeria, Ethiopia, and East Africa. Authorised Unilumin & LG distributor.',
  alternates: { canonical: buildCanonical('/solutions/airports') },
  openGraph: {
    title: 'Airport FIDS & Terminal Display Systems Africa | Perlogy',
    description:
      'High-visibility FIDS, wayfinding, and passenger information displays ' +
      'for Africa\'s fastest-growing international airports.',
    url: buildCanonical('/solutions/airports'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
}

// ── Structured Data ─────────────────────────────────────────────────────────
const airportsServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SEO.siteUrl}/solutions/airports#service`,
  name: 'Airport FIDS & Terminal Display Systems — Africa',
  serviceType: 'ProAV Distribution',
  description:
    'Distribution and implementation support for Flight Information Display ' +
    'Systems (FIDS), passenger wayfinding, and terminal signage across Africa.',
  provider: { '@id': `${SEO.siteUrl}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Country', name: 'Ghana' },
    { '@type': 'Country', name: 'Tanzania' },
  ],
}

const airportsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',      item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Airports',  item: `${SEO.siteUrl}/solutions/airports` },
  ],
}

const airportsFAQSchema = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name:    'What is a FIDS and what does Perlogy supply for airports in Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A FIDS (Flight Information Display System) is the departure and ' +
          'arrival board network that passengers rely on throughout a terminal. ' +
          'Perlogy supplies commercial-grade, high-brightness displays from LG ' +
          'and Unilumin that are ruggedised for 24/7 operation in airport ' +
          'environments across Kenya, Nigeria, Ethiopia, and East Africa.',
      },
    },
    {
      '@type': 'Question',
      name:    'Which airports in Africa have used Perlogy-supplied display technology?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Perlogy has provided display technology and distribution support for ' +
          'airport and transit infrastructure projects across East and West Africa. ' +
          'Contact us to discuss your specific terminal requirements and learn ' +
          'more about our relevant reference deployments.',
      },
    },
    {
      '@type': 'Question',
      name:    'Can Perlogy supply outdoor forecourt displays for airports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Perlogy supplies high-brightness outdoor LED displays and ' +
          'weatherproof commercial screens for airport forecourts, car parks, ' +
          'drop-off zones, and external wayfinding — all rated for continuous ' +
          'outdoor operation in African climatic conditions.',
      },
    },
  ],
}

// ── Product categories ──────────────────────────────────────────────────────
const products = [
  {
    number: '01',
    title:  'Flight Information Display Systems (FIDS)',
    body:
      'High-brightness, portrait and landscape commercial displays for ' +
      'departure and arrival boards — engineered for 24/7 operation in ' +
      'high-ambient-light terminal environments.',
  },
  {
    number: '02',
    title:  'Passenger Wayfinding & Directories',
    body:
      'Interactive and static digital directories that guide passengers ' +
      'through check-in, security, gates, baggage claim, and ground ' +
      'transportation — in multiple languages.',
  },
  {
    number: '03',
    title:  'Baggage Claim & Gate Displays',
    body:
      'Overhead and wall-mounted commercial displays for baggage carousels, ' +
      'boarding gates, and passenger holding areas — delivering real-time ' +
      'information to reduce anxiety and improve flow.',
  },
  {
    number: '04',
    title:  'Outdoor & Forecourt Screens',
    body:
      'High-brightness outdoor LED and LCD displays for terminal exteriors, ' +
      'drop-off zones, car parks, and roadside approaches — weatherproof and ' +
      'rated for African climate conditions.',
  },
  {
    number: '05',
    title:  'Concourse & Retail Signage',
    body:
      'Digital advertising and commercial signage for airside retail, ' +
      'F&B concessions, duty-free zones, and passenger lounges — running ' +
      'scheduled content with central remote management.',
  },
  {
    number: '06',
    title:  'VIP Lounge & Premium Areas',
    body:
      'Premium display solutions for executive lounges, priority check-in ' +
      'counters, and VIP suites — where aesthetics, image quality, and ' +
      'reliability are non-negotiable.',
  },
]

// ── Airports sectors / environments ────────────────────────────────────────
const environments = [
  { icon: '✈️', label: 'International Terminals' },
  { icon: '🛄', label: 'Baggage & Arrivals Halls' },
  { icon: '🚉', label: 'Train & Transit Stations' },
  { icon: '🅿️', label: 'Car Parks & Forecourts' },
  { icon: '🏪', label: 'Airside Retail & Lounges' },
  { icon: '🛂', label: 'Immigration & Border Control' },
]

// ── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a FIDS and what does Perlogy supply for airports in Africa?',
    a:
      'A FIDS (Flight Information Display System) is the departure and arrival ' +
      'board network that passengers rely on throughout a terminal. Perlogy ' +
      'supplies commercial-grade, high-brightness displays from LG and Unilumin ' +
      'that are ruggedised for 24/7 operation in airport environments across ' +
      'Kenya, Nigeria, Ethiopia, and East Africa.',
  },
  {
    q: 'Which airports in Africa have used Perlogy-supplied display technology?',
    a:
      'Perlogy has provided display technology and distribution support for airport ' +
      'and transit infrastructure projects across East and West Africa. Contact us ' +
      'to discuss your specific terminal requirements.',
  },
  {
    q: 'Can Perlogy supply outdoor forecourt displays for airports?',
    a:
      'Yes. Perlogy supplies high-brightness outdoor LED displays and weatherproof ' +
      'commercial screens for airport forecourts, car parks, drop-off zones, and ' +
      'external wayfinding — all rated for continuous outdoor operation in African ' +
      'climatic conditions.',
  },
]

// ── Page ────────────────────────────────────────────────────────────────────
export default function AirportsPage() {
  return (
    <>
      <StructuredData data={[airportsServiceSchema, airportsBreadcrumb, airportsFAQSchema]} />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-32">
        <Image
          src={airportHeroImg}
          alt="Modern African airport terminal with FIDS flight information display systems — East Africa"
          fill
          priority
          className="object-cover opacity-[0.35] pointer-events-none"
          placeholder="blur"
        />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left — copy */}
          <div className="max-w-xl text-center lg:text-left">
            <SectionTag className="mb-5 [&_span]:text-brand-orange">
              Airport Solutions
            </SectionTag>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              FIDS & Terminal Display Systems for Africa&apos;s Airports.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 lg:text-lg">
              From departure boards to passenger wayfinding — Perlogy supplies
              reliable, high-visibility display technology for international
              terminals across Kenya, Nigeria, Ethiopia, and East Africa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button variant="orange" href="/contact">
                Discuss a project
              </Button>
              <Button
                variant="outline-blue"
                href="/brands"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View display brands
              </Button>
            </div>
          </div>

          {/* Right — badge */}
          <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-brand-navy-mid px-10 py-8 text-center">
            <div className="text-3xl font-extrabold text-brand-orange">24/7</div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
              Display uptime rated
            </div>
            <div className="mt-1 text-xs text-white/40">Airport grade reliability</div>
          </div>
        </div>
      </section>

      {/* ─── What We Supply ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SectionTag>What We Supply</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          The Full Airport Display Stack
        </h2>
        <p className="mt-3 max-w-2xl text-brand-gray-muted leading-relaxed">
          Airports demand displays that perform without failure in high-footfall,
          high-ambient-light environments. Perlogy supplies commercial-grade
          technology from LG and Unilumin — built for exactly these conditions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <FeatureCard key={p.number} number={p.number} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* ─── Environments ─── */}
      <section className="bg-brand-light-blue-bg py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTag>Environments We Serve</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Transit Environments Across East & West Africa
          </h2>
          <p className="mt-3 max-w-2xl text-brand-gray-muted leading-relaxed">
            Our SI partners specify and install Perlogy-supplied display systems
            across the full range of transit and transport environments.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {environments.map((e) => (
              <div
                key={e.label}
                className="flex items-center gap-3 rounded-xl border border-brand-gray-border bg-white px-5 py-4 shadow-sm"
              >
                <span className="text-2xl">{e.icon}</span>
                <span className="text-sm font-semibold text-brand-navy leading-snug">
                  {e.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Airports Need Commercial-Grade Displays ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SectionTag>Why It Matters</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Why Airport Displays Must Be Commercial-Grade
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-orange shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy">24/7 Continuous Operation</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
              Consumer-grade screens fail within months of continuous operation.
              Perlogy supplies commercial-grade panels rated for 24/7 use —
              with active cooling, pro-grade panels, and extended warranties.
            </p>
          </div>
          <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-orange shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy">High Ambient Light Environments</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
              Airport terminals receive direct sunlight through glass walls and
              roofs. High-brightness commercial displays (700–2500 cd/m²) ensure
              FIDS content remains clearly legible in all lighting conditions.
            </p>
          </div>
          <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-orange shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy">Remote Content Management</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
              Managing hundreds of screens across a terminal requires central,
              remote management capability — including content scheduling, fault
              alerts, and power control without physical access.
            </p>
          </div>
          <div className="rounded-lg border border-brand-gray-border bg-white p-6 border-l-[3px] border-l-brand-orange shadow-sm">
            <h3 className="text-lg font-bold text-brand-navy">Warranty & After-Sales in Africa</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
              Grey-market displays carry no regional warranty. Perlogy-supplied
              displays from LG and Unilumin include manufacturer-backed warranty
              and Perlogy after-sales support — keeping terminals operational.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="bg-brand-light-blue-bg px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTag>FAQs</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-brand-gray-border bg-white [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl p-6 text-brand-navy font-bold">
                  {faq.q}
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-brand-gray-text leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIBanner ─── */}
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SIBanner
          headline="Working on an airport or transit display project?"
          subtext="Whether you are speccing FIDS, wayfinding, or outdoor screens — our team can recommend the right products, pixel pitch, and brightness specifications for your terminal."
          statValue="15+"
          statLabel="Countries served"
        >
          <Button variant="orange" href="/contact">
            Discuss your project →
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
