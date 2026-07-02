// Server component — no interactivity needed
import React from 'react'
import { useTranslations } from 'next-intl'

export function BrandsStatsBar() {
  const t = useTranslations('Brands')

  const STATS = [
    { num: t('stat1Num'),     label: t('stat1Label')        },
    { num: t('stat2Num'),     label: t('stat2Label')        },
    { num: t('stat3Num'),     label: t('stat3Label')        },
    { num: t('stat4Num'),     label: t('stat4Label')        },
    { num: t('stat5Num'),     label: t('stat5Label')        },
  ]

  return (
    <div className="flex items-stretch bg-[#0a1630] border-b border-white/6 overflow-x-auto sm:overflow-x-visible">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={[
            'flex-1 flex flex-col items-center justify-center min-w-[120px] py-3.5 px-2 text-center',
            i < STATS.length - 1 ? 'border-r border-white/6' : '',
          ].join(' ')}
        >
          <span className="text-[18px] font-medium text-[#F25C1A] leading-none mb-1">
            {stat.num}
          </span>
          <span className="text-[10px] text-white/30 leading-tight">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
