import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Corporate AV & Boardroom Technology Africa | Perlogy',
  description:
    'Boardroom displays, conferencing bars, and enterprise AV distribution ' +
    'for professional meeting spaces across English-speaking Africa.',
  alternates: { canonical: buildCanonical('/solutions/corporate-av') },
  openGraph: {
    title: 'Corporate AV & Boardroom Technology Africa | Perlogy',
    description:
      'Seamless presentation tools, ultra-wide screens, and integrated ' +
      'boardroom solutions for the African corporate sector.',
    url: buildCanonical('/solutions/corporate-av'),
  },
}

const corporateServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SEO.siteUrl}/solutions/corporate-av#service`,
  name: 'Corporate AV & Boardroom Technology — Africa',
  serviceType: 'ProAV Distribution',
  description:
    'Enterprise-grade AV distribution for boardrooms, meeting spaces, and ' +
    'corporate communications across the African continent.',
  provider: { '@id': `${SEO.siteUrl}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Country', name: 'South Africa' },
  ],
}

const corporateBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
    { '@type': 'ListItem', position: 3, name: 'Corporate AV', item: `${SEO.siteUrl}/solutions/corporate-av` },
  ],
}

import Image from "next/image";
import corporateHeroImg from "../../../../../public/images/solutions/corporate-boardroom.webp";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

export default function CorporatePage() {
  return (
    <>
      <StructuredData data={[corporateServiceSchema, corporateBreadcrumb]} />
      <section className="relative overflow-hidden bg-brand-navy px-4 py-20 text-white lg:px-8 lg:py-32">
        <Image src={corporateHeroImg} alt="Premium modern corporate boardroom in Africa" fill priority className="object-cover opacity-[0.35] pointer-events-none" placeholder="blur" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <SectionTag className="mb-5 [&_span]:text-brand-orange">Corporate Solutions</SectionTag>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Enterprise AV &amp; Boardroom Technology
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 lg:text-lg">
            Equipping professional meeting spaces with ultra-wide screens, conferencing bars, and seamless presentation tools.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="orange" href="/contact">Discuss a project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
