import Link from 'next/link'

export function CustomBanner() {
  return (
    <div className="max-w-7xl mx-auto px-7">
      <div
        className={[
          'relative mb-12 rounded-[14px] overflow-hidden',
          'bg-brand-navy',
          'flex flex-col md:flex-row items-center justify-between gap-6',
          'px-9 py-9',
        ].join(' ')}
      >
        {/* Decorative glows */}
        <div
          className="absolute -top-16 right-24 w-56 h-56
            rounded-full pointer-events-none"
          style={{ background: 'rgba(22,53,212,0.12)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40
            rounded-full pointer-events-none"
          style={{ background: 'rgba(242,92,26,0.06)' }}
          aria-hidden="true"
        />

        {/* Left: copy */}
        <div className="relative z-10 w-full md:max-w-[440px] text-center md:text-left">
          <h2 className="text-[20px] font-semibold text-white mb-2">
            Need a custom solution?
          </h2>
          <p className="text-[13px] text-white/50 leading-[1.7]">
            Our team designs and delivers end-to-end AV and signage
            systems tailored to your sector — working with you and your
            SI partner from specification through commissioning.
          </p>
        </div>

        {/* Right: stat + buttons */}
        <div
          className="relative z-10 flex flex-col items-center md:items-end gap-3
            w-full md:w-auto flex-shrink-0"
        >
          {/* 24h stat (Hidden entirely on mobile based on prompt instructions) */}
          <div className="hidden md:block text-right mb-1">
            <span className="text-[28px] font-medium text-white
              leading-none block">
              24h
            </span>
            <span className="text-[10px] text-white/35 block mt-0.5">
              Response guaranteed on every enquiry
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className={[
                'bg-[#F25C1A] hover:bg-[#E04E12] active:scale-[0.98]',
                'text-white text-[13px] font-semibold flex items-center justify-center',
                'px-5 py-2.5 rounded-lg w-full sm:w-auto',
                'transition-all duration-150 whitespace-nowrap',
              ].join(' ')}
            >
              Talk to our team →
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/partners/find"
              className={[
                'border border-white/20 hover:border-white/40',
                'text-white/65 hover:text-white text-[13px] font-medium flex items-center justify-center',
                'px-5 py-2.5 rounded-lg w-full sm:w-auto',
                'transition-all duration-150 whitespace-nowrap',
              ].join(' ')}
            >
              Find an SI partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
