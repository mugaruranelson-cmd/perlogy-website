import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Airport FIDS & Display Solutions Africa | Perlogy',
  description:
    'Flight Information Display Systems (FIDS), wayfinding, and professional ' +
    'digital signage for international terminals across English-speaking Africa.',
  alternates: { canonical: buildCanonical('/solutions/airports') },
  openGraph: {
    title: 'Airport FIDS & Display Solutions Africa | Perlogy',
    description:
      'High-visibility flight information displays and terminal signage solutions ' +
      'for Africa\'s fastest-growing airports.',
    url: buildCanonical('/solutions/airports'),
    images: [{ url: '/og/solutions-airports.png', width: 1200, height: 630 }],
  },
}

const airportsServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SEO.siteUrl}/solutions/airports#service`,
  name: 'Airport FIDS & Display Solutions — Africa',
  serviceType: 'ProAV Distribution',
  description:
    'Distribution and implementation support for Flight Information Display ' +
    'Systems (FIDS), wayfinding displays, and terminal signage across Africa.',
  provider: { '@id': `${SEO.siteUrl}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'Ethiopia' },
  ],
}

const airportsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Airports', item: `${SEO.siteUrl}/solutions/airports` },
  ],
}

import Image from "next/image";
import airportHeroImg from "../../../../../public/images/solutions/airport-fids.webp";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

export default function AirportsPage() {
  return (
    <>
      <StructuredData data={[airportsServiceSchema, airportsBreadcrumb]} />
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-32">
        <Image src={airportHeroImg} alt="Modern African airport terminal FIDS displays" fill priority className="object-cover opacity-[0.35] pointer-events-none" placeholder="blur" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <SectionTag className="mb-5 [&_span]:text-brand-orange">Airport Solutions</SectionTag>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Flight Information Display Systems
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 lg:text-lg">
            Reliable, high-visibility FIDS displays for Africa's leading international terminals.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="orange" href="/contact">Discuss a project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
