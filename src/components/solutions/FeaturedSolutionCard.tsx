import Link from 'next/link'
import { SolutionIcon } from './SolutionIcon'
import type { SolutionVertical } from '@/lib/solutions-data'

interface FeaturedSolutionCardProps {
  solution: SolutionVertical
  visible: boolean
}

export function FeaturedSolutionCard({
  solution,
  visible,
}: FeaturedSolutionCardProps) {
  if (!visible) return null

  return (
    <div
      className={[
        // Grid: spans both columns
        'col-span-2',
        // Layout: side by side
        'grid grid-cols-1 md:grid-cols-2',
        // Visual
        'border border-[#1635D4]/60 rounded-[14px] overflow-hidden',
        // Hover
        'group transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-[#1635D4]',
        'hover:shadow-[0_0_0_1px_#1635D4]',
      ].join(' ')}
    >
      {/* ── LEFT: dark navy copy panel ── */}
      <div className="relative bg-brand-navy p-8 overflow-hidden">

        {/* Decorative corner glow */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40
            rounded-full pointer-events-none"
          style={{ background: 'rgba(22,53,212,0.14)' }}
          aria-hidden="true"
        />

        {/* Vertical tag */}
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase
          text-[#F25C1A] mb-4 relative z-10">
          {solution.tagline}
        </p>

        {/* Icon */}
        <div className="mb-4 relative z-10">
          <SolutionIcon
            path={solution.iconPath}
            color={solution.iconColor}
            bg={solution.iconBg}
            size="lg"
          />
        </div>

        {/* Headline */}
        <h3 className="text-[22px] font-semibold text-white
          mb-3 relative z-10">
          {solution.headline}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-white/50 leading-[1.7]
          mb-6 max-w-[340px] relative z-10">
          {solution.description}
        </p>

        {/* CTA */}
        <Link
          href={solution.href}
          className={[
            'inline-flex items-center gap-2 relative z-10',
            'text-[12px] font-semibold text-[#1635D4]',
            'bg-[#1635D4]/12 border border-[#1635D4]/30',
            'rounded-lg px-3.5 py-1.5',
            'transition-all duration-150',
            'hover:bg-[#1635D4]/20 hover:border-[#1635D4]/60',
          ].join(' ')}
        >
          Explore {solution.headline}
          <span
            className="transition-transform duration-150
              group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      {/* ── RIGHT: navy-mid product list panel ── */}
      <div className="bg-brand-navy-mid p-7 flex flex-col gap-3">

        {/* Panel label */}
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase
          text-[#F25C1A] mb-1">
          What we supply
        </p>

        {/* Product rows */}
        {solution.products?.map((product) => (
          <div
            key={product.name}
            className={[
              'flex items-center gap-3 px-3 py-2.5 rounded-lg',
              'border',
              'bg-white/4 border-white/8',
            ].join(' ')}
          >
            {/* Dot — orange for authorised, blue for standard */}
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: product.isAuthorised ? '#F25C1A' : '#1635D4',
              }}
            />
            <div>
              <span className="text-[12px] font-medium text-white block">
                {product.name}
              </span>
              <span className="text-[10px] text-white/35 block mt-0.5">
                {product.sub}
              </span>
            </div>
          </div>
        ))}

        {/* Authority badge */}
        {solution.authorityNote && (
          <div className={[
            'inline-flex items-center gap-1.5 self-start mt-1',
            'text-[9px] font-bold tracking-[0.12em] uppercase',
            'text-[#F25C1A]',
            'bg-[#F25C1A]/10 border border-[#F25C1A]/25',
            'rounded-full px-2.5 py-1',
          ].join(' ')}>
            {solution.authorityNote}
          </div>
        )}
      </div>
    </div>
  )
}
