import type { Metadata } from 'next'
import { AccentBar }      from '@/components/ui/AccentBar'
import { YouTubeEmbed }   from '@/components/ui/YouTubeEmbed'
import { PROJECT_VIDEOS } from '@/lib/project-videos'
import { getFlagshipCaseStudy } from '@/lib/case-studies-data'
import Link from 'next/link'

const study  = getFlagshipCaseStudy()
const video  = PROJECT_VIDEOS.uhuruGardens

import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title:       study.seoTitle,
  description: study.seoDescription,
  alternates: { canonical: buildCanonical(`/resources/case-studies/${study.slug}`) },
  openGraph: {
    title:       study.seoTitle,
    description: study.seoDescription,
    url:         buildCanonical(`/resources/case-studies/${study.slug}`),
    images: [
      {
        url:   `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
        width:  1280,
        height: 720,
        alt:    study.fullName,
      },
    ],
  },
}

const uhuruVideoSchema = {
  '@context':   'https://schema.org',
  '@type':      'VideoObject',
  name:         video.title,
  description:  video.description,
  thumbnailUrl: `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
  uploadDate:   '2024-02-15', // Approximate
  embedUrl:     `https://www.youtube.com/embed/${video.youtubeId}`,
  publisher:    { '@id': `${SEO.siteUrl}/#organization` },
}

const uhuruCaseStudySchema = {
  '@context': 'https://schema.org',
  '@type':    'CreativeWork',
  name:       study.fullName,
  headline:   study.seoTitle,
  description: study.seoDescription,
  image:      `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
  author:     { '@id': `${SEO.siteUrl}/#organization` },
}

const uhuruBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SEO.siteUrl}/resources/case-studies` },
    { '@type': 'ListItem', position: 3, name: study.fullName, item: buildCanonical(`/resources/case-studies/${study.slug}`) },
  ],
}

export default function UhuruGardensCaseStudyPage() {
  return (
    <main>
      <StructuredData data={[uhuruVideoSchema, uhuruCaseStudySchema, uhuruBreadcrumb]} />
      <AccentBar />

      {/* ══════════════════════════════════════════════
          SECTION 1: HERO — Video background + overlay
          ══════════════════════════════════════════════ */}
      <section className="relative bg-brand-navy overflow-hidden">

        {/* Pixel grid */}
        <div
          className="absolute inset-0 pixel-grid opacity-[0.045]
            pointer-events-none"
          aria-hidden="true"
        />

        {/* Top content: tags + headline + paragraph */}
        <div className="relative z-10 px-7 pt-12 pb-6">

          {/* Tag row */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <span className="bg-[#F25C1A] text-white text-[9px]
              font-bold tracking-[0.2em] uppercase
              px-2.5 py-1 rounded-full">
              ★ Flagship project
            </span>
            <span className="bg-white/6 border border-white/12
              text-white/55 text-[9px] font-semibold
              tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
              Heritage & Culture · Kenya
            </span>
            <span className="bg-[#1635D4]/20 border border-[#1635D4]/35
              text-[#7B9AFF] text-[9px] font-semibold
              tracking-[0.12em] uppercase px-2.5 py-1 rounded-full">
              Largest LCD video walls in East Africa
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[28px] sm:text-[32px] font-semibold
            text-white leading-[1.18] max-w-[640px] mb-4">
            Uhuru Gardens Museum —{' '}
            <em className="not-italic text-[#F25C1A]">
              East Africa&apos;s most significant
            </em>{' '}
            cultural AV installation.
          </h1>

          {/* Subtext */}
          <p className="text-[14px] text-white/50 leading-[1.75]
            max-w-[580px] mb-8">
            {study.heroParagraph}
          </p>
        </div>

        {/* STATS ROW — below headline, above video */}
        <div className="flex border-t border-b border-white/6
          relative z-10">
          {study.stats.map((stat, i, arr) => (
            <div
              key={stat.label}
              className={[
                'flex-1 py-4 px-3 text-center',
                i < arr.length - 1 ? 'border-r border-white/6' : '',
              ].join(' ')}
            >
              <span className="text-[18px] font-medium text-white
                block leading-none mb-1.5">
                {stat.value}
              </span>
              <span className="text-[9px] text-white/30 uppercase
                tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* VIDEO EMBED — hero mode */}
        <div className="px-7 pt-6 pb-0 relative z-10">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase
            text-white/30 mb-3">
            Project video
          </p>
          <YouTubeEmbed
            videoId={video.youtubeId}
            title={video.title}
            mode="hero"
            className="rounded-xl overflow-hidden"
          />
        </div>

        {/* Spacer */}
        <div className="h-8" />
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2: TECHNICAL SPECIFICATIONS
          ══════════════════════════════════════════════ */}
      <section className="px-7 py-12">
        <p className="text-[10px] font-semibold tracking-[0.2em]
          uppercase text-[#1635D4] mb-2">
          Technical specifications
        </p>
        <h2 className="text-[20px] font-medium
          text-[var(--color-text-primary)] mb-8">
          System components & installation details.
        </h2>

        <div className="grid grid-cols-2 gap-3.5">
          {study.specs.map((spec) => (
            <div
              key={spec.label}
              className={[
                'bg-[var(--color-background-secondary)]',
                'border border-[var(--color-border-tertiary)]',
                'rounded-xl p-5',
                spec.isFullWidth ? 'col-span-2' : '',
              ].join(' ')}
            >
              <p className="text-[9px] font-bold tracking-[0.18em]
                uppercase text-[#F25C1A] mb-2">
                {spec.label}
              </p>
              <p className="text-[15px] font-medium
                text-[var(--color-text-primary)] mb-2">
                {spec.value}
              </p>
              <p className="text-[12px] text-[var(--color-text-secondary)]
                leading-[1.65]">
                {spec.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3: PROJECT NARRATIVE
          ══════════════════════════════════════════════ */}
      <section className="px-7 pb-12">
        <div className="grid grid-cols-3 gap-8">

          {/* Narrative: 2/3 width */}
          <div className="col-span-2 flex flex-col gap-8">

            {[
              { label: 'The challenge', body: study.challenge  },
              { label: 'Our role',      body: study.ourRole    },
              { label: 'The result',    body: study.result     },
            ].map((section) => (
              <div key={section.label}>
                <p className="text-[10px] font-semibold tracking-[0.2em]
                  uppercase text-[#1635D4] mb-3">
                  {section.label}
                </p>
                <p className="text-[14px] text-[var(--color-text-secondary)]
                  leading-[1.8]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Sidebar: 1/3 width */}
          <div className="flex flex-col gap-4">

            {/* Director quote */}
            <div className="bg-brand-navy rounded-xl p-6
              border-l-[3px] border-[#F25C1A]">
              <p className="text-[13px] text-white/75 leading-[1.7]
                italic mb-5">
                &ldquo;{study.directorQuote}&rdquo;
              </p>
              <div>
                <p className="text-[12px] font-medium text-white">
                  {study.directorName}
                </p>
                <p className="text-[10px] text-white/35 mt-0.5
                  leading-[1.5]">
                  {study.directorTitle}
                </p>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-[var(--color-background-secondary)]
              border border-[var(--color-border-tertiary)]
              rounded-xl p-5">
              <p className="text-[9px] font-bold tracking-[0.18em]
                uppercase text-[var(--color-text-secondary)] mb-4">
                Delivered with
              </p>
              <div className="flex flex-col gap-3">
                {study.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: partner.dotColor }}
                    />
                    <div>
                      <p className="text-[13px] font-medium
                        text-[var(--color-text-primary)]">
                        {partner.name}
                      </p>
                      <p className="text-[11px]
                        text-[var(--color-text-secondary)] mt-0.5">
                        {partner.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project info */}
            <div className="bg-[var(--color-background-secondary)]
              border border-[var(--color-border-tertiary)]
              rounded-xl p-5">
              <p className="text-[9px] font-bold tracking-[0.18em]
                uppercase text-[var(--color-text-secondary)] mb-4">
                Project details
              </p>
              {[
                { label: 'Client',    value: study.client        },
                { label: 'Location',  value: study.location      },
                { label: 'Value',     value: study.projectValue  },
                { label: 'Sector',    value: study.sector        },
                { label: 'Completed', value: study.completedYear },
              ].map((row) => (
                <div key={row.label}
                  className="flex justify-between py-2
                    border-b border-[var(--color-border-tertiary)]
                    last:border-b-0">
                  <span className="text-[11px]
                    text-[var(--color-text-secondary)]">
                    {row.label}
                  </span>
                  <span className="text-[11px] font-medium
                    text-[var(--color-text-primary)] text-right
                    max-w-[60%]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4: CTA BANNER
          ══════════════════════════════════════════════ */}
      <div className="mx-7 mb-12 rounded-[14px] overflow-hidden
        bg-brand-navy relative">
        <div
          className="absolute -top-16 right-20 w-56 h-56 rounded-full
            pointer-events-none"
          style={{ background: 'rgba(22,53,212,0.12)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-9 py-9
          flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-[20px] font-semibold text-white mb-2">
              Working on a similar project?
            </h2>
            <p className="text-[13px] text-white/50 leading-[1.7]
              max-w-[420px]">
              Talk to our team about large-format LED, interactive video
              walls, and transparent display technology for cultural,
              government, or commercial installations.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#F25C1A] hover:bg-[#E04E12]
                text-white text-[13px] font-semibold
                px-5 py-2.5 rounded-lg transition-all duration-150
                whitespace-nowrap text-center"
            >
              Talk to our team →
            </Link>
            <Link
              href="/resources/case-studies"
              className="border border-white/20 hover:border-white/40
                text-white/65 hover:text-white text-[13px] font-medium
                px-5 py-2.5 rounded-lg transition-all duration-150
                whitespace-nowrap text-center"
            >
              View all case studies
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 5: BACK NAVIGATION
          ══════════════════════════════════════════════ */}
      <div className="px-7 pb-8">
        <Link
          href="/resources/case-studies"
          className="text-[12px] text-[var(--color-text-secondary)]
            hover:text-[#1635D4] transition-colors duration-150
            flex items-center gap-1.5"
        >
          ← All case studies
        </Link>
      </div>
    </main>
  )
}
