'use client'

import { LogoTile } from './LogoTile'
import { LOGO_WALL_BRANDS } from '@/lib/brands-logo-wall'
import type { ROW_CONFIGS } from '@/lib/brands-logo-wall'

type RowConfig = (typeof ROW_CONFIGS)[number]

interface LogoWallRowProps {
  config: RowConfig
  paused?: boolean
}

export function LogoWallRow({ config, paused = false }: LogoWallRowProps) {
  // Resolve brand objects from IDs
  const rowBrands = config.brands
    .map((id) => LOGO_WALL_BRANDS.find((b) => b.id === id))
    .filter(Boolean) as typeof LOGO_WALL_BRANDS

  // Duplicate for seamless loop
  const tilesDouble = [...rowBrands, ...rowBrands]

  return (
    <div
      className="flex overflow-hidden py-[5px]"
      style={{ WebkitMaskImage: 'none' }} // mask applied by parent container
    >
      <div
        className="flex gap-2.5 w-max logo-wall-row"
        style={{ 
          animation: `scroll-${config.direction} ${config.duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running'
        }}
      >
        {tilesDouble.map((brand, idx) => (
          <LogoTile key={`${brand.id}-${idx}`} brand={brand} size="md" />
        ))}
      </div>
    </div>
  )
}
