import Link from 'next/link'
import { SolutionIcon } from './SolutionIcon'
import type { SolutionVertical } from '@/lib/solutions-data'

interface StandardSolutionCardProps {
  solution: SolutionVertical
  visible: boolean
}

export function StandardSolutionCard({
  solution,
  visible,
}: StandardSolutionCardProps) {
  if (!visible) return null

  return (
    <div
      className={[
        'border border-brand-gray-border rounded-xl overflow-hidden',
        'group transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-[#1635D4]',
      ].join(' ')}
    >
      {/* Top content */}
      <div className="p-5 pb-4">

        {/* Category tag */}
        <p className="text-[9px] font-semibold tracking-[0.18em] uppercase
          text-brand-gray-muted mb-3">
          {solution.tagline}
        </p>

        {/* Icon */}
        <div className="mb-3.5">
          <SolutionIcon
            path={solution.iconPath}
            color={solution.iconColor}
            bg={solution.iconBg}
            size="md"
          />
        </div>

        {/* Headline */}
        <h3 className="text-[16px] font-semibold
          text-brand-navy mb-2">
          {solution.headline}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-brand-gray-text
          leading-[1.65] mb-4">
          {solution.description}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-brand-gray-border" />

      {/* Bottom row: brand tags + arrow */}
      <div className="px-5 py-3 flex items-center
        justify-between gap-2">

        {/* Brand tags — show first 4 only */}
        <div className="flex flex-wrap gap-1.5">
          {solution.products?.slice(0, 4).map((p) => (
            <span
              key={p.name}
              className={[
                'text-[10px] px-2 py-0.5 rounded-full',
                'border border-brand-gray-border',
                'text-brand-gray-text',
                'bg-gray-50',
                p.isAuthorised
                  ? '!border-[#F25C1A]/30 !text-[#F25C1A] !bg-[#F25C1A]/6'
                  : '',
              ].join(' ')}
            >
              {p.isAuthorised ? '★ ' : ''}{p.name}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <Link
          href={solution.href}
          className={[
            'text-[13px] font-medium text-[#1635D4]',
            'flex-shrink-0 transition-transform duration-150',
            'group-hover:translate-x-0.5',
          ].join(' ')}
          aria-label={`Explore ${solution.headline} solutions`}
        >
          →
        </Link>
      </div>
    </div>
  )
}
