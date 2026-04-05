import SectionTag from "@/components/ui/SectionTag";
import FeatureCard from "@/components/ui/FeatureCard";
import CaseStudyBlock from "@/components/ui/CaseStudyBlock";
import SIBanner from "@/components/ui/SIBanner";
import Button from "@/components/ui/Button";

import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Hotel AV & IPTV Systems Africa | LG Pro:Centric | Perlogy',
  description:
    'Perlogy supplies LG Pro:Centric hospitality TVs, IPTV systems, and hotel ' +
    'AV for properties across East, West, and Southern Africa. Authorised LG ' +
    'distributor. Reference: DoubleTree by Hilton Asaba, 220 rooms.',
  alternates: { canonical: buildCanonical('/solutions/hospitality') },
  openGraph: {
    title: 'Hotel AV & IPTV Solutions Across Africa | Perlogy',
    description:
      'LG Pro:Centric, Uniguest IPTV, and full hospitality AV stack. ' +
      'Delivered through specialist SI partners.',
    url: buildCanonical('/solutions/hospitality'),
    images: [{ url: '/og/solutions-hospitality.png', width: 1200, height: 630 }],
  },
}

const hospitalityServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SEO.siteUrl}/solutions/hospitality#service`,
  name: 'Hotel AV & IPTV System Distribution — Africa',
  serviceType: 'ProAV Distribution',
  description:
    'Distribution of LG Pro:Centric hospitality TVs, IPTV headend systems, ' +
    'Uniguest guest engagement platforms, and complete hotel AV infrastructure.',
  provider: { '@id': `${SEO.siteUrl}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'Ghana' },
    { '@type': 'Country', name: 'South Africa' },
    { '@type': 'Country', name: 'Uganda' },
  ],
}

const hospitalityBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Hospitality', item: `${SEO.siteUrl}/solutions/hospitality` },
  ],
}

import Image from "next/image";
import hotelLobbyImg from "../../../../../public/images/case-studies/hotel-lobby.webp";
import hiltonRoomImg from "../../../../../public/images/case-studies/hilton-room.webp";

export default function HospitalityPage() {
  return (
    <>
      <StructuredData data={[hospitalityServiceSchema, hospitalityBreadcrumb]} />
      {/* ─── 2-Column Hero ─── */}
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-28">
        <Image src={hotelLobbyImg} alt="Five-star African hotel lobby" fill priority className="object-cover opacity-30 pointer-events-none" placeholder="blur" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left — copy */}
          <div className="max-w-xl text-center lg:text-left">
            <SectionTag className="mb-5 [&_span]:text-brand-orange">
              Hospitality Solutions
            </SectionTag>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Technology that elevates the guest experience.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 lg:text-lg">
              From five-star lobbies to in-room entertainment, Perlogy delivers
              end-to-end hospitality AV and IPTV systems trusted by Africa&apos;s
              leading hotel brands.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button variant="orange" href="/contact">
                Discuss your project
              </Button>
              <Button
                variant="outline-blue"
                href="/resources/case-studies"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View case studies
              </Button>
            </div>
          </div>

          {/* Right — stat badge */}
          <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-brand-navy-mid px-10 py-8 text-center">
            <div className="text-5xl font-extrabold text-brand-orange sm:text-6xl">
              220+
            </div>
            <div className="mt-1 text-sm font-medium uppercase tracking-wider text-white/50">
              Hotel rooms equipped
            </div>
            <div className="mt-4 text-xs text-white/40">
              Including Hilton Asaba, Nigeria
            </div>
          </div>
        </div>
      </section>

      {/* ─── What We Supply ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SectionTag>What we supply</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          End-to-End Hospitality Technology
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FeatureCard number="01" title="In-Room Entertainment">
            IPTV, casting, and smart-room control systems that let guests stream,
            browse, and manage their stay from one screen.
          </FeatureCard>
          <FeatureCard number="02" title="Lobby &amp; Public Areas">
            Digital signage, welcome screens, and wayfinding displays that set
            the tone from the moment guests arrive.
          </FeatureCard>
          <FeatureCard number="03" title="Conference &amp; Events">
            Projection, LED walls, AV switching, and sound systems for
            ballrooms, meeting rooms, and multi-purpose spaces.
          </FeatureCard>
          <FeatureCard number="04" title="Back-of-House">
            Staff communication displays, security monitoring, and network
            infrastructure that keeps operations running.
          </FeatureCard>
        </div>
      </section>

      {/* ─── Reference Project: Hilton Asaba ─── */}
      <div className="mx-auto max-w-5xl px-4 pb-16 lg:px-8">
        <div className="relative h-64 sm:h-96 w-full mb-8 overflow-hidden rounded-2xl bg-brand-navy-mid shadow-sm">
           <Image src={hiltonRoomImg} alt="Hilton Asaba hotel room with LG Hospitality TV" fill className="object-cover" placeholder="blur" />
        </div>
        <CaseStudyBlock
          tag="Reference Project"
          title="Hilton Asaba — Full IPTV &amp; AV Deployment"
          description="A turnkey hospitality technology rollout across 220+ rooms in one of Nigeria's newest international-brand hotels."
          stats={[
            { value: "220+", label: "Rooms" },
            { value: "6 mo", label: "Deployment" },
            { value: "Full", label: "IPTV system" },
          ]}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                The Challenge
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Hilton required a fully integrated IPTV and AV system across
                guest rooms, public areas, and conference facilities — delivered
                to international brand standards in a Nigerian market context.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Our Role
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Perlogy supplied and commissioned the complete IPTV head-end,
                in-room displays, lobby signage, and conference AV — working with
                the property&apos;s system integrator from design through handover.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                The Result
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                A seamless guest entertainment and information platform running
                across every room and public space, fully operational from
                opening day.
              </p>
            </div>
          </div>
        </CaseStudyBlock>
      </div>

      {/* ─── SIBanner ─── */}
      <div className="mx-auto max-w-5xl px-4 pb-16 lg:px-8">
        <SIBanner
          headline="Working on a hotel project?"
          subtext="Whether you're an SI, architect, or hotel operator — let's talk about what Perlogy can supply."
          statValue="15+"
          statLabel="Brands available"
        >
          <Button variant="orange" href="/contact">
            Get in touch
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
