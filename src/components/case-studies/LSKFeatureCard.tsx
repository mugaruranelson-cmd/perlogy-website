import type { LSKFeature } from '@/lib/lsk-features'

export function LSKFeatureCard({ feature }: { feature: LSKFeature }) {
  return (
    <div
      className={[
        'border border-[var(--color-border-tertiary)]',
        'rounded-xl p-5',
        'transition-all duration-150',
        'hover:border-[#1635D4] hover:-translate-y-0.5',
      ].join(' ')}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center
          justify-center mb-3"
        style={{ background: feature.iconBg }}
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24"
          fill="none"
          stroke={feature.iconColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={feature.iconPath} />
        </svg>
      </div>
      <h4 className="text-[13px] font-medium
        text-[var(--color-text-primary)] mb-1.5">
        {feature.title}
      </h4>
      <p className="text-[12px] text-[var(--color-text-secondary)]
        leading-[1.65]">
        {feature.body}
      </p>
    </div>
  )
}
