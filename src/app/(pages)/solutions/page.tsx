import type { Metadata } from 'next'
import { AccentBar }       from '@/components/ui/AccentBar'
import { SolutionsHero }   from '@/components/solutions/SolutionsHero'
import { CaseStudyPull }   from '@/components/solutions/CaseStudyPull'
import { HowItWorks }      from '@/components/solutions/HowItWorks'
import { CustomBanner }    from '@/components/solutions/CustomBanner'

import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'ProAV & ICT Solutions for Africa | Hospitality, Signage, Airports',
  description:
    'ProAV and ICT solutions for hospitality, digital signage, airports, ' +
    'and corporate AV across English-speaking Africa. Distributed through ' +
    'specialist SI partners with authorised LG and Unilumin supply.',
  alternates: { canonical: buildCanonical('/solutions') },
  openGraph: {
    title: 'Perlogy Solutions — ProAV & ICT for Africa\'s Fastest-Growing Sectors',
    description:
      'From hotel IPTV to LED video walls and airport displays — the complete ' +
      'AV stack across East, West, and Southern Africa.',
    url: buildCanonical('/solutions'),
    images: [{ url: '/og/solutions.png', width: 1200, height: 630 }],
  },
}

const solutionsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SEO.siteUrl}/solutions` },
  ],
}

export default function SolutionsPage() {
  return (
    <>
      <StructuredData data={solutionsBreadcrumb} />
      <main>
        {/* Accent bar — 3px blue→orange gradient */}
        <AccentBar />

        {/* Hero + stats bar + filter tabs + solutions grid */}
        {/* SolutionsHero is a Client Component that owns filter state */}
        {/* and passes it down to SolutionsGrid                        */}
        <SolutionsHero />

        {/* Case study pull strip */}
        <CaseStudyPull />

        {/* How it works — 4-step process */}
        <HowItWorks />

        {/* Custom solution CTA banner */}
        <CustomBanner />
      </main>
    </>
  )
}
