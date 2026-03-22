import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Contact Perlogy Technologies | ProAV & ICT Distribution Africa',
  description:
    'Get in touch with Perlogy for project support, brand inquiries, or ' +
    'partnership details. Serving system integrators across Kenya, Nigeria, ' +
    'Ghana, South Africa, and more.',
  alternates: { canonical: buildCanonical('/contact') },
  openGraph: {
    title: 'Contact Perlogy Technologies | Africa\'s ProAV Distribution Partner',
    description:
      'Inquire about LG, Unilumin, or any of our 13 world-class brands. ' +
      'Our team in Dubai and Nairobi is ready to support your next project.',
    url: buildCanonical('/contact'),
  },
}

const contactBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SEO.siteUrl}/contact` },
  ],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StructuredData data={contactBreadcrumb} />
      {children}
    </>
  )
}
