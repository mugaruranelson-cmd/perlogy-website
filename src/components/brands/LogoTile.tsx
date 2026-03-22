'use client'

import { useState } from 'react'
import { getBrandLogoUrl } from '@/lib/brandfetch'
import type { LogoWallBrand } from '@/lib/brands-logo-wall'

interface LogoTileProps {
  brand: LogoWallBrand
  size?: 'sm' | 'md'  // sm = 96×52px, md = 112×60px
}

export function LogoTile({ brand, size = 'md' }: LogoTileProps) {
  const [imgFailed, setImgFailed] = useState(false)

  const w = size === 'md' ? 112 : 96
  const h = size === 'md' ? 60  : 52

  const logoUrl = getBrandLogoUrl(brand.domain, brand.logoType, w * 2, h * 2)

  // ── Tile wrapper classes ──────────────────────────────────────
  // Base: white bg box, rounded, border
  // Authorised: blue glow border + blue-tinted background
  // Hover: slight scale up + border brightens
  // NOTE: The tile itself does not navigate — clicks are handled
  //       by the parent scroll container (no onClick here)

  const baseClasses = [
    'flex-shrink-0 flex items-center justify-center',
    'rounded-lg border transition-all duration-200',
    'select-none',
    size === 'md' ? 'w-28 h-[60px] p-2' : 'w-24 h-[52px] p-1.5',
  ].join(' ')

  const variantClasses = brand.isAuthorised
    ? [
        'bg-[#1635D4]/20',
        'border-[#1635D4]/50',
        'hover:bg-[#1635D4]/30',
        'hover:border-[#1635D4]/80',
        // subtle pulsing glow animation defined in globals.css
        'authorised-tile',
      ].join(' ')
    : [
        'bg-white/8',
        'border-white/12',
        'hover:bg-white/14',
        'hover:border-white/25',
      ].join(' ')

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      {imgFailed || !logoUrl ? (
        // Fallback: brand initials in styled text
        <span
          className={[
            'font-bold tracking-wide text-center leading-tight',
            size === 'md' ? 'text-[11px]' : 'text-[10px]',
            brand.isAuthorised ? 'text-[#7B9AFF]' : 'text-white/60',
          ].join(' ')}
        >
          {brand.name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={`${brand.name} logo`}
          width={w}
          height={h}
          className="object-contain w-full h-full"
          onError={() => setImgFailed(true)}
          decoding="async"
          loading="lazy"
          draggable={false}
        />
      )}
    </div>
  )
}
