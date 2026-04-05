import DarkHero from "@/components/ui/DarkHero";
import SectionTag from "@/components/ui/SectionTag";
import SIBanner from "@/components/ui/SIBanner";
import Button from "@/components/ui/Button";

/* ── Stats ── */
const stats = [
  { value: "15+", label: "Countries" },
  { value: "500+ SQM", label: "LED supplied" },
  { value: "15+", label: "Brands" },
  { value: "2000+", label: "Hotel rooms equipped" },
  { value: "0", label: "Direct sales to end-users" },
];

/* ── Milestones ── */
const milestones = [
  {
    year: "2019",
    title: "Founded",
    body: "Perlogy Technologies LLC was established in the UAE with a clear mission: bridge the gap between world-class AV technology and Africa's rapidly growing demand for enterprise-grade solutions.",
  },
  {
    year: "2022",
    title: "Hospitality — Hilton Asaba",
    body: "Delivered a full IPTV and AV deployment across 220+ rooms at Hilton Asaba, Nigeria — our first major hospitality reference project.",
  },
  {
    year: "2023",
    title: "LED — Unilumin Partnership",
    body: "Appointed as the official Unilumin distributor for sub-Saharan Africa, giving integrators factory-direct access to world-leading LED display technology.",
  },
  {
    year: "2024",
    title: "IPTV Platform Launch",
    body: "Launched a proprietary IPTV middleware platform tailored for African hospitality — enabling hotels to offer Netflix-grade guest entertainment without complex infrastructure.",
  },
];

import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'About Perlogy — Our Story, Mission & Leadership',
  description:
    'Perlogy Technologies was founded in Dubai with a single purpose: to be ' +
    'the ProAV distribution partner Africa always needed. Led by Director ' +
    'Nelson Mandela Mugarura MBA MSc BSc, we serve English-speaking Africa ' +
    'through authorised LG and Unilumin partnerships.',
  alternates: { canonical: buildCanonical('/about') },
  openGraph: {
    title: 'About Perlogy Technologies — ProAV Distribution Built for Africa',
    description:
      'Founded in Dubai, focused on Africa. The story behind East Africa\'s ' +
      'most significant AV installation partner.',
    url: buildCanonical('/about'),
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SEO.siteUrl}/#person-nmm`,
  name: SEO.director.name,
  jobTitle: SEO.director.jobTitle,
  honorificSuffix: SEO.director.honorific,
  description:
    'Director of Perlogy Technologies LLC. Led the design and implementation ' +
    'of the USD 1.4M Uhuru Gardens Museum AV system — East Africa\'s largest ' +
    'LCD video wall installation.',
  worksFor: { '@id': `${SEO.siteUrl}/#organization` },
}

const aboutBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SEO.siteUrl}/about` },
  ],
}

import aboutHero from "../../../../public/images/heroes/about-hero.webp";
import techInstallImg from "../../../../public/images/case-studies/technician-install.webp";
import teamAtWorkImg from "../../../../public/images/people/team-at-work.webp";
import Image from "next/image";

// The globally generated AI vector asset
import africaMapConnectedImg from "../../../../public/images/decorative/africa-map-connected.png";

export default function AboutPage() {
  return (
    <>
      <StructuredData data={[personSchema, aboutBreadcrumb]} />
      {/* ─── Hero ─── */}
      <DarkHero
        bgImage={aboutHero}
        tag="About Perlogy"
        title="A bridge between world-class technology and Africa's ambition."
        subtitle="We don't sell to end-users. We equip the system integrators, consultants, and installers who build Africa's technology infrastructure."
      />

      {/* ─── Story + Stat Grid ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left — story */}
          <div className="max-w-xl">
            <SectionTag>Our Story</SectionTag>
            <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Built for the Channel
            </h2>

            <div className="mt-6 space-y-4 text-brand-gray-muted leading-relaxed">
              <p>
                Perlogy Technologies was founded on a simple observation: Africa&apos;s
                largest construction and technology projects were being held back by
                fragmented supply chains. Integrators struggled to source
                enterprise-grade AV equipment — dealing with grey-market imports,
                inconsistent pricing, and zero local support.
              </p>

              <div className="relative my-8 h-64 w-full overflow-hidden rounded-xl bg-brand-navy-mid">
                <Image 
                  src={techInstallImg} 
                  alt="Professional AV technician mounting a display" 
                  fill 
                  className="object-cover" 
                  placeholder="blur" 
                />
              </div>

              <p>
                We set out to fix that. By securing official distribution agreements
                with the world&apos;s leading AV and display brands, Perlogy gives
                system integrators a single, reliable supply partner — with regional
                stock, competitive pricing, and genuine technical backing.
              </p>

              <div className="relative my-8 h-64 w-full overflow-hidden rounded-xl bg-brand-navy-mid">
                <Image 
                  src={teamAtWorkImg} 
                  alt="Perlogy international distribution team at work" 
                  fill 
                  className="object-cover pointer-events-none" 
                  placeholder="blur" 
                />
              </div>

              <p>
                Today, Perlogy supplies technology into hotels, airports, corporate
                campuses, and retail environments across more than fifteen African
                countries — all through our network of system integrator partners.
                We never sell direct. The channel is our customer, and the
                project&apos;s success is our measure.
              </p>
            </div>
          </div>

          {/* Right — 2×2 stat grid + Why Choose Us */}
          <div className="flex w-full flex-col gap-8 self-start lg:w-[360px] xl:w-[400px]">
            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, idx) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center justify-center rounded-xl border border-brand-gray-border bg-white px-4 py-6 text-center shadow-sm ${idx === stats.length - 1 ? 'col-span-2' : ''}`}
                >
                  <div className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-brand-gray-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Organizations Choose Perlogy */}
            <div className="rounded-xl border border-brand-blue/10 bg-brand-light-blue-bg/80 p-6 lg:p-8">
              <h3 className="mb-5 text-lg font-extrabold text-brand-navy">
                Why Organizations Choose Perlogy
              </h3>
              <ul className="space-y-4">
                {[
                  "Proven delivery of large-scale national projects",
                  "Direct partnerships with global manufacturers",
                  "Dubai-based logistics hub supporting African markets",
                  "Deep engineering and commissioning expertise",
                  "Strong understanding of African operating environments",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-gray-text leading-snug">
                    <span className="mt-0.5 shrink-0 text-brand-orange">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="font-medium text-brand-navy/90">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-brand-blue/10 pt-5">
                <p className="text-xs italic leading-relaxed text-brand-gray-muted">
                  * This framework directly addresses typical procurement risk concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Connectivity Map & Countries Served ─── */}
      <section className="bg-white border-t border-brand-gray-border py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTag>Regions</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Countries Served
          </h2>
          <p className="mt-4 max-w-2xl text-brand-gray-muted leading-relaxed">
            Our operational presence spanning the continent. Nairobi, Kenya operates as 
            our central technical support and distribution hub, projecting capability across East, 
            West, and Southern Africa.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_300px] items-start">
            {/* Map Visual */}
            <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-2xl bg-[#0F1626] shadow-xl border border-brand-navy/10">
              <Image 
                src={africaMapConnectedImg} 
                alt="Perlogy Africa Connectivity Map with Nairobi Support Base" 
                fill 
                className="object-cover object-center pointer-events-none" 
                placeholder="blur"
              />
            </div>

            {/* Country List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 rounded-2xl bg-brand-light-blue-bg/50 border border-brand-blue/10 p-6 shadow-sm">
              <div className="col-span-full mb-3 pb-3 border-b border-brand-gray-border/70">
                <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">Active Markets</h4>
              </div>
              {[
                "Kenya", "Uganda", "Tanzania", "Nigeria", 
                "Ghana", "Zambia", "Rwanda", "Cameroon", 
                "Ethiopia", "DRC", "Seychelles", "South Africa"
              ].map((country) => (
                <div key={country} className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${country === 'Kenya' ? 'bg-brand-orange animate-pulse' : 'bg-brand-blue/60'}`} />
                  <span className={`text-sm ${country === 'Kenya' ? 'font-bold text-brand-navy' : 'font-medium text-brand-gray-text'}`}>
                    {country} {country === 'Kenya' && <span className="text-[10px] font-normal text-brand-orange ml-1">(Support Base)</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Milestone Timeline ─── */}
      <section className="bg-brand-light-blue-bg px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTag>Milestones</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Key Moments
          </h2>

          <div className="mt-10 space-y-0">
            {/* Uhuru Gardens — flagship milestone */}
            <div className={[
              'grid gap-6 border-b border-brand-gray-border py-8 sm:grid-cols-[100px_1fr] sm:gap-10',
            ].join(' ')}>
              <div>
                <span className="text-[12px] font-bold text-brand-orange block mb-1 uppercase tracking-wider">
                  Flagship
                </span>
                <div className="text-2xl font-extrabold text-brand-navy">
                  2024
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  Uhuru Gardens Museum — USD 1.4M · AV Record
                </h3>
                <p className="mt-2 leading-relaxed text-brand-gray-muted mb-4">
                  Design and implementation of East Africa&apos;s largest LCD
                  video wall installation (12×5 LG 1.8mm), 100m² transparent
                  LED film, and Displax interactive touch at Kenya&apos;s
                  national heritage site in Nairobi.
                </p>
                <a
                  href="/resources/case-studies/uhuru-gardens-museum"
                  className={[
                    'inline-flex items-center gap-2',
                    'text-[13px] font-bold text-brand-blue',
                    'hover:underline transition-all duration-150',
                  ].join(' ')}
                >
                  View full case study →
                </a>
              </div>
            </div>

            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`grid gap-6 border-b border-brand-gray-border py-8 sm:grid-cols-[100px_1fr] sm:gap-10 ${
                  i === milestones.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="text-2xl font-extrabold text-brand-orange">
                  {m.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {m.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-brand-gray-muted">
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIBanner ─── */}
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SIBanner
          headline="Want to work with Perlogy?"
          subtext="Whether you're an integrator, consultant, or project owner — we'd love to hear about your next project."
          statValue="15+"
          statLabel="Countries served"
        >
          <Button variant="orange" href="/partners/apply">
            Become a partner
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
