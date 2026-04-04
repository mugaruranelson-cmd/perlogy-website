'use client'
import Image from 'next/image'
import { getBrandLogoUrl } from '@/lib/brandfetch'
import { useState } from 'react'

interface BrandLogoProps {
  domain: string
  name: string
  type?: 'logo' | 'symbol' | 'icon'
  width?: number
  height?: number
  className?: string
}

export function BrandLogo({
  domain,
  name,
  type = 'logo',
  width = 200,
  height = 80,
  className = '',
}: BrandLogoProps) {
  const [imgError, setImgError] = useState(false)
  const src = getBrandLogoUrl(domain, type, width * 2, height * 2) // 2x for retina

  if (imgError || !src) {
    // Fallback: brand initials if Brandfetch fails
    const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded font-bold text-gray-600 text-sm ${className}`}
        style={{ width, height }}
      >
        {initials}
      </div>
    )
  }

  // Use next/image with unoptimized=true since brandfetch is doing the heavy lifting 
  // and we'll whitelist their CDN domain in next.config.ts
  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      onError={() => setImgError(true)}
      unoptimized
    />
  )
}
