import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'
import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import FeatureCard from "@/components/ui/FeatureCard";
import SIBanner from "@/components/ui/SIBanner";
import Button from "@/components/ui/Button";
import corporateHeroImg from "../../../../../public/images/solutions/corporate-boardroom.webp";

// ── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Boardroom AV & Meeting Room Displays Nairobi, Kenya | Perlogy',
  description:
    'Perlogy supplies enterprise boardroom AV systems, conferencing displays, ' +
    'and meeting room technology for corporate offices across Nairobi, Kenya ' +
    'and East Africa. Authorised LG distributor. 24hr SI response guaranteed.',
  alternates: { canonical: buildCanonical('/solutions/corporate-av') },
  openGraph: {
    title: 'Corporate AV & Boardroom Technology Nairobi | Perlogy',
    description:
      'Seamless presentation tools, ultra-wide screens, and integrated ' +
      'boardroom AV solutions for corporate offices in Kenya & Africa.',
    url: buildCanonical('/solutions/corporate-av'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
}

// ── Structured Data ─────────────────────────────────────────────────────────
const corporateServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SEO.siteUrl}/solutions/corporate-av#service`,
  name: 'Corporate AV & Boardroom Technology — Nairobi, Kenya & Africa',
  serviceType: 'ProAV Distribution',
  description:
    'Enterprise-grade AV distribution for boardrooms, meeting spaces, and ' +
    'corporate communications across Kenya and the African continent.',
  provider: { '@id': `${SEO.siteUrl}/#organization` },
  areaServed: [
    { '@type': 'City',    name: 'Nairobi' },
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Country', name: 'Uganda' },
  ],
}

const corporateBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',      item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Corporate AV', item: `${SEO.siteUrl}/solutions/corporate-av` },
  ],
}

const corporateFAQSchema = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name:    'What boardroom AV equipment does Perlogy supply in Kenya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Perlogy supplies a full range of corporate AV equipment in Kenya ' +
          'and across Africa — including LG commercial displays, ultra-wide ' +
          'screens, video conferencing bars, AV matrix switchers, interactive ' +
          'whiteboards, and digital signage for reception and lobby areas.',
      },
    },
    {
      '@type': 'Question',
      name:    'Do you supply AV systems for government and institutional buildings in Nairobi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Perlogy supplies boardroom and presentation AV systems for ' +
          'corporate headquarters, government institutions, universities, ' +
          'embassies, and international organisations across Nairobi and Kenya.',
      },
    },
    {
      '@type': 'Question',
      name:    'How does Perlogy support system integrators on corporate AV projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Perlogy supports registered SI partners with pre-sales system design, ' +
          'product specification, competitive pricing, and after-sales technical ' +
          'support — throughout the full project lifecycle. We guarantee a ' +
          '24-hour response to all partner enquiries.',
      },
    },
  ],
}

// ── Product categories ──────────────────────────────────────────────────────
const products = [
  {
    number: '01',
    title:  'Boardroom Displays & Video Walls',
    body:
      'Ultra-wide commercial LCD panels, fine-pitch LED video walls, and ' +
      'interactive touch displays for executive boardrooms and large ' +
      'presentation suites — available in screen sizes from 55" to 220"+.',
  },
  {
    number: '02',
    title:  'Video Conferencing Systems',
    body:
      'Integrated conferencing bars, PTZ cameras, and speakerphone systems ' +
      'that deliver boardroom-grade hybrid communication — compatible with ' +
      'Microsoft Teams, Zoom, and Google Meet.',
  },
  {
    number: '03',
    title:  'AV Matrix & Signal Distribution',
    body:
      'Professional AV switchers, matrix routers, and signal distribution ' +
      'amplifiers that let you present from any source to any screen — ' +
      'without cable chaos or compatibility headaches.',
  },
  {
    number: '04',
    title:  'Interactive Whiteboards',
    body:
      'Enterprise-grade interactive flat panels for training rooms, ' +
      'collaborative workspaces, and education environments — with built-in ' +
      'annotation, multi-touch, and wireless casting functionality.',
  },
  {
    number: '05',
    title:  'Reception & Lobby Displays',
    body:
      'Digital signage solutions for corporate reception areas, lobby walls, ' +
      'wayfinding directories, and employee communications — running ' +
      'scheduled content without a dedicated operator.',
  },
  {
    number: '06',
    title:  'Control & Automation',
    body:
      'Room control systems and AV automation that simplify operation — ' +
      'one-touch meeting start, automated blinds, lighting integration, and ' +
      'display power scheduling for multi-room environments.',
  },
]

// ── Sectors served ──────────────────────────────────────────────────────────
const sectors = [
  { icon: '🏢', label: 'Corporate Headquarters' },
  { icon: '🏛️', label: 'Government & Public Sector' },
  { icon: '🏫', label: 'Universities & Education' },
  { icon: '🏦', label: 'Banking & Financial Services' },
  { icon: '🌍', label: 'NGOs & International Organisations' },
  { icon: '🏨', label: 'Mixed-Use & Commercial Developments' },
]

