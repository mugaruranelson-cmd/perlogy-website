import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { useTranslations } from 'next-intl'
import { AccentBar } from '@/components/ui/AccentBar'
import { StructuredData } from '@/components/seo/StructuredData'

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Metadata.privacy' });
  return {
    title: t('title'),
    description: 'How we collect and protect your data at Perlogy Technologies LLC. Information on data collection, use, and user rights.',
    alternates: { canonical: buildCanonical('/privacy') },
  }
}

const privacyBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: buildCanonical('/privacy') },
  ],
}

export default function PrivacyPage() {
  const t = useTranslations('Privacy')

  return (
    <main className="bg-white">
      <StructuredData data={privacyBreadcrumb} />
      <AccentBar />
      
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-sm text-brand-gray-muted">{t('lastUpdated')}</p>
        
        <div className="mt-12 space-y-10 text-brand-gray-text leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_1')}</h2>
            <p>{t('p1')}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_2')}</h2>
            <p className="mb-4">{t('p2')}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t('li2_1')}</li>
              <li>{t('li2_2')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_3')}</h2>
            <p>{t('p3')}</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>{t('li3_1')}</li>
              <li>{t('li3_2')}</li>
              <li>{t('li3_3')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_4')}</h2>
            <p>
              <strong>{t('noSelling')}</strong> {t('noSellingDesc')}
            </p>
            <p className="mt-4">
              <strong>{t('serviceProviders')}</strong> {t('serviceProvidersDesc')}
            </p>
            <p className="mt-4">
              <strong>{t('legalReqs')}</strong> {t('legalReqsDesc')}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_5')}</h2>
            <p>{t('p5')}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_6')}</h2>
            <p>{t('p6')}</p>
          </div>

          <div className="pt-8 border-t border-brand-gray-border">
            <h2 className="text-xl font-bold text-brand-navy mb-2">{t('contactTitle')}</h2>
            <p>{t('contactDesc')}</p>
            <p className="mt-4 font-medium text-brand-navy">Perlogy Technologies LLC</p>
            <p>Westlands, Nairobi, Kenya</p>
            <p>{t('contactEmailLabel')} <a href="mailto:info@perlogy.africa" className="text-brand-blue hover:underline">info@perlogy.africa</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
