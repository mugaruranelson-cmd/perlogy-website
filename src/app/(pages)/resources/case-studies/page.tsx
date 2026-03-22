import type { Metadata } from 'next'
import { AccentBar }          from '@/components/ui/AccentBar'
import { CaseStudyCard }      from '@/components/case-studies/CaseStudyCard'
import { getAllCaseStudies }   from '@/lib/case-studies-data'
import { PROJECT_VIDEOS }     from '@/lib/project-videos'

import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Portfolio of Projects | ProAV & ICT Case Studies | Perlogy',
  description:
    'Explore Perlogy\'s portfolio of high-impact ProAV and ICT installations ' +
    'across Africa. Featured: East Africa\'s largest LCD video wall at Uhuru ' +
    'Gardens Museum, Nairobi.',
  alternates: { canonical: buildCanonical('/resources/case-studies') },
  openGraph: {
    title: 'Perlogy Project Portfolio — Proven ICT Distribution in Africa',
    description:
      'Real-world implementations of LG, Unilumin, and premium AV technology ' +
      'across the continent.',
    url: buildCanonical('/resources/case-studies'),
  },
}

const caseStudiesBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SEO.siteUrl}/resources/case-studies` },
    { '@type': 'ListItem', position: 3, name: 'Case Studies', item: `${SEO.siteUrl}/resources/case-studies` },
  ],
}

export default function CaseStudiesPage() {
  const studies    = getAllCaseStudies()
  const flagship   = studies.find(s => s.isFlagship)!
  const others     = studies.filter(s => !s.isFlagship)

  return (
    <main>
      <StructuredData data={caseStudiesBreadcrumb} />
      <AccentBar />

      {/* Hero */}
      <section className="bg-brand-navy px-7 pt-12 pb-10
        relative overflow-hidden">
        <div
          className="absolute inset-0 pixel-grid opacity-[0.045]
            pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 mb-5
            bg-[#1635D4]/18 border border-[#1635D4]/35
            rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F25C1A]" />
            <span className="text-[10px] text-[#7B9AFF] tracking-[0.15em]
              uppercase font-medium">
              Case studies
            </span>
          </div>
          <h1 className="text-[28px] font-semibold text-white
            leading-[1.2] max-w-[520px] mb-3">
            Proven on the ground{' '}
            <em className="not-italic text-[#7B9AFF]">
              across Africa.
            </em>
          </h1>
          <p className="text-[14px] text-white/50 leading-[1.75]
            max-w-[460px]">
            Real projects. Delivered by our SI partners. Supported by
            Perlogy — every time without competing with the integrator
            who brought us in.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-7 py-10">

        {/* Flagship */}
        <div className="mb-4">
          <CaseStudyCard
            study={flagship}
            videoId={PROJECT_VIDEOS.uhuruGardens.youtubeId}
            featured={true}
          />
        </div>

        {/* Standard cards grid */}
        {others.length > 0 && (
          <div className="grid grid-cols-2 gap-3.5">
            {others.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </section>

      {/* SI CTA */}
      <div className="mx-7 mb-12 bg-brand-navy rounded-[14px]
        px-8 py-8 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-[18px] font-semibold text-white mb-2">
            Want to deliver projects like these?
          </h2>
          <p className="text-[13px] text-white/50 leading-[1.65]">
            Join our SI partner network and get access to the brands,
            pricing, and technical support to win.
          </p>
        </div>
        <a
          href="/partners/apply"
          className="bg-[#F25C1A] hover:bg-[#E04E12] text-white
            text-[13px] font-semibold px-5 py-2.5 rounded-lg
            transition-all duration-150 whitespace-nowrap"
        >
          Become a partner →
        </a>
      </div>
    </main>
  )
}
