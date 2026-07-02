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
  title: 'About Perlogy Technologies | B2B AV Distributor Nairobi, Kenya',
  description:
    'Perlogy Technologies is a B2B ProAV distribution company based in ' +
    'Nairobi, Kenya. Founded to serve Africa\'s system integrators with ' +
    'authorised LG & Unilumin supply, technical support, and zero direct sales. ' +
    'Director: Nelson Mandela Mugarura MBA MSc.',
  alternates: { canonical: buildCanonical('/about') },
  openGraph: {
    title: 'About Perlogy Technologies | ProAV Distributor Built for Africa',
    description:
      'Based in Nairobi, Kenya — focused on all of Africa. The story behind ' +
      'East Africa\'s most significant ProAV distribution partner.',
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

import aboutHero from "../../../../../public/images/heroes/about-hero.webp";
import techInstallImg from "../../../../../public/images/case-studies/technician-install.webp";
import teamAtWorkImg from "../../../../../public/images/people/team-at-work.webp";
import Image from "next/image";

import africaMapConnectedImg from "../../../../../public/images/decorative/africa-map-connected.png";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');
  
  return (
    <>
      <StructuredData data={[personSchema, aboutBreadcrumb]} />
      {/* ─── Hero ─── */}
      <DarkHero
        bgImage={aboutHero}
        tag={t('heroTag')}
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
      />

      {/* ─── Story + Stat Grid ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left — story */}
          <div className="max-w-xl">
            <SectionTag>{t('storyTag')}</SectionTag>
            <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              {t('storyTitle')}
            </h2>

            <div className="mt-6 space-y-4 text-brand-gray-muted leading-relaxed">
              <p>{t('storyP1')}</p>

              <div className="relative my-8 h-64 w-full overflow-hidden rounded-xl bg-brand-navy-mid">
                <Image 
                  src={techInstallImg} 
                  alt="Professional AV technician mounting a display" 
                  fill 
                  className="object-cover" 
                  placeholder="blur" 
                />
              </div>

              <p>{t('storyP2')}</p>

              <div className="relative my-8 h-64 w-full overflow-hidden rounded-xl bg-brand-navy-mid">
                <Image 
                  src={teamAtWorkImg} 
                  alt="Perlogy international distribution team at work" 
                  fill 
                  className="object-cover pointer-events-none" 
                  placeholder="blur" 
                />
              </div>

              <p>{t('storyP3')}</p>
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
                {t('whyChooseUs')}
              </h3>
              <ul className="space-y-4">
                {[
                  t('why1'),
                  t('why2'),
                  t('why3'),
                  t('why4'),
                  t('why5'),
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
                  {t('whyDisclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Connectivity Map & Countries Served ─── */}
      <section className="bg-white border-t border-brand-gray-border py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTag>{t('regionsTag')}</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            {t('regionsTitle')}
          </h2>
          <p className="mt-4 max-w-2xl text-brand-gray-muted leading-relaxed">
            {t('regionsDesc')}
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
                <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">{t('activeMarkets')}</h4>
              </div>
              {[
                "Kenya", "Uganda", "Tanzania", "Nigeria", 
                "Ghana", "Zambia", "Rwanda", "Cameroon", 
                "Ethiopia", "DRC", "Seychelles", "South Africa"
              ].map((country) => (
                <div key={country} className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${country === 'Kenya' ? 'bg-brand-orange animate-pulse' : 'bg-brand-blue/60'}`} />
                  <span className={`text-sm ${country === 'Kenya' ? 'font-bold text-brand-navy' : 'font-medium text-brand-gray-text'}`}>
                    {country} {country === 'Kenya' && <span className="text-[10px] font-normal text-brand-orange ml-1">{t('supportBase')}</span>}
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
          <SectionTag>{t('milestonesTag')}</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            {t('milestonesTitle')}
          </h2>

          <div className="mt-10 space-y-0">
            {/* Uhuru Gardens — flagship milestone */}
            <div className={[
              'grid gap-6 border-b border-brand-gray-border py-8 sm:grid-cols-[100px_1fr] sm:gap-10',
            ].join(' ')}>
              <div>
                <span className="text-[12px] font-bold text-brand-orange block mb-1 uppercase tracking-wider">
                  {t('milestoneFlagship')}
                </span>
                <div className="text-2xl font-extrabold text-brand-navy">
                  2024
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  {t('milestoneFlagshipTitle')}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-gray-muted mb-4">
                  {t('milestoneFlagshipBody')}
                </p>
                <a
                  href="/resources/case-studies/uhuru-gardens-museum"
                  className={[
                    'inline-flex items-center gap-2',
                    'text-[13px] font-bold text-brand-blue',
                    'hover:underline transition-all duration-150',
                  ].join(' ')}
                >
                  {t('viewCaseStudy')}
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

      {/* ─── Leadership Team (Placeholder) ─── */}
      <section className="bg-white px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionTag>{t('leadershipTag')}</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            {t('leadershipTitle')}
          </h2>
          <p className="mt-4 max-w-2xl text-brand-gray-muted leading-relaxed">
            {t('leadershipDesc')}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center">
            {/* Franklin Ogonji Omondi */}
            <div className="flex flex-col items-center text-center max-w-sm mx-auto">
              <div className="relative h-48 w-48 rounded-full border border-brand-blue/10 mb-4 overflow-hidden shadow-sm">
                <Image 
                  src="/images/people/frank.jpeg" 
                  alt="Franklin Ogonji Omondi, Managing Director" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Franklin Ogonji Omondi</h3>
              <p className="text-brand-blue font-medium mt-1">{t('franklinTitle')}</p>
              <p className="mt-3 text-sm text-brand-gray-text leading-relaxed">
                {t('franklinDesc')}
              </p>
            </div>
          </div>

          {/* Organizational Chart */}
          <div className="mt-20">
            <SectionTag>{t('structureTag')}</SectionTag>
            <h3 className="mt-4 text-2xl font-extrabold text-brand-navy text-center">{t('structureTitle')}</h3>
            
            <div className="mt-12 flex flex-col items-center overflow-x-auto pb-8">
              {/* Founder Level */}
              <div className="flex flex-col items-center">
                <div className="border border-brand-blue/20 bg-brand-light-blue-bg rounded-lg px-6 py-3 text-center min-w-[200px]">
                  <p className="text-brand-navy font-bold">Nelson Mugarura</p>
                  <p className="text-brand-blue text-xs font-medium uppercase tracking-wide mt-1">{t('founderTitle')}</p>
                </div>
                {/* Vertical Line */}
                <div className="w-px h-8 bg-brand-blue/30 my-2"></div>
                <div className="border border-brand-blue/20 bg-white shadow-sm rounded-lg px-6 py-2 text-center text-xs text-brand-gray-text min-w-[220px]">
                  {t('strategicDirection')}
                </div>
                {/* Vertical Line */}
                <div className="w-px h-8 bg-brand-blue/30 my-2"></div>
              </div>

              {/* MD Level */}
              <div className="flex flex-col items-center">
                <div className="border-2 border-brand-blue bg-white shadow-md rounded-lg px-8 py-4 text-center min-w-[250px]">
                  <p className="text-brand-navy font-bold text-lg">Franklin Ogonji Omondi</p>
                  <p className="text-brand-orange text-sm font-bold uppercase tracking-wide mt-1">{t('franklinTitle')}</p>
                </div>
                {/* Vertical Line */}
                <div className="w-px h-10 bg-brand-blue/30"></div>
              </div>

              {/* Departments Level */}
              <div className="flex flex-col items-center w-full max-w-3xl">
                {/* Horizontal Connecting Line */}
                <div className="w-[85%] sm:w-[90%] border-t border-brand-blue/30"></div>
                
                {/* Departments */}
                <div className="flex justify-between w-[90%] sm:w-full mt-0 relative">
                  {/* Department 1 */}
                  <div className="flex flex-col items-center w-1/3">
                    <div className="w-px h-6 bg-brand-blue/30"></div>
                    <div className="border border-brand-gray-border bg-white rounded-lg px-4 py-3 text-center w-full max-w-[160px] shadow-sm">
                      <p className="text-brand-navy text-sm font-semibold">{t('salesDept')}</p>
                    </div>
                  </div>
                  
                  {/* Department 2 */}
                  <div className="flex flex-col items-center w-1/3">
                    <div className="w-px h-6 bg-brand-blue/30"></div>
                    <div className="border border-brand-gray-border bg-white rounded-lg px-4 py-3 text-center w-full max-w-[160px] shadow-sm">
                      <p className="text-brand-navy text-sm font-semibold">{t('techDept')}</p>
                    </div>
                  </div>
                  
                  {/* Department 3 */}
                  <div className="flex flex-col items-center w-1/3">
                    <div className="w-px h-6 bg-brand-blue/30"></div>
                    <div className="border border-brand-gray-border bg-white rounded-lg px-4 py-3 text-center w-full max-w-[160px] shadow-sm">
                      <p className="text-brand-navy text-sm font-semibold">{t('opsDept')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
