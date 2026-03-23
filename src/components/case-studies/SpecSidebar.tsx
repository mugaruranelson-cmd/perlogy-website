import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies-data'

interface RelatedStudy {
  name: string
  slug: string
  stat: string
}

interface SpecSidebarProps {
  study:        CaseStudy
  downloadHref: string
  downloadName: string
  relatedStudy?: RelatedStudy
}

export function SpecSidebar({
  study,
  downloadHref,
  downloadName,
  relatedStudy,
}: SpecSidebarProps) {

  // Specs shown in sidebar (not full-width ones)
  const sidebarSpecs = study.specs.filter(s => !s.isFullWidth)

  return (
    <aside className="flex flex-col gap-4 lg:sticky lg:top-6">

      {/* ── SPEC TABLE ── */}
      <div className="border border-[var(--color-border-tertiary)]
        rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b
          border-[var(--color-border-tertiary)]
          bg-[var(--color-background-secondary)]">
          <p className="text-[9px] font-bold tracking-[0.2em]
            uppercase text-[#1635D4]">
            Project specifications
          </p>
        </div>
        {sidebarSpecs.map((spec, i) => (
          <div
            key={spec.label}
            className={[
              'flex justify-between items-start',
              'px-4 py-2.5 gap-3',
              'border-b border-[var(--color-border-tertiary)]',
              'last:border-b-0',
              i % 2 === 0
                ? 'bg-[var(--color-background-secondary)]'
                : 'bg-[var(--color-background-primary)]',
            ].join(' ')}
          >
            <span className="text-[11px]
              text-[var(--color-text-secondary)] flex-shrink-0">
              {spec.label}
            </span>
            <span className="text-[11px] font-medium
              text-[var(--color-text-primary)] text-right max-w-[55%]">
              {spec.value}
            </span>
          </div>
        ))}
        {/* Status — always last row */}
        <div className="flex justify-between items-center
          px-4 py-2.5
          bg-[var(--color-background-secondary)]">
          <span className="text-[11px]
            text-[var(--color-text-secondary)]">
            Status
          </span>
          <span className="text-[11px] font-medium text-[#059669]">
            Successfully installed
          </span>
        </div>
      </div>

      {/* ── DOWNLOAD ── */}
      <div className="border border-[#1635D4]/30 rounded-xl p-4
        bg-[#1635D4]/[0.04]">
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase
          text-[#1635D4] mb-3">
          Project documentation
        </p>
        <a
          href={downloadHref}
          download={downloadName}
          className={[
            'flex items-center gap-2.5 w-full',
            'bg-[#1635D4] hover:bg-[#2244E8] active:scale-[0.98]',
            'text-white text-[12px] font-medium',
            'px-4 py-2.5 rounded-lg mb-2',
            'transition-all duration-150',
          ].join(' ')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14"
            fill="none" stroke="white" strokeWidth="1.5"
            strokeLinecap="round" aria-hidden="true">
            <path d="M7 1v8M4 6l3 3 3-3M1 11v1a1 1 0 001 1h10a1 1 0 001-1v-1"/>
          </svg>
          Download case study (DOCX)
        </a>
        <Link
          href="/contact?project=embassy-nairobi&interest=unilumin-lsk"
          className={[
            'flex items-center gap-2.5 w-full',
            'border border-[#1635D4]/40',
            'text-[#1635D4] text-[12px] font-medium',
            'px-4 py-2.5 rounded-lg',
            'hover:bg-[#1635D4]/6 hover:border-[#1635D4]/70',
            'transition-all duration-150',
          ].join(' ')}
        >
          <svg width="14" height="14" viewBox="0 0 14 14"
            fill="none" stroke="#1635D4" strokeWidth="1.5"
            strokeLinecap="round" aria-hidden="true">
            <path d="M1 1h12v9H8L5 13v-3H1z"/>
          </svg>
          Enquire about this product
        </Link>
      </div>

      {/* ── RELATED CASE STUDY ── */}
      {relatedStudy && (
        <div className="border border-[var(--color-border-tertiary)]
          rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b
            border-[var(--color-border-tertiary)]
            bg-[var(--color-background-secondary)]">
            <p className="text-[9px] font-bold tracking-[0.2em]
              uppercase text-[var(--color-text-secondary)]">
              Related case study
            </p>
          </div>
          <Link
            href={`/resources/case-studies/${relatedStudy.slug}`}
            className="flex items-start gap-3 p-4
              hover:bg-[var(--color-background-secondary)]
              transition-colors duration-150 group"
          >
            <div className="w-11 h-8 rounded-md bg-brand-navy
              flex-shrink-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12"
                fill="none" aria-hidden="true">
                <path d="M3 1.5l7 4.5-7 4.5V1.5z" fill="#7B9AFF"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium
                text-[var(--color-text-primary)] mb-1
                leading-tight">
                {relatedStudy.name}
              </p>
              <p className="text-[10px]
                text-[var(--color-text-secondary)] mb-1.5">
                {relatedStudy.stat}
              </p>
              <span className="text-[10px] text-[#1635D4]
                font-medium group-hover:underline">
                View case study →
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* ── PARTNERS ── */}
      <div className="border border-[var(--color-border-tertiary)]
        rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b
          border-[var(--color-border-tertiary)]
          bg-[var(--color-background-secondary)]">
          <p className="text-[9px] font-bold tracking-[0.2em]
            uppercase text-[var(--color-text-secondary)]">
            Project partners
          </p>
        </div>
        {study.partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-start gap-3 px-4 py-3
              border-b border-[var(--color-border-tertiary)]
              last:border-b-0"
          >
            <div
              className="w-1.5 h-1.5 rounded-full mt-1.5
                flex-shrink-0"
              style={{ background: partner.dotColor }}
            />
            <div>
              <p className="text-[12px] font-medium
                text-[var(--color-text-primary)]">
                {partner.name}
              </p>
              <p className="text-[10px]
                text-[var(--color-text-secondary)] mt-0.5">
                {partner.role}
              </p>
            </div>
          </div>
        ))}
      </div>

    </aside>
  )
}
