'use client'

import { useState } from 'react'
import { SolutionsGrid } from './SolutionsGrid'
import { useTranslations } from 'next-intl'

export function SolutionsHero() {
  const t = useTranslations('Solutions')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filterTabs = [
    { id: 'all', label: t('tabAll') },
    { id: 'hospitality', label: t('tabHospitality') },
    { id: 'signage', label: t('tabSignage') },
    { id: 'airports', label: t('tabAirports') },
    { id: 'corporate', label: t('tabCorporate') },
  ]

  return (
    <>
      {/* ── HERO SECTION ───────────────────────────────── */}
      <section
        className="relative bg-brand-navy overflow-hidden text-center
          px-7 pt-14 pb-16"
      >
        {/* Pixel grid background */}
        <div
          className="absolute inset-0 pixel-grid opacity-[0.055] pointer-events-none"
          aria-hidden="true"
        />

        {/* Radial glow — top centre */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2
            w-[520px] h-[280px] rounded-full pointer-events-none"
          style={{ background: 'rgba(22,53,212,0.11)' }}
          aria-hidden="true"
        />

        {/* Radial glow — bottom right */}
        <div
          className="absolute -bottom-16 -right-16
            w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'rgba(242,92,26,0.05)' }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">

          {/* Tag pill */}
          <div className="inline-flex items-center gap-1.5 mb-5
            bg-[#1635D4]/18 border border-[#1635D4]/35
            rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F25C1A]" />
            <span className="text-[10px] text-[#7B9AFF] tracking-[0.15em]
              uppercase font-medium">
              {t('heroTag')}
            </span>
          </div>

          {/* H1 */}
          {/* IMPORTANT: font-weight 600 and large size here —
              the hero headline is the only place on the page
              that uses 600 weight. All other headings: 500.   */}
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white
            leading-[1.2] max-w-[620px] mx-auto mb-4">
            {t.rich('heroTitle', {
              highlight: (chunks) => <em className="not-italic text-[#F25C1A]">{chunks}</em>
            })}
          </h1>

          {/* Subtext */}
          <p className="text-[14px] text-white/50 leading-[1.75]
            max-w-[500px] mx-auto mb-8">
            {t('heroDesc')}
          </p>

          {/* ── FILTER TABS ──────────────────────────── */}
          {/* These tabs control which solution cards are visible below */}
          <div
            className="flex items-center justify-center gap-2 flex-wrap max-w-2xl mx-auto"
            role="tablist"
            aria-label="Filter solutions by sector"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={[
                  'text-[12px] font-medium px-4 py-1.5 rounded-full',
                  'border transition-all duration-150',
                  'focus:outline-none focus-visible:ring-2',
                  'focus-visible:ring-[#1635D4] focus-visible:ring-offset-2',
                  activeFilter === tab.id
                    ? 'bg-[#1635D4] border-[#1635D4] text-white'
                    : [
                        'bg-white/6 border-white/20 text-white/60',
                        'hover:border-white/40 hover:text-white',
                      ].join(' '),
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
      {/* Sits between hero and grid — dark navy, full width */}
      <div className="flex items-stretch bg-brand-navy-mid border-b border-white/6 overflow-x-auto min-w-full">
        <div className="flex items-stretch min-w-max mx-auto px-4 sm:px-0">
          {[
            { num: t('stat1Num'), label: t('stat1Label') },
            { num: t('stat2Num'), label: t('stat2Label') },
            { num: t('stat3Num'), label: t('stat3Label') },
            { num: t('stat4Num'), label: t('stat4Label') },
            { num: t('stat5Num'), label: t('stat5Label') },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              className={[
                'flex-1 flex flex-col items-center justify-center',
                'py-3.5 px-6 sm:px-8 lg:px-12 text-center',
                i < arr.length - 1 ? 'border-r border-white/6' : '',
              ].join(' ')}
            >
              <span className="text-[18px] font-medium text-[#F25C1A]
                leading-none mb-1">
                {stat.num}
              </span>
              <span className="text-[10px] text-white/30 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SOLUTIONS GRID (receives filter state) ───── */}
      <SolutionsGrid activeFilter={activeFilter} />
    </>
  )
}
