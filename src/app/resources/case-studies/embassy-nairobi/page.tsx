import type { Metadata }        from 'next'
import Link                     from 'next/link'
import { AccentBar }            from '@/components/ui/AccentBar'
import { StructuredData }       from '@/components/seo/StructuredData'
import { LSKFeatureCard }       from '@/components/case-studies/LSKFeatureCard'
import { DirectorQuote }        from '@/components/case-studies/DirectorQuote'
import { SpecSidebar }          from '@/components/case-studies/SpecSidebar'
import { getCaseStudyBySlug }   from '@/lib/case-studies-data'
import { LSK_FEATURES }         from '@/lib/lsk-features'
import { buildCanonical, SEO }  from '@/lib/seo-config'

const study   = getCaseStudyBySlug('embassy-nairobi')!
const pageUrl = buildCanonical('/resources/case-studies/embassy-nairobi')

// ── METADATA ─────────────────────────────────────────────────
export const metadata: Metadata = {
  title:       study.seoTitle,
  description: study.seoDescription,
  alternates:  { canonical: pageUrl },
  openGraph: {
    title:       study.seoTitle,
    description: study.seoDescription,
    url:         pageUrl,
    type:        'article',
    images: [{
      url:    '/og/embassy-nairobi.png',
      width:  1200,
      height: 630,
      alt:    'Embassy in Nairobi — Unilumin LSK P2.9 outdoor LED display',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       study.seoTitle,
    description: study.seoDescription,
    images:      ['/og/embassy-nairobi.png'],
  },
}

// ── STRUCTURED DATA ───────────────────────────────────────────
const caseStudySchema = {
  '@context':     'https://schema.org',
  '@type':        'CreativeWork',
  '@id':          `${pageUrl}#casestudy`,
  additionalType: 'https://schema.org/Report',
  name:           study.fullName,
  headline:       study.headline,
  description:    study.heroParagraph,
  url:            pageUrl,
  datePublished:  '2025-01-01',
  dateModified:   new Date().toISOString().split('T')[0],
  image:          `${SEO.siteUrl}/og/embassy-nairobi.png`,
  author: {
    '@type': 'Person',
    '@id':   `${SEO.siteUrl}/#person-nmm`,
    name:    study.directorName,
  },
  publisher: { '@id': `${SEO.siteUrl}/#organization` },
  about: [
    { '@type': 'Place',        name: 'Nairobi, Kenya'       },
    { '@type': 'Organization', name: 'Unilumin Group'       },
    { '@type': 'Organization', name: 'Perlogy Technologies' },
  ],
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type':        'PriceSpecification',
      price:           150000,
      priceCurrency:   'USD',
      description:     'Project value: USD 150,000',
    },
  },
  keywords: [
    'Unilumin LSK P2.9', 'outdoor LED Kenya',
    'LED display Nairobi', 'curved outdoor LED Africa',
    'IP69K outdoor LED', 'Perlogy Technologies Kenya',
    'digital signage Nairobi',
  ].join(', '),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1,
      name: 'Home',         item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2,
      name: 'Case Studies', item: `${SEO.siteUrl}/resources/case-studies` },
    { '@type': 'ListItem', position: 3,
      name: study.fullName, item: pageUrl },
  ],
}

