import Link from 'next/link'
import { getCaseStudyBySlug } from '@/lib/case-studies-data'

interface CaseStudyPullStripProps {
  slug:         string   // which case study to show
  showVideo?:   boolean  // show video thumbnail on right
  ctaText?:     string   // override CTA text
}

export function CaseStudyPullStrip({
  slug,
  showVideo = false,
  ctaText = 'Read case study →',
}: CaseStudyPullStripProps) {
  const study = getCaseStudyBySlug(slug)
  if (!study) return null

  return (
    <div className="rounded-[14px] overflow-hidden
      border border-[var(--color-border-tertiary)]">

      {/* Dark header */}
      <div className="bg-brand-navy px-7 py-6
        flex items-center justify-between gap-6 flex-wrap">

        {/* Left */}
        <div className="flex-1 min-w-0">
          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            {study.isFlagship && (
              <span className="text-[9px] font-bold tracking-widest
                uppercase text-white bg-[#F25C1A]
                px-2.5 py-0.5 rounded-full">
                ★ Flagship project
              </span>
            )}
            <span className="text-[9px] font-semibold tracking-widest
              uppercase text-white/45 bg-white/6
              border border-white/10 px-2.5 py-0.5 rounded-full">
              {study.sector} · {study.locationShort}
            </span>
            {study.recordClaim && (
              <span className="text-[9px] font-semibold tracking-widest
                uppercase text-[#7B9AFF] bg-[#1635D4]/18
                border border-[#1635D4]/3 px-2.5 py-0.5 rounded-full">
                {study.recordClaim}
              </span>
            )}
          </div>
          <h3 className="text-[17px] font-semibold text-white
            leading-[1.3] max-w-[440px]">
            {study.cardHeadline}
          </h3>
        </div>

        {/* Right: stats */}
        <div className="flex items-center gap-0 flex-shrink-0">
          {study.stats.slice(0, 3).map((s, i, arr) => (
            <div
              key={s.label}
              className={[
                'px-5 text-center',
                i < arr.length - 1 ? 'border-r border-white/10' : '',
              ].join(' ')}
            >
              <span className="text-[20px] font-medium text-white
                block leading-none mb-1">
                {s.value}
              </span>
              <span className="text-[9px] text-white/30 uppercase
                tracking-wide block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[var(--color-background-secondary)]
        px-7 py-3.5 flex items-center justify-between gap-4">
        <p className="text-[12px] text-[var(--color-text-secondary)]">
          {study.cardBody}
        </p>
        <Link
          href={`/resources/case-studies/${study.slug}`}
          className={[
            'flex-shrink-0 text-[12px] font-medium text-[#1635D4]',
            'border border-[#1635D4]/40 rounded-lg px-3.5 py-1.5',
            'hover:bg-[#1635D4]/6 hover:border-[#1635D4]/70',
            'transition-all duration-150 whitespace-nowrap',
          ].join(' ')}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}
