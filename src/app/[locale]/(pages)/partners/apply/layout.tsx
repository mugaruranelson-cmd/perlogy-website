import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('partnerApply.title'),
    description: t('partnerApply.description'),
    alternates: { canonical: buildCanonical('/partners/apply') },
    openGraph: {
      title: t('partnerApply.title'),
      description: t('partnerApply.description'),
      url: buildCanonical('/partners/apply'),
      images: [{ url: '/og/partners.png', width: 1200, height: 630 }],
    },
  };
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
