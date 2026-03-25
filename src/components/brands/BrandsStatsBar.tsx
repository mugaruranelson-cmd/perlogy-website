// Server component — no interactivity needed
import React from 'react'

const STATS = [
  { num: '11',     label: 'Partner brands'        },
  { num: '3',      label: 'Authorised reps'        },
  { num: '5',      label: 'Tech categories'        },
  { num: '3',      label: 'African regions'        },
  { num: 'SI only', label: 'No direct sales, ever' },
] as const

export function BrandsStatsBar() {
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
