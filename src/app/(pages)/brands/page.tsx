import React from 'react'
import type { Metadata } from 'next'
import { BrandGrid } from '@/components/brands/BrandGrid'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { AuthorityBadge } from '@/components/ui/AuthorityBadge'
import Button from '@/components/ui/Button'
import { getAuthorisedBrands } from '@/lib/brands-data'
import { BrandsHero } from '@/components/brands/BrandsHero'
import { BrandsStatsBar } from '@/components/brands/BrandsStatsBar'

import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'LG & Unilumin Authorised Distributor Kenya | 14 ProAV Brands | Perlogy',
  description:
    'Perlogy distributes 14 world-class ProAV and ICT brands across Kenya and ' +
    'Africa. Authorised LG, Unilumin & Lampro representative in Nairobi. ' +
    'Supporting system integrators with genuine stock and technical expertise.',
  alternates: { canonical: buildCanonical('/brands') },
  openGraph: {
    title: 'Perlogy Brand Portfolio — 14 Leading ProAV & ICT Brands',
    description:
      'The complete technology stack from screens to control systems. ' +
      'Authorised distribution for LG, Unilumin and Lampro in Kenya & Africa.',
    url: buildCanonical('/brands'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
}

const brandsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Brands', item: `${SEO.siteUrl}/brands` },
  ],
}

export default function BrandsPage() {
  const authorisedBrands = getAuthorisedBrands()

  return (
    <>
      <StructuredData data={brandsBreadcrumb} />
      {/* Accent bar */}
      <div className="accent-bar" />

      {/* HERO — Concept A: animated logo wall */}
      <BrandsHero />

      {/* STATS BAR */}
      <BrandsStatsBar />

      {/* ─── Authority Section ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-light-blue-bg px-3 py-1 text-xs font-semibold text-brand-blue uppercase tracking-wider">
            Authorised representatives
          </div>
          <h2 className="text-3xl font-extrabold text-brand-navy">
            Authorised Distributors for LG, Unilumin, Lampro & Leading AV Brands.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-gray-text sm:text-base">
            Perlogy holds full authorised representative status for LG Electronics, Unilumin, Lampro, and Absen across English-speaking East, West, and Southern Africa — meaning direct manufacturer pricing, full product range access, and manufacturer-backed technical support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {authorisedBrands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-brand-blue bg-white shadow-xl shadow-brand-blue/5"
            >
              <div className="relative bg-[#0F1E45] p-6 lg:min-h-[220px]">
                <div className="absolute right-4 top-4">
                  <AuthorityBadge />
                </div>
                <div className="mb-4 flex h-14 w-[88px] shrink-0 items-center justify-center rounded-lg bg-white p-2">
                  <BrandLogo
                    domain={brand.domain}
                    name={brand.name}
                    width={80}
                    height={48}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {brand.name}
                </h3>
                <p className="text-xs text-white/50">
                  {brand.tagline}
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-6 text-sm leading-[1.7] text-brand-gray-text">
                  {brand.fullDescription}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {brand.products.map((prod) => (
                    <span
                      key={prod}
                      className="rounded-full bg-brand-light-blue-bg px-2.5 py-1 text-[10px] font-medium text-brand-blue"
                    >
                      {prod}
                    </span>
                  ))}
                </div>

                <div className="mt-auto mb-6 rounded-r-lg border-l-4 border-brand-blue bg-brand-blue/5 p-4">
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    Geographic availability
                  </div>
                  <p className="text-xs font-medium text-brand-navy leading-relaxed">
                    {brand.geoScope}
                  </p>
                </div>

                <div className="flex justify-center flex-col w-full sm:flex-row gap-4 mb-2">
                  <Button variant="outline-blue" href={`/contact?brand=${brand.id}`} className="justify-center w-full">
                    Enquire about {brand.name} →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <hr className="border-brand-gray-border" />
      </div>

      {/* ─── Full Portfolio Grid (Client Component) ─── */}
      <BrandGrid />

      {/* ─── SI Access CTA ─── */}
      <section className="bg-brand-light-blue-bg px-4 py-20 lg:px-8 text-center sm:text-left">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/50 border border-brand-blue/10 px-3 py-1 text-[11px] font-bold text-brand-blue uppercase tracking-widest">
              For system integrators
            </div>
            <h2 className="text-3xl font-extrabold text-brand-navy">
              One relationship. <br className="hidden sm:block" />
              <span className="text-brand-blue">All 14 brands.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray-text sm:text-base">
              Registered Perlogy SI partners across English-speaking East, West, and Southern Africa get access to our complete brand portfolio through a single partner relationship — one agreement, one point of contact, one invoice.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="primary" href="/partners/apply">
                Become a partner →
              </Button>
              <Button variant="outline-blue" href="/contact">
                Ask about a specific brand
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Need More Banner ─── */}
      <section className="bg-brand-navy px-4 py-16 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white">Need a brand not on this list?</h2>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              We are continuously expanding our portfolio. Talk to us — we may be able to source it or recommend a suitable alternative.
            </p>
          </div>
          <Button variant="orange" href="/contact">
            Talk to us →
          </Button>
        </div>
      </section>
    </>
  )
}
