import Link from 'next/link'
import { SolutionIcon } from './SolutionIcon'
import type { SolutionVertical } from '@/lib/solutions-data'

interface MiniSolutionCardProps {
  solution: SolutionVertical
  visible: boolean
}

export function MiniSolutionCard({
  solution,
  visible,
}: MiniSolutionCardProps) {
  if (!visible) return null

  return (
    <div
      className={[
        'border border-brand-gray-border rounded-xl p-5',
        'group transition-all duration-150',
        'hover:-translate-y-0.5 hover:border-[#1635D4]',
      ].join(' ')}
    >
      {/* Icon */}
      <div className="mb-3">
        <SolutionIcon
          path={solution.iconPath}
          color={solution.iconColor}
          bg={solution.iconBg}
          size="sm"
        />
      </div>

      {/* Category tag */}
      <p className="text-[9px] font-semibold tracking-[0.18em] uppercase
        text-brand-gray-muted mb-1.5">
        {solution.tagline}
      </p>

      {/* Headline */}
      <h4 className="text-[13px] font-semibold
        text-brand-navy mb-1.5">
        {solution.headline}
      </h4>

      {/* Description */}
      <p className="text-[11px] text-brand-gray-text
        leading-[1.6] mb-3">
        {solution.description}
      </p>

      {/* Link */}
      <Link
        href={solution.href}
        className={[
          'inline-flex items-center gap-1.5',
          'text-[11px] font-medium text-[#1635D4]',
        ].join(' ')}
      >
        Explore
        <span
          className="transition-transform duration-150
            group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </div>
  )
}
