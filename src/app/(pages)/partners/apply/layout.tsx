import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Apply for Perlogy Partner Programme | SI Registration Africa',
  description:
    'Official application form for Perlogy\'s system integrator partner ' +
    'programme. Authorized LG and Unilumin distribution for registered SIs ' +
    'across East, West, and Southern Africa.',
  alternates: { canonical: buildCanonical('/partners/apply') },
  openGraph: {
    title: 'SI Partner Application | Perlogy Technologies Africa',
    description:
      'Join our network of elite system integrators and access premium ProAV ' +
      'brands with full technical and margin support.',
    url: buildCanonical('/partners/apply'),
  },
}

const applyBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Partners', item: `${SEO.siteUrl}/partners` },
    { '@type': 'ListItem', position: 3, name: 'Apply', item: `${SEO.siteUrl}/partners/apply` },
  ],
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StructuredData data={applyBreadcrumb} />
      {children}
    </>
  )
}
