'use client'

import React, { useState, useEffect } from 'react'
import { BRANDS, ALL_CATEGORIES, type BrandCategory } from '@/lib/brands-data'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { AuthorityBadge } from '@/components/ui/AuthorityBadge'
import Button from '@/components/ui/Button'
import { clsx } from 'clsx'
import { useRouter } from 'next/navigation'
import { PROJECT_VIDEOS } from '@/lib/project-videos'

export function BrandGrid() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<BrandCategory | 'all'>('all')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedBrand) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedBrand])

  // ESC to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedBrand(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  const visibleBrands = activeFilter === 'all'
    ? BRANDS
    : BRANDS.filter((b) => b.categories.includes(activeFilter))

  const activeBrandData = selectedBrand
    ? BRANDS.find((b) => b.id === selectedBrand)
    : null

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveFilter('all')}
            className={clsx(
              "text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200",
              activeFilter === 'all'
                ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                : "bg-transparent text-brand-gray-text border-brand-gray-border hover:border-brand-blue hover:text-brand-blue"
            )}
          >
            All brands (13)
          </button>
          
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={clsx(
                "text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200",
                activeFilter === cat.id
                  ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                  : "bg-transparent text-brand-gray-text border-brand-gray-border hover:border-brand-blue hover:text-brand-blue"
              )}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* The Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className="group cursor-pointer rounded-2xl border border-brand-gray-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue hover:shadow-lg flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="mb-4 pb-4 border-b border-brand-gray-border flex gap-3 items-center">
                <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg border border-brand-gray-border bg-white p-1">
                  <BrandLogo
                    domain={brand.domain}
                    name={brand.name}
                    width={112}
                    height={72}
                    className="max-h-full max-w-full"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-[11px] text-brand-gray-muted line-clamp-1 mt-0.5">
                    {brand.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col">
                {brand.tier === 'authorised' && (
                  <div className="mb-3">
                    <AuthorityBadge />
                  </div>
                )}
                
                <p className="text-xs text-brand-gray-text leading-relaxed line-clamp-3 mb-4">
                  {brand.description}
                </p>

                {/* Product Tags */}
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {brand.products.slice(0, 3).map((prod) => (
                    <span
                      key={prod}
                      className="inline-flex rounded-md border border-brand-gray-border bg-gray-50 px-2 py-1 text-[10px] text-brand-gray-text"
                    >
                      {prod}
                    </span>
                  ))}
                  {brand.products.length > 3 && (
                    <span className="inline-flex rounded-md border border-brand-gray-border bg-gray-50 px-2 py-1 text-[10px] text-brand-gray-text">
                      +{brand.products.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleBrands.length === 0 && (
          <div className="py-20 text-center text-sm text-brand-gray-muted border border-dashed rounded-2xl bg-gray-50">
            No brands found in this category.
          </div>
        )}
      </section>

      {/* Detail Modal Overlay */}
      {selectedBrand && activeBrandData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Dismiss background */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedBrand(null)}
            aria-label="Close modal"
          />
          
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-brand-navy-mid px-6 py-8 sm:px-8 relative">
              <button
                onClick={() => setSelectedBrand(null)}
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  <BrandLogo
                    domain={activeBrandData.domain}
                    name={activeBrandData.name}
                    width={160}
                    height={96}
                    className="max-h-full max-w-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {activeBrandData.name}
                  </h2>
                  <p className="mt-1 text-sm text-white/70">
                    {activeBrandData.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-8 sm:px-8">
              {activeBrandData.tier === 'authorised' && activeBrandData.authorityNote && (
                <div className="mb-6 rounded-lg border-l-4 border-brand-orange bg-brand-orange/10 p-4">
                  <div className="mb-1">
                    <AuthorityBadge />
                  </div>
                  <p className="text-sm font-medium text-brand-navy mt-2">
                    {activeBrandData.authorityNote}
                  </p>
                </div>
              )}

              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gray-muted mb-2">About the brand</h4>
              <p className="text-sm leading-relaxed text-brand-gray-text">
                {activeBrandData.fullDescription}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gray-muted mb-3">Key Technologies</h4>
                  <ul className="flex flex-col gap-2">
                    {activeBrandData.products.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-brand-gray-text">
                        <span className="h-1 w-1 rounded-full bg-brand-blue" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {selectedBrand === 'lg' && (
                    <div className="mt-6 mb-2">
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase
                        text-brand-orange mb-3">
                        Flagship reference project
                      </p>
                      <a
                        href="/resources/case-studies/uhuru-gardens-museum"
                        className={[
                          'flex items-center gap-3 p-3 rounded-xl',
                          'bg-brand-navy border border-brand-blue/25',
                          'hover:border-brand-blue/60',
                          'transition-all duration-150 group',
                          'no-underline',
                        ].join(' ')}
                      >
                        {/* Mini thumbnail */}
                        <div className="w-16 h-10 rounded-lg overflow-hidden
                          bg-[#0F1E45] flex-shrink-0 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://img.youtube.com/vi/${PROJECT_VIDEOS.uhuruGardens.youtubeId}/default.jpg`}
                            alt="Uhuru Gardens Museum"
                            className="w-full h-full object-cover opacity-70"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-bold text-white truncate">
                            Uhuru Gardens Museum, Nairobi
                          </p>
                          <p className="text-[10px] text-white/50 mt-1">
                            USD 1.4M · Largest LCD video walls in East Africa
                          </p>
                        </div>

                        {/* Arrow */}
                        <span className="text-[#7B9AFF] text-sm flex-shrink-0
                          group-hover:translate-x-0.5 transition-transform duration-150">
                          →
                        </span>
                      </a>
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gray-muted mb-3">Availability</h4>
                  <div className="rounded-lg border-l-4 border-brand-blue bg-brand-light-blue-bg p-4 flex flex-col h-full justify-center">
                    <p className="text-sm text-brand-navy">
                      {activeBrandData.geoScope}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-brand-gray-border bg-gray-50 px-6 py-5 sm:px-8">
              <Button 
                variant="outline-dark" 
                onClick={() => setSelectedBrand(null)}
              >
                Close
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {
                  setSelectedBrand(null);
                  router.push(`/contact?brand=${activeBrandData.id}`);
                }}
              >
                Enquire about {activeBrandData.name} →
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
