import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('contact.title'),
    description: t('contact.description'),
    alternates: { canonical: buildCanonical('/contact') },
    openGraph: {
      title: t('contact.title'),
      description: t('contact.description'),
      url: buildCanonical('/contact'),
      images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    },
  };
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
