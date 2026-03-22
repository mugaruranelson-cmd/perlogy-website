import type { Metadata } from 'next'
import { AccentBar }      from '@/components/ui/AccentBar'
import { getCaseStudyBySlug } from '@/lib/case-studies-data'
import Link from 'next/link'
import Image from 'next/image'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

// Images (using existing placeholders or fallback)
import hotelLobbyImg from "../../../../../../public/images/case-studies/hotel-lobby.webp";

export async function generateMetadata(): Promise<Metadata> {
  const study = getCaseStudyBySlug('hilton-asaba')
  if (!study) return {}

  return {
    title:       study.seoTitle,
    description: study.seoDescription,
    alternates: { canonical: buildCanonical(`/resources/case-studies/${study.slug}`) },
    openGraph: {
      title:       study.seoTitle,
      description: study.seoDescription,
      url:         buildCanonical(`/resources/case-studies/${study.slug}`),
    },
  }
}

export default function HiltonAsabaCaseStudyPage() {
  const study = getCaseStudyBySlug('hilton-asaba')
  if (!study) return null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SEO.siteUrl}/resources/case-studies` },
      { '@type': 'ListItem', position: 3, name: study.fullName, item: buildCanonical(`/resources/case-studies/${study.slug}`) },
    ],
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type':    'CreativeWork',
    name:       study.fullName,
    headline:   study.seoTitle,
    description: study.seoDescription,
    author:     { '@id': `${SEO.siteUrl}/#organization` },
  }

  return (
    <main>
      <StructuredData data={[breadcrumbSchema, caseStudySchema]} />
      <AccentBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-navy px-7 py-20 text-white lg:py-32">
        <Image 
          src={hotelLobbyImg} 
          alt="DoubleTree by Hilton Asaba - Luxury Hotel Lobby" 
          fill 
          priority 
          className="object-cover opacity-30 pointer-events-none" 
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <span className="bg-[#1635D4]/20 border border-[#1635D4]/35 text-[#7B9AFF] text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full">
              Hospitality · Nigeria
            </span>
            <span className="bg-white/6 border border-white/12 text-white/55 text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
              LG Pro:Centric
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl mb-6">
            {study.headline}
          </h1>
          <p className="max-w-2xl text-lg text-white/50 leading-relaxed">
            {study.heroParagraph}
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <div className="flex border-t border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)]">
        {study.stats.map((stat, i, arr) => (
          <div
            key={stat.label}
            className={[
              'flex-1 py-6 px-4 text-center',
              i < arr.length - 1 ? 'border-r border-[var(--color-border-tertiary)]' : '',
            ].join(' ')}
          >
            <span className="text-2xl font-semibold text-[var(--color-text-primary)] block mb-1">
              {stat.value}
            </span>
            <span className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <section className="px-7 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1635D4] mb-4">
                The Challenge
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1635D4] mb-4">
                Our Role
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {study.ourRole}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1635D4] mb-4">
                The Result
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {study.result}
              </p>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            {/* Quote */}
            <div className="bg-brand-navy rounded-2xl p-8 border-l-4 border-[#F25C1A] text-white">
              <p className="text-lg italic mb-6 leading-relaxed opacity-90">
                &ldquo;{study.directorQuote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-lg">{study.directorName}</p>
                <p className="text-sm opacity-50">{study.directorTitle}</p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] rounded-2xl p-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-6">
                Technical Specifications
              </p>
              <div className="space-y-6">
                {study.specs.map(spec => (
                  <div key={spec.label}>
                    <p className="text-[11px] font-bold text-[#F25C1A] uppercase tracking-wider mb-1">{spec.label}</p>
                    <p className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{spec.value}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] rounded-2xl p-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-6">
                Technology Partners
              </p>
              <div className="space-y-4">
                {study.partners.map(partner => (
                  <div key={partner.name} className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: partner.dotColor }} />
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">{partner.name}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{partner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="px-7 pb-16 text-center">
        <Link 
          href="/resources/case-studies" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1635D4] hover:gap-3 transition-all"
        >
          ← Back to all case studies
        </Link>
      </div>
    </main>
  )
}
