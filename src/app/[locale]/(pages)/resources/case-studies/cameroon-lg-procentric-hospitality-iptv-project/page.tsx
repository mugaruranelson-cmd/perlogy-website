import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AccentBar } from '@/components/ui/AccentBar'
import { StructuredData } from '@/components/seo/StructuredData'
import { getCaseStudyBySlug } from '@/lib/case-studies-data'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { 
  Building2, 
  MapPin, 
  Tv, 
  Users, 
  Laptop, 
  Server,
  ShieldCheck, 
  ArrowRight,
  Cpu,
  Globe,
  Settings,
  HelpCircle,
  CheckCircle2
} from 'lucide-react'

const study = getCaseStudyBySlug('cameroon-lg-procentric-hospitality-iptv-project')!
const pageUrl = buildCanonical('/resources/case-studies/cameroon-lg-procentric-hospitality-iptv-project')

import { getTranslations } from 'next-intl/server'

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  const tData = await getTranslations({ locale, namespace: 'CaseStudyData' });
  const localizedStudy = tData.raw(study.slug) as any;

  return {
    title: localizedStudy.seoTitle,
    description: localizedStudy.seoDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: localizedStudy.seoTitle,
      description: localizedStudy.seoDescription,
      url: pageUrl,
      type: 'article',
      images: [{
        url: '/images/case-studies/cameroon-iptv-hero.png',
        width: 1200,
        height: 630,
        alt: localizedStudy.fullName,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: localizedStudy.seoTitle,
      description: localizedStudy.seoDescription,
      images: ['/images/case-studies/cameroon-iptv-hero.png'],
    },
  }
}

import { useTranslations } from 'next-intl'

