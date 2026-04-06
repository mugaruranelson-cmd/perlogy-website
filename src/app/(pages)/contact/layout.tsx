import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Contact Perlogy | Get a Quote for ProAV & ICT in Africa',
  description:
    'Contact Perlogy Technologies in Nairobi, Kenya for ProAV and ICT ' +
    'project enquiries across East Africa. System integrators receive a ' +
    '24-hour guaranteed response. Email, WhatsApp, or use the enquiry form.',
  alternates: { canonical: buildCanonical('/contact') },
  openGraph: {
    title: 'Contact Perlogy — Start Your ProAV Project Today',
    description:
      'Reach the Perlogy team in Nairobi for ProAV supply enquiries, SI ' +
      'partnership applications, and project consultations across Africa.',
    url: buildCanonical('/contact'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
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