// ── IMAGE HERO PANEL ─────────────────────────────────────────
// Shows project photo if available, spec panel if not.
// Drop embassy-nairobi-01.jpg into public/images/case-studies/
// to activate the photo — no code changes needed.
function HeroImagePanel() {
  // Spec badges shown in both modes
  const specBadges = ['28 SQM', 'P2.9 · 2.9mm', 'IP69K', '3,840Hz', '82mm slim']

  return (
    <div className="relative mx-7 mb-0 overflow-hidden
      rounded-t-xl bg-brand-navy-mid
      border border-white/8 border-b-0">

      {/*
        PHOTO MODE:
        When embassy-nairobi-01.jpg is available, uncomment
        this block and remove the spec panel below.

        <img
          src="/images/case-studies/embassy-nairobi-01.jpg"
          alt="Unilumin LSK P2.9 outdoor LED display at the Embassy in Nairobi"
          className="w-full h-[300px] object-cover opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0
          px-6 py-4"
          style={{
            background:
              'linear-gradient(to top, #07102B 0%, transparent 100%)',
          }}>
          <p className="text-[11px] text-white/50">
            Unilumin LSK P2.9 · 28 SQM · Nairobi, Kenya
          </p>
        </div>
      */}

      {/* SPEC PANEL (default until photography is added) */}
      <div className="px-8 py-8
        grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6
        items-center">

        {/* Left: product identity */}
        <div>
          <p className="text-[9px] font-bold tracking-[0.2em]
            uppercase text-[#F25C1A] mb-3">
            Installed product
          </p>
          <p className="text-[20px] font-medium text-white mb-2">
            Unilumin LSK Series — P2.9
          </p>
          <p className="text-[13px] text-white/45 leading-[1.7]
            max-w-[380px]">
            Outdoor HD LED display · Ultra-slim 82mm cabinet ·
            IP69K waterproof · 3,840Hz refresh rate ·
            Kenya&apos;s first installation at this scale
          </p>
        </div>

        {/* Right: key spec badges */}
        <div className="flex flex-wrap sm:flex-col gap-2">
          {specBadges.map((badge) => (
            <div
              key={badge}
              className="bg-[#1635D4]/20 border border-[#1635D4]/35
                rounded-lg px-4 py-2 text-center min-w-[90px]"
            >
              <span className="text-[12px] font-medium
                text-white whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────
export default function EmbassyNairobiCaseStudyPage() {
  return (
    <main>
      <AccentBar />
      <StructuredData data={[caseStudySchema, breadcrumbSchema]} />

      {/* ══════════════════════════
          HERO
          ══════════════════════════ */}
      <section className="relative bg-brand-navy overflow-hidden">

        {/* Pixel grid */}
        <div
          className="absolute inset-0 pixel-grid
            opacity-[0.045] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top-right glow */}
        <div
          className="absolute -top-16 -right-16 w-72 h-72
            rounded-full pointer-events-none"
          style={{ background: 'rgba(22,53,212,0.10)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 px-7 pt-10 pb-7">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mb-6
              text-[10px] text-white/35"
          >
            <Link href="/"
              className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources/case-studies"
              className="hover:text-white/60 transition-colors">
              Case studies
            </Link>
            <span>/</span>
            <span className="text-white/55">
              Embassy in Nairobi
            </span>
          </nav>

          {/* Tags */}
          <div className="flex items-center gap-2
            flex-wrap mb-5">
            <span className="bg-[#F25C1A] text-white
              text-[9px] font-bold tracking-[0.2em] uppercase
              px-2.5 py-1 rounded-full">
              Case study
            </span>
            <span className="bg-white/6 border border-white/12
              text-white/55 text-[9px] font-semibold
              tracking-[0.15em] uppercase
              px-2.5 py-1 rounded-full">
              Digital signage · Kenya
            </span>
            <span className="bg-[#1635D4]/20 border border-[#1635D4]/35
              text-[#7B9AFF] text-[9px] font-semibold
              tracking-[0.12em] uppercase
              px-2.5 py-1 rounded-full">
              {study.recordClaim}
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[26px] sm:text-[30px]
            font-medium text-white leading-[1.18]
            max-w-[640px] mb-4">
            Embassy in Nairobi installs Kenya&apos;s first{' '}
            <em className="not-italic text-[#F25C1A]">
              ultra-slim curved outdoor LED display.
            </em>
          </h1>

          {/* Subtext */}
          <p className="text-[13px] text-white/50
            leading-[1.75] max-w-[560px]">
            {study.heroParagraph}
          </p>
        </div>

        {/* Image panel — flush to section bottom */}
        <div className="relative z-10">
          <HeroImagePanel />
        </div>
      </section>

      {/* ══════════════════════════
          STATS STRIP
          ══════════════════════════ */}
      <div className="flex items-stretch
        bg-[#0a1630] border-b border-white/6">
        {study.stats.map((stat, i, arr) => (
          <div
            key={stat.label}
            className={[
              'flex-1 flex flex-col items-center',
              'justify-center py-4 px-2 text-center',
              i < arr.length - 1
                ? 'border-r border-white/6' : '',
            ].join(' ')}
          >
            <span className="text-[17px] font-medium
              text-[#F25C1A] block leading-none mb-1.5">
              {stat.value}
            </span>
            <span className="text-[9px] text-white/30
              uppercase tracking-wide leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════
          TWO-COLUMN BODY
          ══════════════════════════ */}
      <section className="px-7 py-10">
        <div className="grid grid-cols-1
          lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* ── NARRATIVE (left) ─────── */}
          <div>

            {/* Project overview */}
            <p className="text-[10px] font-semibold
              tracking-[0.2em] uppercase
              text-[#1635D4] mb-2">
              Project overview
            </p>
            <div className="h-0.5 w-10 bg-[#F25C1A] mb-5" />
            <p className="text-[14px]
              text-[var(--color-text-secondary)]
              leading-[1.8] mb-4">
              {study.challenge}
            </p>

            <DirectorQuote
              quote={study.directorQuote}
              name={study.directorName}
              title={study.directorTitle}
            />

            {/* Our role */}
            <p className="text-[10px] font-semibold
              tracking-[0.2em] uppercase
              text-[#1635D4] mb-2 mt-8">
              Our role
            </p>
            <div className="h-0.5 w-10 bg-[#F25C1A] mb-5" />
            <p className="text-[14px]
              text-[var(--color-text-secondary)]
              leading-[1.8] mb-4">
              {study.ourRole}
            </p>

            {/* The result */}
            <p className="text-[10px] font-semibold
              tracking-[0.2em] uppercase
              text-[#1635D4] mb-2 mt-8">
              The result
            </p>
            <div className="h-0.5 w-10 bg-[#F25C1A] mb-5" />
            <p className="text-[14px]
              text-[var(--color-text-secondary)]
              leading-[1.8]">
              {study.result}
            </p>

            {/* Full-width spec cards */}
            {study.specs
              .filter(s => s.isFullWidth)
              .map(spec => (
              <div
                key={spec.label}
                className="mt-8 p-5 rounded-xl
                  bg-[var(--color-background-secondary)]
                  border border-[var(--color-border-tertiary)]"
              >
                <p className="text-[9px] font-bold
                  tracking-[0.18em] uppercase
                  text-[#F25C1A] mb-2">
                  {spec.label}
                </p>
                <p className="text-[14px] font-medium
                  text-[var(--color-text-primary)] mb-2">
                  {spec.value}
                </p>
                <p className="text-[13px]
                  text-[var(--color-text-secondary)]
                  leading-[1.65]">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>

          {/* ── SIDEBAR (right) ──────── */}
          <SpecSidebar
            study={study}
            downloadHref="/downloads/Embassy_Nairobi_LED_Case_Study_Perlogy.docx"
            downloadName="Embassy_Nairobi_LED_Case_Study_Perlogy.docx"
            relatedStudy={{
              name: 'Uhuru Gardens Museum, Nairobi',
              slug: 'uhuru-gardens-museum',
              stat: 'USD 1.4M · East Africa\'s largest LCD video wall',
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════
          LSK FEATURES
          ══════════════════════════ */}
      <section className="px-7 pb-12">
        <p className="text-[10px] font-semibold
          tracking-[0.2em] uppercase
          text-[#1635D4] mb-2">
          Unilumin LSK Series — key features
        </p>
        <h2 className="text-[20px] font-medium
          text-[var(--color-text-primary)] mb-2">
          Why the LSK Series was specified for this project.
        </h2>
        <p className="text-[13px]
          text-[var(--color-text-secondary)]
          leading-[1.65] max-w-[520px] mb-7">
          The Unilumin LSK Series is available in P2.6, P2.9,
          P3.9, P4.8, and P5.9. Key specifications that drove
          the selection for this Embassy installation:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 gap-3.5">
          {LSK_FEATURES.map(f => (
            <LSKFeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════
          CTA BANNER
          ══════════════════════════ */}
      <div className="mx-7 mb-12 rounded-[14px]
        overflow-hidden bg-brand-navy relative">
        <div
          className="absolute -top-16 right-20
            w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'rgba(22,53,212,0.12)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -right-10
            w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'rgba(242,92,26,0.06)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-9 py-9
          flex items-center justify-between
          gap-6 flex-wrap">
          <div>
            <h2 className="text-[20px] font-medium
              text-white mb-2">
              Have an LED or ProAV requirement in Kenya?
            </h2>
            <p className="text-[13px] text-white/50
              leading-[1.7] max-w-[420px]">
              Perlogy supplies Unilumin LED and 12 other
              world-class ProAV brands exclusively through
              registered SI partners across English-speaking
              East, West, and Southern Africa.
              Response within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3
            flex-shrink-0 relative z-10">
            <Link
              href="/contact?interest=unilumin-lsk"
              className="bg-[#F25C1A] hover:bg-[#E04E12]
                active:scale-[0.98] text-white text-[13px]
                font-medium px-5 py-2.5 rounded-lg
                transition-all duration-150
                whitespace-nowrap text-center"
            >
              Talk to our team →
            </Link>
            <Link
              href="/partners/apply"
              className="border border-white/20
                hover:border-white/40
                text-white/65 hover:text-white
                text-[13px] font-medium
                px-5 py-2.5 rounded-lg
                transition-all duration-150
                whitespace-nowrap text-center"
            >
              Become a partner
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════
          BACK NAVIGATION
          ══════════════════════════ */}
      <div className="px-7 pb-8">
        <Link
          href="/resources/case-studies"
          className="text-[12px]
            text-[var(--color-text-secondary)]
            hover:text-[#1635D4]
            transition-colors duration-150
            flex items-center gap-1.5"
        >
          ← All case studies
        </Link>
      </div>
    </main>
  )
}