export default function CameroonIPTVCaseStudyPage() {
  const tData = useTranslations('CaseStudyData');
  const localizedStudy = tData.raw(study.slug) as any;

  // ── STRUCTURED DATA ───────────────────────────────────────────
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#casestudy`,
    additionalType: 'https://schema.org/Report',
    name: localizedStudy.fullName,
    headline: localizedStudy.headline,
    description: localizedStudy.heroParagraph,
    url: pageUrl,
    datePublished: '2026-05-20',
    dateModified: new Date().toISOString().split('T')[0],
    image: `${SEO.siteUrl}/images/case-studies/cameroon-iptv-hero.png`,
    author: {
      '@type': 'Person',
      '@id': `${SEO.siteUrl}/#person-nmm`,
      name: localizedStudy.directorName,
    },
    publisher: { '@id': `${SEO.siteUrl}/#organization` },
    about: [
      { '@type': 'Place', name: 'Yaoundé, Cameroon' },
      { '@type': 'Organization', name: 'ROOT IT' },
      { '@type': 'Organization', name: 'LG Electronics Gulf' },
      { '@type': 'Organization', name: 'Perlogy Technologies' },
    ],
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: 'Project value: Confidential',
      },
    },
    keywords: [
      'LG Pro:Centric Africa',
      'Hospitality IPTV solutions Africa',
      'LG hospitality solutions Cameroon',
      'IPTV hotel systems Africa',
      'LG STB-6500 deployment',
      'Hotel IPTV integration',
      'Commercial hospitality displays',
      'Hospitality technology Africa',
      'Perlogy Technologies',
      'LG hospitality integration partner',
      'Interactive hotel TV systems',
      'Hospitality AV integration Africa'
    ].join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SEO.siteUrl}/resources/case-studies` },
      { '@type': 'ListItem', position: 3, name: localizedStudy.fullName, item: pageUrl },
    ],
  }

  return (
    <main className="min-h-screen bg-[var(--color-background-primary)] text-[var(--color-text-primary)]">
      <AccentBar />
      <StructuredData data={[caseStudySchema, breadcrumbSchema]} />

      {/* ══════════════════════════
          1. HERO SECTION
          ══════════════════════════ */}
      <section className="relative bg-brand-navy text-white overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/cameroon-iptv-hero.png"
            alt="Cameroon Hospitality IPTV Transformation with LG Pro:Centric"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
          <div className="absolute inset-0 pixel-grid opacity-[0.035] pointer-events-none" />
        </div>

        <div className="relative z-10 px-7 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-8 text-[11px] text-white/45">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources/case-studies" className="hover:text-white/70 transition-colors">
              Case studies
            </Link>
            <span>/</span>
            <span className="text-white/60 truncate max-w-[200px] sm:max-w-none">
              {localizedStudy.fullName}
            </span>
          </nav>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <span className="bg-brand-orange text-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
              {localizedStudy.ui.caseStudy}
            </span>
            <span className="bg-white/6 border border-white/12 text-white/65 text-[9px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
              {localizedStudy.sector}
            </span>
            <span className="bg-brand-blue/30 border border-brand-blue/40 text-[#7B9AFF] text-[9px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
              {localizedStudy.recordClaim}
            </span>
          </div>

          {/* Title & Subhead */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] max-w-[780px] mb-6">
            {localizedStudy.headline}
          </h1>
          <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-[700px] mb-8">
            {localizedStudy.heroParagraph}
          </p>

          {/* Hero CTA Button */}
          <a
            href="#overview"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white text-[13px] font-medium tracking-wide uppercase px-6 py-3 rounded-lg transition-all duration-200"
          >
            {localizedStudy.ui.exploreProject}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ══════════════════════════
          2. PROJECT OVERVIEW SECTION
          ══════════════════════════ */}
      <section id="overview" className="scroll-mt-20 px-7 py-16 bg-[var(--color-background-secondary)] border-b border-[var(--color-border-tertiary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue mb-2">
              Key Parameters
            </p>
            <h2 className="text-2xl font-medium text-[var(--color-text-primary)]">
              Deployment Parameters
            </h2>
            <div className="h-0.5 w-12 bg-brand-orange mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Location
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Yaoundé, Cameroon
              </p>
            </div>

            {/* Industry */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Industry
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Hospitality / Luxury Hotels
              </p>
            </div>

            {/* Deployment Size */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Deployment Size
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                170 Hotel Screens Supported
              </p>
            </div>

            {/* IPTV Platform */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                IPTV Platform
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                LG Pro:Centric IPTV System
              </p>
            </div>

            {/* Commercial Hardware */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Commercial Hardware
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                LG STB-6500 Set-Top Boxes
              </p>
            </div>

            {/* Original Screens */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Original Screens
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                LG NanoCell Domestic TVs
              </p>
            </div>

            {/* Integration Partner */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Integration Partner
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                ROOT IT Cameroon
              </p>
            </div>

            {/* Technology Support */}
            <div className="p-6 bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] rounded-xl transition-all duration-200 hover:border-brand-blue/30">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold tracking-wider text-[var(--color-text-secondary)] uppercase mb-1">
                Technology Support
              </h3>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Perlogy Technologies LLC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          STATS STRIP
          ══════════════════════════ */}
      <div className="flex flex-wrap items-stretch bg-brand-navy border-b border-white/6 text-white text-center">
        {localizedStudy.stats.map((stat: any, i: number, arr: any[]) => (
          <div
            key={stat.label}
            className={[
              'flex-1 min-w-[150px] flex flex-col items-center justify-center py-6 px-4',
              i < arr.length - 1 ? 'border-r border-white/6' : '',
            ].join(' ')}
          >
            <span className="text-3xl font-semibold text-brand-orange block mb-1">
              {stat.value}
            </span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════
          3. THE CHALLENGE SECTION
          ══════════════════════════ */}
      <section className="px-7 py-16 lg:py-24 max-w-7xl mx-auto border-b border-[var(--color-border-tertiary)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue mb-2">
              {localizedStudy.ui.theChallenge}
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
              {localizedStudy.ui.challengeTitle || "Upgrading Domestic Deployments to Enterprise Specs"}
            </h2>
            <div className="h-0.5 w-12 bg-brand-orange mb-6" />
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {localizedStudy.challenge}
            </p>
            <ul className="space-y-3.5 text-sm text-[var(--color-text-secondary)]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Overcoming core limitations of domestic LG NanoCell screens which lack hospitality firmwares.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Managing complex remote network architecture setup and server restoration tasks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Synchronizing licensing parameters across Cameroon, Kenya, and Dubai Electronics Gulf divisions.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[var(--color-border-tertiary)] bg-brand-navy">
            <Image
              src="/images/case-studies/cameroon-iptv-challenge.png"
              alt="Perlogy Technologies AV Engineers Planning Cameroon Hotel IPTV Layouts"
              fill
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          4. THE SOLUTION SECTION
          ══════════════════════════ */}
      <section className="px-7 py-16 lg:py-24 bg-[var(--color-background-secondary)] border-b border-[var(--color-border-tertiary)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[var(--color-border-tertiary)] bg-brand-navy">
            <Image
              src="/images/case-studies/cameroon-iptv-solution.png"
              alt="LG STB-6500 set top box and IPTV server installations by Perlogy"
              fill
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue mb-2">
              {localizedStudy.ui.theSolution}
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
              {localizedStudy.ui.solutionTitle || "LG Pro:Centric IPTV Platform & LG STB-6500 Integration"}
            </h2>
            <div className="h-0.5 w-12 bg-brand-orange mb-6" />
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {localizedStudy.ourRole}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--color-background-primary)] rounded-lg border border-[var(--color-border-tertiary)]">
                <span className="text-xs font-bold text-brand-orange uppercase block mb-1">
                  LG STB-6500 set-top boxes
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Standalone commercial processors connected via HDMI to convert domestic LG NanoCell screens.
                </p>
              </div>
              <div className="p-4 bg-[var(--color-background-primary)] rounded-lg border border-[var(--color-border-tertiary)]">
                <span className="text-xs font-bold text-brand-orange uppercase block mb-1">
                  LG Pro:Centric platform
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Central hospitality server rendering localized guest services, dining menus, and movie guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          5. REMOTE SUPPORT SECTION
          ══════════════════════════ */}
      <section className="px-7 py-16 lg:py-24 max-w-7xl mx-auto border-b border-[var(--color-border-tertiary)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue mb-2">
              Remote Support
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
              Cross-Border Engineering Excellence
            </h2>
            <div className="h-0.5 w-12 bg-brand-orange mb-6" />
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Through dedicated remote desktop sessions, video conferences, and real-time network console access, Perlogy Technologies provided ROOT IT on-the-ground engineers with direct support. We successfully managed database setups, reset central management systems, resolved local broadcast loops, and coordinated with the regional LG Dubai division to activate active node licenses remotely.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-orange" />
                <span className="text-xs font-bold text-[var(--color-text-primary)] uppercase">
                  Multi-Country Support
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-brand-orange" />
                <span className="text-xs font-bold text-[var(--color-text-primary)] uppercase">
                  Server Reset & Recovery
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[var(--color-border-tertiary)] bg-brand-navy">
            <Image
              src="/images/case-studies/cameroon-iptv-remote-support.png"
              alt="Perlogy remote engineers monitors server status and IPTV layouts"
              fill
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          6. RESULTS & IMPACT SECTION
          ══════════════════════════ */}
      <section className="px-7 py-16 lg:py-24 bg-[var(--color-background-secondary)] border-b border-[var(--color-border-tertiary)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[var(--color-border-tertiary)] bg-brand-navy">
            <Image
              src="/images/case-studies/cameroon-iptv-results.png"
              alt="Guests navigating LG Pro:Centric hotel IPTV welcome interface in Cameroon"
              fill
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue mb-2">
              {localizedStudy.ui.theResult}
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
              {localizedStudy.ui.resultTitle || "Enhanced Guest Interactivity & Admin Efficiencies"}
            </h2>
            <div className="h-0.5 w-12 bg-brand-orange mb-6" />
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {localizedStudy.result}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-2 border-brand-orange pl-4 py-1">
                <span className="text-lg font-semibold text-[var(--color-text-primary)] block">
                  170 Active TV Nodes
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Configured and fully managed centrally.
                </p>
              </div>
              <div className="border-l-2 border-brand-orange pl-4 py-1">
                <span className="text-lg font-semibold text-[var(--color-text-primary)] block">
                  100% Interactivity
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Including guest room services and custom welcome screens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          7. TECHNOLOGY PARTNERSHIP SECTION
          ══════════════════════════ */}
      <section className="px-7 py-16 lg:py-24 max-w-7xl mx-auto border-b border-[var(--color-border-tertiary)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-blue mb-2">
              {localizedStudy.ui.technologyPartners}
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
              Strategic Ecosystem Across Africa
            </h2>
            <div className="h-0.5 w-12 bg-brand-orange mb-6" />
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
              This successful transformation shows the strength of Perlogy Technologies\' partner ecosystem. By combining ROOT IT\'s local installation team on the ground, LG Electronics Gulf\'s official licensing infrastructure in Dubai, and Perlogy\'s advanced systems architecture design, we deliver high-touch ProAV solutions anywhere in Africa.
            </p>
            <div className="p-6 bg-brand-navy rounded-xl border-l-[3px] border-brand-orange text-white">
              <p className="text-sm italic opacity-80 mb-4 leading-relaxed">
                &ldquo;{localizedStudy.directorQuote}&rdquo;
              </p>
              <div>
                <p className="text-xs font-semibold">{localizedStudy.directorName}</p>
                <p className="text-[10px] text-white/45 mt-0.5">{localizedStudy.directorTitle}</p>
              </div>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-[var(--color-border-tertiary)] bg-brand-navy">
            <Image
              src="/images/case-studies/cameroon-iptv-partnership.png"
              alt="Perlogy and ROOT IT AV integration partner collaboration meeting"
              fill
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          8. CALL TO ACTION SECTION
          ══════════════════════════ */}
      <section className="px-7 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-brand-blue/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-brand-orange/5 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-brand-orange mb-3">
              Hospitality Solutions
            </p>
            <h2 className="text-2xl sm:text-3xl font-medium mb-4">
              Building the Future of Hospitality Technology Across Africa
            </h2>
            <p className="text-sm text-white/55 leading-relaxed mb-8 max-w-xl">
              Partner with Perlogy Technologies for advanced hospitality IPTV, commercial display, and LG Pro:Centric deployment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://perlogy.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-brand-orange-light text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-colors text-center w-full sm:w-auto"
              >
                Inquire via Perlogy.co.ke
              </a>
              <Link
                href="/contact"
                className="border border-white/25 hover:border-white/50 text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-colors text-center w-full sm:w-auto"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          BACK NAVIGATION
          ══════════════════════════ */}
      <div className="px-7 pb-12 text-center max-w-7xl mx-auto">
        <Link
          href="/resources/case-studies"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blue-dark transition-colors"
        >
          {localizedStudy.ui.backToAll}
        </Link>
      </div>
    </main>
  )
}
