import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import DarkHero from "@/components/ui/DarkHero";
import StatBar from "@/components/ui/StatBar";
import FeatureCard from "@/components/ui/FeatureCard";
import SIBanner from "@/components/ui/SIBanner";
import Image from "next/image";


import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard'
import { getAllCaseStudies } from '@/lib/case-studies-data'
import { PROJECT_VIDEOS } from '@/lib/project-videos'

import hospitalityImg from "../../../public/images/solutions/hospitality.png";
import signageImg from "../../../public/images/solutions/digital-signage.png";
import corporateImg from "../../../public/images/solutions/corporate.png";


// Moved solutions array inside the component to access translations

/* ─────────────────────────────────────────────
   Brand Ticker Imports
   ───────────────────────────────────────────── */
import { LogoWallRow } from '@/components/brands/LogoWallRow';
import { ROW_CONFIGS } from '@/lib/brands-logo-wall';

/* ===========================================
   HOME PAGE
   =========================================== */

import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Perlogy | ProAV & LED Display Distributor Kenya & Africa',
  description:
    'Perlogy Technologies — B2B ProAV & LED display distributor based in ' +
    'Nairobi, Kenya. Authorised LG & Unilumin supplier for East, West & ' +
    'Southern Africa. Exclusively through system integrators. 24hr response.',
  alternates: { canonical: buildCanonical('/') },
  openGraph: {
    title: 'Perlogy | ProAV & LED Display Distributor Kenya & Africa',
    description:
      'Perlogy Technologies — B2B ProAV & LED display distributor based in ' +
      'Nairobi, Kenya. Authorised LG & Unilumin supplier for East, West & ' +
      'Southern Africa. Exclusively through system integrators. 24hr response.',
    url: buildCanonical('/'),
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type':    'WebSite',
  '@id':      `${SEO.siteUrl}/#website`,
  name:       SEO.siteName,
  url:        SEO.siteUrl,
  description: SEO.defaultDescription,
  publisher: { '@id': `${SEO.siteUrl}/#organization` },
}

const homeBreadcrumb = {
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
  ],
}

const homeFAQSchema = {
  '@context': 'https://schema.org',
  '@type':    'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name:    'What does Perlogy Technologies distribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Perlogy distributes world-class ProAV and ICT technology across ' +
          'English-speaking Africa — including LED video walls, hotel IPTV ' +
          'systems, boardroom AV, and airport displays — through authorised ' +
          'partnerships with LG Electronics and Unilumin, plus a portfolio ' +
          'of 14 leading technology brands.',
      },
    },
    {
      '@type': 'Question',
      name:    'Does Perlogy sell directly to end users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. Perlogy operates strictly on a B2B model and distributes ' +
          'exclusively through registered system integrators (SIs), AV ' +
          'consultants, and ICT resellers. We never sell direct to end users.',
      },
    },
    {
      '@type': 'Question',
      name:    'Which countries does Perlogy serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Perlogy serves 15+ countries across East, West, and Southern ' +
          'Africa — including Kenya, Uganda, Tanzania, Nigeria, Ghana, South ' +
          'Africa, Zambia, Rwanda, Ethiopia, DRC, and Seychelles. Our ' +
          'technical support hub is based in Nairobi, Kenya.',
      },
    },
    {
      '@type': 'Question',
      name:    'How do I become a Perlogy distribution partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Registered system integrators can apply online via the Perlogy ' +
          'partner programme. We respond to all SI enquiries within 24 hours. ' +
          'Partnership application takes less than one week to process.',
      },
    },
  ],
}