// ── FAQ data (mirrors schema) ───────────────────────────────────────────────
const faqs = [
  {
    q: 'What boardroom AV equipment does Perlogy supply in Kenya?',
    a:
      'Perlogy supplies a full range of corporate AV equipment in Kenya and ' +
      'across Africa — including LG commercial displays, ultra-wide screens, ' +
      'video conferencing bars, AV matrix switchers, interactive whiteboards, ' +
      'and digital signage for reception and lobby areas.',
  },
  {
    q: 'Do you supply AV systems for government and institutional buildings in Nairobi?',
    a:
      'Yes. Perlogy supplies boardroom and presentation AV systems for corporate ' +
      'headquarters, government institutions, universities, embassies, and ' +
      'international organisations across Nairobi and Kenya.',
  },
  {
    q: 'How does Perlogy support system integrators on corporate AV projects?',
    a:
      'Perlogy supports registered SI partners with pre-sales system design, ' +
      'product specification, competitive pricing, and after-sales technical ' +
      'support — throughout the full project lifecycle. We guarantee a ' +
      '24-hour response to all partner enquiries.',
  },
]

// ── Page ────────────────────────────────────────────────────────────────────
export default function CorporatePage() {
  return (
    <>
      <StructuredData data={[corporateServiceSchema, corporateBreadcrumb, corporateFAQSchema]} />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-32">
        <Image
          src={corporateHeroImg}
          alt="Premium modern corporate boardroom with AV display system — Nairobi, Kenya"
          fill
          priority
          className="object-cover opacity-[0.35] pointer-events-none"
          placeholder="blur"
        />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left — copy */}
          <div className="max-w-xl text-center lg:text-left">
            <SectionTag className="mb-5 [&_span]:text-brand-orange">
              Corporate Solutions
            </SectionTag>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Boardroom AV & Meeting Room Technology — Kenya & Africa.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 lg:text-lg">
              From executive boardrooms in Nairobi to multi-site corporate campuses
              across Africa — Perlogy supplies the AV systems that make every
              meeting professional and every presentation seamless.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button variant="orange" href="/contact">
                Discuss your project
              </Button>
              <Button
                variant="outline-blue"
                href="/brands"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View AV brands
              </Button>
            </div>
          </div>

          {/* Right — badge */}
          <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-brand-navy-mid px-10 py-8 text-center">
            <div className="text-4xl font-extrabold text-brand-orange">LG</div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
              Authorised Distributor
            </div>
            <div className="mt-1 text-xs text-white/40">Kenya & East Africa</div>
          </div>
        </div>
      </section>

      {/* ─── What We Supply ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SectionTag>What We Supply</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          The Complete Corporate AV Stack
        </h2>
        <p className="mt-3 max-w-2xl text-brand-gray-muted leading-relaxed">
          Whether you are equipping a single boardroom or outfitting a full
          corporate campus in Nairobi, Perlogy supplies the entire AV stack —
          from displays to control systems — through one trusted source.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <FeatureCard key={p.number} number={p.number} title={p.title}>
              {p.body}
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* ─── Sectors ─── */}
      <section className="bg-brand-light-blue-bg py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTag>Who We Serve</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Sectors Across Kenya & East Africa
          </h2>
          <p className="mt-3 max-w-2xl text-brand-gray-muted leading-relaxed">
            Our SI partners specify and install Perlogy-supplied AV equipment
            across a broad range of corporate and institutional environments.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {sectors.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-brand-gray-border bg-white px-5 py-4 shadow-sm"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-semibold text-brand-navy leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reference Call-out: Uhuru Gardens ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SectionTag>Reference Project</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Proven at the Largest Scale in East Africa.
        </h2>
        <div className="mt-8 rounded-2xl overflow-hidden border border-brand-blue/10 bg-brand-navy text-white">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-8 lg:p-10">
              <span className="inline-block rounded-full bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4">
                ★ USD 1.4M · Kenya
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Uhuru Gardens Museum — East Africa&apos;s Largest AV Installation
              </h3>
              <p className="text-sm leading-relaxed text-white/70 mb-6">
                Design and implementation of East Africa&apos;s largest LCD video
                wall installation (12×5 LG 1.8mm), 100m² transparent LED film,
                and Displax interactive touch at Kenya&apos;s national heritage
                site in Nairobi — demonstrating the scale, precision, and
                technical capability Perlogy brings to large corporate and
                institutional AV builds.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                {[
                  { val: '12×5', lab: 'LG LCD video wall' },
                  { val: '100m²', lab: 'Transparent LED film' },
                  { val: 'USD 1.4M', lab: 'Total install value' },
                ].map((stat) => (
                  <div key={stat.lab} className="text-center">
                    <div className="text-2xl font-extrabold text-brand-orange">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50 mt-0.5">{stat.lab}</div>
                  </div>
                ))}
              </div>
              <a
                href="/resources/case-studies/uhuru-gardens-museum"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-blue hover:underline"
              >
                View full case study →
              </a>
            </div>
            <div className="hidden lg:block lg:w-[220px] bg-brand-navy-mid"></div>
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
          headline="Speccing a corporate AV project in Kenya?"
          subtext="Submit your requirements and our Nairobi-based team will respond within 24 hours with product recommendations, specifications, and pricing."
          statValue="24h"
          statLabel="Response guaranteed"
        >
          <Button variant="orange" href="/contact">
            Discuss your project →
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
