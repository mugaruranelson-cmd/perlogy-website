'use client'

import { useState } from 'react'
import { LogoWallRow } from './LogoWallRow'
import { ROW_CONFIGS } from '@/lib/brands-logo-wall'

export function LogoWall() {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className={[
        // Sizing: fills the right portion of the hero
        'absolute right-0 top-0 bottom-0',
        // Width: 42% of hero on large screens, hidden on mobile
        'w-[42%] hidden lg:flex flex-col justify-center gap-0',
        // Overflow: clips the scrolling tiles
        'overflow-hidden',
        // Left-edge fade: CSS mask fades logos in from left
        // Right edge: slight fade too for polish
      ].join(' ')}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 18%, black 85%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 18%, black 85%, transparent 100%)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"  // decorative — screen readers skip this
    >
      {ROW_CONFIGS.map((rowConfig) => (
        <LogoWallRow
          key={rowConfig.id}
          config={rowConfig}
          paused={paused}
        />
      ))}
    </div>
  )
}