import homepageHero from "../../../public/images/heroes/homepage-hero.webp";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  const allStudies   = getAllCaseStudies()
  const flagship     = allStudies.find(s => s.isFlagship)!
  const cameroon     = allStudies.find(s => s.slug === 'cameroon-lg-procentric-hospitality-iptv-project')!
  const turkana      = allStudies.find(s => s.slug === 'lake-turkana-wind-power-hospitality-project')!
  const asaba        = allStudies.find(s => s.slug === 'hilton-asaba')!
  const flagshipVid  = PROJECT_VIDEOS.uhuruGardens

  const solutions = [
    {
      image: hospitalityImg,
      title: t('solutionHospitalityTitle'),
      href: "/solutions/hospitality",
      alt: "Five-star hotel lobby with LG hospitality TV and IPTV — Kenya & Africa",
      body: t('solutionHospitalityBody'),
    },
    {
      image: signageImg,
      title: t('solutionSignageTitle'),
      href: "/solutions/digital-signage",
      alt: "Indoor LED video wall installation in African shopping mall — Unilumin display",
      body: t('solutionSignageBody'),
    },
    {
      image: corporateImg,
      title: t('solutionCorporateTitle'),
      href: "/solutions/corporate-av",
      alt: "Modern corporate boardroom with AV display system — Nairobi, Kenya",
      body: t('solutionCorporateBody'),
    },
  ] as const;

  return (
    <>
      <StructuredData data={[websiteSchema, homeBreadcrumb, homeFAQSchema]} />
      {/* ────────────────────────────────────
          1 · HERO
          ──────────────────────────────────── */}
      <DarkHero
        bgImage={homepageHero}
        tag={t('heroTag')}
        title={
          <>
            {t('heroTitle1')}
            <span className="text-brand-blue">{t('heroTitleStrong')}</span>
          </>
        }
        subtitle={t('heroSubtitle')}
      >
        <Button variant="primary" href="/partners/apply">
          {t('btnIntegrator')}
        </Button>
        <Button
          variant="outline-blue"
          href="/solutions"
          className="border-white/30 text-white hover:bg-white/10"
        >
          {t('btnExplore')}
        </Button>
      </DarkHero>

      {/* Stat grid underneath hero */}
      <div className="mx-auto max-w-4xl px-4 -mt-6">
        <StatBar
          dark
          stats={[
            { value: "15+", label: t('statCountries') },
            { value: "500+ SQM", label: t('statLED') },
            { value: "2000+", label: t('statRooms') },
            { value: "0", label: t('statDirectSales') },
          ]}
          className="bg-brand-navy-mid"
        />
      </div>

      {/* ────────────────────────────────────
          2 · BRANDS STRIP
          ──────────────────────────────────── */}
      <section className="py-16 overflow-hidden bg-brand-light-blue-bg border-y border-brand-blue/5">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
            {t('brandsTag')}
          </p>
        </div>

        {/* Constrained Ticker Container with Alpha Fade Mask */}
        <div 
          className="relative flex flex-col gap-5 overflow-hidden w-full max-w-[1400px] mx-auto opacity-90"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <LogoWallRow config={ROW_CONFIGS[0]} />
          <LogoWallRow config={ROW_CONFIGS[1]} />
        </div>
      </section>

      {/* ────────────────────────────────────
          3 · PARTNER PLEDGE
          ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 pb-20 lg:px-8">
        <SectionTag>{t('pledgeTag')}</SectionTag>

        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          {t('pledgeTitle')}
        </h2>
        <p className="mt-3 max-w-2xl text-brand-gray-muted leading-relaxed">
          {t('pledgeSubtitle')}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FeatureCard number="01" title={t('pledge1Title')}>
            {t('pledge1Body')}
          </FeatureCard>

          <FeatureCard number="02" title={t('pledge2Title')}>
            {t('pledge2Body')}
          </FeatureCard>

          <FeatureCard number="03" title={t('pledge3Title')}>
            {t('pledge3Body')}
          </FeatureCard>

          <FeatureCard number="04" title={t('pledge4Title')}>
            {t('pledge4Body')}
          </FeatureCard>
        </div>
      </section>

      {/* ────────────────────────────────────
          4 · SOLUTIONS
          ──────────────────────────────────── */}
      <section className="bg-brand-light-blue-bg py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTag>{t('solutionsTag')}</SectionTag>

          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            {t('solutionsTitle')}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group overflow-hidden rounded-xl border border-brand-gray-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Thumbnail area */}
                <div className="relative h-48 overflow-hidden bg-brand-navy">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
                    {s.body}
                  </p>
                  <span className="mt-4 inline-block text-xs font-bold text-brand-blue group-hover:underline">
                    {t('solutionLearnMore')}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          5 · CASE STUDY
          ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase
          text-[#1635D4] mb-2">
          {t('projectsTag')}
        </p>
        <h2 className="text-[22px] font-medium
          text-[var(--color-text-primary)] mb-2">
          {t('projectsTitle')}
        </h2>
        <p className="text-[14px] text-[var(--color-text-secondary)]
          leading-[1.65] max-w-[500px] mb-7">
          {t('projectsSubtitle')}
        </p>

        {/* Flagship: Uhuru Gardens — full width */}
        <div className="mb-6">
          <CaseStudyCard
            study={flagship}
            videoId={flagshipVid.youtubeId}
            featured={true}
          />
        </div>

        {/* Landmark Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudyCard study={cameroon} highlighted={true} />
          <CaseStudyCard study={turkana} />
          <CaseStudyCard study={asaba} />
        </div>
      </section>

      {/* ────────────────────────────────────
          6 · SI BANNER
          ──────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pb-20 lg:px-8">
        <SIBanner
          headline={t('siBannerHeadline')}
          subtext={t('siBannerSubtext')}
          statValue={t('siBannerStatValue')}
          statLabel={t('siBannerStatLabel')}
        >
          <Button variant="orange" href="/partners/apply">
            {t('btnApply')}
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
