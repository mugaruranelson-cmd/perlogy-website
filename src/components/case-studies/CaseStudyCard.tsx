import Link from 'next/link'
import { getYouTubeThumbnail } from '@/lib/project-videos'
import type { CaseStudy } from '@/lib/case-studies-data'

interface CaseStudyCardProps {
  study:     CaseStudy
  videoId?:  string
  featured?: boolean  // flagship treatment
}

export function CaseStudyCard({
  study,
  videoId,
  featured = false,
}: CaseStudyCardProps) {
  const thumbnail = videoId
    ? getYouTubeThumbnail(videoId, 'hq')
    : null

  if (featured) {
    // Full-width flagship card
    return (
      <Link
        href={`/resources/case-studies/${study.slug}`}
        className={[
          'block rounded-[14px] overflow-hidden',
          'border border-[#1635D4]/40',
          'group transition-all duration-200',
          'hover:border-[#1635D4]',
          'hover:-translate-y-0.5',
        ].join(' ')}
      >
        {/* Dark header */}
        <div className="bg-brand-navy px-7 py-6 relative overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-40 h-40
              rounded-full pointer-events-none"
            style={{ background: 'rgba(22,53,212,0.12)' }}
            aria-hidden="true"
          />

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-[9px] font-bold tracking-[0.18em]
              uppercase text-white bg-[#F25C1A] px-2.5 py-1 rounded-full">
              ★ Flagship project
            </span>
            <span className="text-[9px] font-semibold tracking-[0.15em]
              uppercase text-white/50 bg-white/6 border border-white/12
              px-2.5 py-1 rounded-full">
              {study.sector} · {study.locationShort}
            </span>
            {study.recordClaim && (
              <span className="text-[9px] font-semibold tracking-[0.12em]
                uppercase text-[#7B9AFF] bg-[#1635D4]/20
                border border-[#1635D4]/35 px-2.5 py-1 rounded-full">
                {study.recordClaim}
              </span>
            )}
          </div>

          {/* Headline */}
          <h3 className="text-[20px] font-semibold text-white
            leading-[1.3] max-w-[520px] mb-2">
            {study.cardHeadline}
          </h3>
          <p className="text-[13px] text-white/50 leading-[1.65]
            max-w-[480px]">
            {study.cardBody}
          </p>
        </div>

        {/* Stats row */}
        <div className="flex border-t border-white/6 bg-[#0a1630]">
          {study.stats.slice(0, 4).map((stat, i, arr) => (
            <div
              key={stat.label}
              className={[
                'flex-1 py-3.5 px-4 text-center',
                i < arr.length - 1 ? 'border-r border-white/6' : '',
              ].join(' ')}
            >
              <span className="text-[17px] font-medium text-white
                block leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-[9px] text-white/30 uppercase
                tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="flex items-center justify-between px-7 py-3.5
          bg-[var(--color-background-secondary)]
          border-t border-[var(--color-border-tertiary)]">
          <p className="text-[12px] text-[var(--color-text-secondary)]">
            {study.location} · {study.completedYear}
          </p>
          <span className="text-[12px] font-medium text-[#1635D4]
            group-hover:translate-x-0.5 transition-transform duration-150">
            Read case study →
          </span>
        </div>
      </Link>
    )
  }

  // Standard card
  return (
    <Link
      href={`/resources/case-studies/${study.slug}`}
      className={[
        'block rounded-xl overflow-hidden',
        'border border-[var(--color-border-tertiary)]',
        'group transition-all duration-200',
        'hover:border-[#1635D4] hover:-translate-y-0.5',
      ].join(' ')}
    >
      {/* Thumbnail if available */}
      {thumbnail && (
        <div className="relative overflow-hidden h-36 bg-brand-navy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t
            from-brand-navy/80 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <span className="text-[9px] font-bold tracking-widest
              uppercase text-[#F25C1A]">
              {study.sector}
            </span>
          </div>
        </div>
      )}

      <div className="p-5">
        <h3 className="text-[14px] font-semibold
          text-[var(--color-text-primary)] mb-2 leading-[1.35]">
          {study.cardHeadline}
        </h3>
        <p className="text-[12px] text-[var(--color-text-secondary)]
          leading-[1.6] mb-4">
          {study.cardBody}
        </p>

        {/* Stats */}
        <div className="flex gap-4">
          {study.stats.slice(0, 3).map((s) => (
            <div key={s.label}>
              <span className="text-[13px] font-medium
                text-[#1635D4] block">
                {s.value}
              </span>
              <span className="text-[10px]
                text-[var(--color-text-secondary)]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-3 border-t
        border-[var(--color-border-tertiary)]
        flex items-center justify-between">
        <span className="text-[11px]
          text-[var(--color-text-secondary)]">
          {study.location}
        </span>
        <span className="text-[11px] font-medium text-[#1635D4]
          group-hover:translate-x-0.5 transition-transform duration-150">
          Read →
        </span>
      </div>
    </Link>
  )
}
