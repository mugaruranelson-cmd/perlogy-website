'use client'

import { Suspense } from 'react'
import { LogoWall } from './LogoWall'

export function BrandsHero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">

      {/* ── Decorative background elements ── */}
      {/* Top-right circle glow */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'rgba(22,53,212,0.10)' }}
        aria-hidden="true"
      />
      {/* Bottom-left circle glow */}
      <div
        className="absolute -bottom-16 left-[38%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'rgba(242,92,26,0.06)' }}
        aria-hidden="true"
      />
      {/* Pixel grid texture overlay — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #1635D4 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* ── Main content row ── */}
      <div className="relative z-10 flex items-center min-h-[360px] px-7 py-14 lg:pr-0">

        {/* LEFT: Copy content — takes 58% on large screens */}
        <div className="w-full lg:w-[58%] lg:pr-8">

          {/* Tag pill */}
          <div className="inline-flex items-center gap-1.5 mb-6
            bg-[#1635D4]/18 border border-[#1635D4]/35
            rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F25C1A]" />
            <span className="text-[10px] text-[#7B9AFF] tracking-[0.15em] uppercase font-medium">
              Brand portfolio
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-white
            leading-[1.18] mb-3 max-w-[500px]">
            13 world-class brands.{' '}
            <em className="not-italic text-[#7B9AFF]">
              One trusted African distribution partner.
            </em>
          </h1>

          {/* Subtext */}
          <p className="text-[13px] text-white/50 leading-[1.75] mb-5 max-w-full lg:max-w-[420px]">
            Authorised distribution of LG Electronics and Unilumin, plus 11 leading
            ProAV and ICT brands — available exclusively through Perlogy&apos;s SI
            partner network across English-speaking Africa.
          </p>

          {/* Geographic scope pills */}
          <div className="flex flex-wrap gap-2 mb-7">
            {[
              { label: 'East Africa',     accent: false },
              { label: 'West Africa',     accent: false },
              { label: 'Southern Africa', accent: false },
              { label: 'English-speaking only', accent: true },
            ].map(({ label, accent }) => (
              <div
                key={label}
                className={[
                  'flex items-center gap-1.5 rounded-full px-2.5 py-1',
                  accent
                    ? 'bg-[#F25C1A]/12 border border-[#F25C1A]/25'
                    : 'bg-white/6 border border-white/12',
                ].join(' ')}
              >
                {!accent && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F25C1A] flex-shrink-0" />
                )}
                <span className={[
                  'text-[10px]',
                  accent ? 'text-white/65' : 'text-white/55',
                ].join(' ')}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="/partners/apply"
              className="inline-flex justify-center flex-1 sm:flex-none items-center gap-1.5
                bg-[#1635D4] hover:bg-[#2244E8] active:scale-[0.98]
                text-white text-[13px] font-medium w-full sm:w-auto
                px-5 py-2.5 rounded-lg transition-all duration-150"
            >
              Become a partner
              <span className="text-white/70">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex justify-center flex-1 sm:flex-none items-center gap-1.5
                border border-white/20 hover:border-white/40 w-full sm:w-auto
                text-white/70 hover:text-white text-[13px] font-medium
                px-5 py-2.5 rounded-lg transition-all duration-150"
            >
              Ask about a brand
            </a>
          </div>
        </div>

        {/* RIGHT: Logo wall — absolutely positioned, fills right portion */}
      </div>

      <Suspense fallback={<div className="w-[42%] hidden lg:block" />}>
        <LogoWall />
      </Suspense>

    </section>
  )
}
