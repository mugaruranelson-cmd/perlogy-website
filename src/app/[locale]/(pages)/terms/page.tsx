import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { useTranslations } from 'next-intl'
import { AccentBar } from '@/components/ui/AccentBar'
import { StructuredData } from '@/components/seo/StructuredData'

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Metadata.terms' });
  return {
    title: t('title'),
    description: 'Terms and conditions for using Perlogy Technologies LLC services and participating in the Perlogy Partner Programme.',
    alternates: { canonical: buildCanonical('/terms') },
  }
}

const termsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: buildCanonical('/terms') },
  ],
}

export default function TermsPage() {
  const t = useTranslations('Terms')

  return (
    <main className="bg-white">
      <StructuredData data={termsBreadcrumb} />
      <AccentBar />
      
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-sm text-brand-gray-muted">{t('lastUpdated')}</p>
        
        <div className="mt-12 space-y-10 text-brand-gray-text leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_1')}</h2>
            <p>
              {t.rich('p1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_2')}</h2>
            <p>
              {t.rich('p2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_3')}</h2>
            <p>
              {t('p3')}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_4')}</h2>
            <p>
              {t('p4')}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_5')}</h2>
            <p className="mb-4">{t('p5')}</p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                {t.rich('li5_1', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {t.rich('li5_2', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </li>
              <li>
                {t.rich('li5_3', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">{t('h2_6')}</h2>
            <p>
              {t.rich('p6', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
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
