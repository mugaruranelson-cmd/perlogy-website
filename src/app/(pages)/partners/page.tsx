import type { Metadata } from "next";
import DarkHero from "@/components/ui/DarkHero";
import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import PledgeRow from "@/components/ui/PledgeRow";
import TierCard from "@/components/ui/TierCard";
import SIBanner from "@/components/ui/SIBanner";
import { PROJECT_VIDEOS } from '@/lib/project-videos';

import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'SI Partner Programme Kenya & Africa | ProAV Distribution | Perlogy',
  description:
    'Scale your AV business with Perlogy in Kenya and East Africa. Direct ' +
    'access to 14 brands, LG & Unilumin authorised supply, and project ' +
    'protection. Nairobi-based support. 24hr response. We never sell to end users.',
  alternates: { canonical: buildCanonical('/partners') },
  openGraph: {
    title: 'Partner With Perlogy | Africa\'s Most Pro-Channel ProAV Distributor',
    description:
      'Margin protection, technical support, and the world\'s leading ProAV ' +
      'brands. Exclusively for system integrators in Kenya & Africa.',
    url: buildCanonical('/partners'),
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
}

const partnersFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who can join the Perlogy partner programme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We exclusively partner with registered system integrators, AV consultants, and ICT resellers. We do not sell to end users.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which regions does Perlogy cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve English-speaking East, West, and Southern Africa, including Kenya, Nigeria, Ghana, South Africa, Uganda, and Tanzania.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you sell directly to end-users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Perlogy operates strictly on a Business-to-Business (B2B) model. If end users contact us directly, we refer the project to one of our authorised SI partners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can systems integrators get quotes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We guarantee a 24-hour response Service Level Agreement (SLA) for our registered partners to ensure your project proposals keep moving forward without delay.',
      },
    },
  ],
}

const partnersBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Partners', item: `${SEO.siteUrl}/partners` },
  ],
}

import partnersHero from "../../../../public/images/heroes/partners-hero.webp";
import warehouseImg from "../../../../public/images/brands/warehouse.webp";
import partnerMaleImg from "../../../../public/images/people/si-partner-male.webp";
import partnerFemaleImg from "../../../../public/images/people/si-partner-female.webp";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <>
      <StructuredData data={[partnersFAQSchema, partnersBreadcrumb]} />
      {/* ─── Hero ─── */}
      <DarkHero
        bgImage={partnersHero}
        tag="Partner programme"
        title={
          <>
            A distributor that works for you
            <span className="text-brand-orange">&nbsp;—&nbsp;</span>
            not around you.
          </>
        }
        subtitle="Most distributors say they support their partners. Perlogy is structurally built around it."
      >
        <Button variant="primary" href="/partners/apply">
          Apply to become a partner
        </Button>
        <Button variant="outline-white">Download partner guide</Button>
      </DarkHero>

      {/* ─── Partner Pledge ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-24">
        <SectionTag>The partner pledge</SectionTag>
        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Four commitments. No exceptions.
        </h2>

        <div className="mt-10">
          <PledgeRow number="01" title="We will never sell direct to your clients">
            If any end user contacts Perlogy directly — by email, phone, or
            website — we refer them to an SI partner. We have no webshop for end
            users, no direct sales team, and no channel that bypasses the
            integrators we work with.
          </PledgeRow>

          <PledgeRow number="02" title="We will protect your pricing">
            Our distributor pricing gives you competitive room. We will not
            approach a client you have already engaged, and we will not offer
            different pricing on the same products to a specifier who has
            received your proposal.
          </PledgeRow>

          <PledgeRow number="03" title="We will back you with technical expertise">
            Pre-sales system design support, product specifications, installation
            guidance, commissioning help, and after-sales troubleshooting —
            throughout the full project lifecycle.
          </PledgeRow>

          <PledgeRow number="04" title="We will keep your supply chain reliable">
            We maintain regional stock, provide transparent lead times, and flag
            supply issues early. No surprises when your project is about to
            start.
            <div className="mt-6 relative h-56 lg:h-72 w-full max-w-3xl overflow-hidden rounded-xl">
              <Image src={warehouseImg} alt="Modern technology distribution warehouse" fill className="object-cover" placeholder="blur" />
            </div>
          </PledgeRow>
        </div>
      </section>

      {/* ─── Partner Tiers ─── */}
      <section className="bg-brand-light-blue-bg px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionTag className="mx-auto">Partner tiers</SectionTag>
            <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Choose the tier that fits your business.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TierCard
              tier="Bronze"
              badge="Registered partner"
              badgeColor="bg-amber-600"
              title="Get started with Perlogy"
              features={[
                "Standard distributor pricing",
                "Brand asset access",
                "Technical support",
                "Product documentation",
                "24-hour response SLA",
              ]}
            />

            <TierCard
              tier="Silver"
              badge="Preferred partner"
              badgeColor="bg-brand-blue"
              title="For growing integrators"
              featured
              features={[
                "Priority stock allocation",
                "Enhanced margin structure",
                "Pre-sales design support",
                "Partner directory listing",
                "Everything in Bronze",
              ]}
            />

            <TierCard
              tier="Gold"
              badge="Strategic partner"
              badgeColor="bg-brand-orange"
              title="Full strategic alignment"
              features={[
                "Dedicated account manager",
                "Joint business planning",
                "Co-marketing programmes",
                "Early access to new brands",
                "Everything in Silver",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── Testimonial Quotes ─── */}
      <section className="bg-brand-navy px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTag className="mb-8 mx-auto xl:mx-0 [&_span]:text-brand-orange text-center xl:text-left">Partner Stories</SectionTag>

          {/* Uhuru Gardens proof card */}
          <div className="rounded-[14px] overflow-hidden
            border border-brand-blue/30 mb-16 max-w-3xl mx-auto xl:mx-0">

            {/* Dark header */}
            <div className="bg-brand-navy-mid px-6 py-6
              flex items-start gap-6 border-b border-white/5">

              {/* Video thumbnail */}
              <div className="w-32 h-20 rounded-lg overflow-hidden
                bg-[#0F1E45] flex-shrink-0 relative hidden sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${PROJECT_VIDEOS.uhuruGardens.youtubeId}/mqdefault.jpg`}
                  alt="Uhuru Gardens Museum AV installation"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="bg-brand-orange text-white text-[10px]
                    font-bold tracking-widest uppercase
                    px-2.5 py-1 rounded-full">
                    ★ USD 1.4M
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest
                    uppercase text-white/45 bg-white/6
                    border border-white/10 px-2.5 py-1 rounded-full">
                    Heritage & Culture · Kenya
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-white
                  leading-[1.3] mb-2">
                  Uhuru Gardens Museum, Nairobi
                </h3>
                <p className="text-[13px] text-white/60 leading-[1.6]">
                  East Africa&apos;s largest LCD video wall installation.
                  Delivered by Digital Mara Kenya, in partnership with
                  LG Electronics — supplied and supported by Perlogy
                  throughout.
                </p>
              </div>
            </div>

            {/* Bottom: partner list + link */}
            <div className="bg-[#0a1530]
              px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] text-white/40 mr-1">
                  Project Partners:
                </span>
                {['LG Electronics', 'Displax', 'Digital Mara Kenya'].map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-medium
                      text-white/70 bg-white/5 border border-white/10
                      px-2.5 py-1 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <a
                href="/resources/case-studies/uhuru-gardens-museum"
                className="text-[13px] font-bold text-brand-blue
                  whitespace-nowrap hover:underline transition-all"
              >
                Read full case study →
              </a>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <blockquote className="flex flex-col justify-between rounded-2xl border-l-4 border-brand-orange bg-brand-navy-mid p-8 shadow-lg">
              <p className="text-lg italic leading-relaxed text-white/90">
                &ldquo;Working with Perlogy changed how we operate. We finally
                have a distributor who genuinely does not compete with us.&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-brand-orange">
                  <Image src={partnerMaleImg} alt="Male SI partner portrait" fill className="object-cover scale-110" placeholder="blur" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wide text-white uppercase">AV Systems Integrator</div>
                  <div className="mt-1 text-sm text-white/60">Lagos, Nigeria&nbsp;&nbsp;·&nbsp;&nbsp;Hospitality sector</div>
                </div>
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between rounded-2xl border-l-4 border-brand-orange bg-brand-navy-mid p-8 shadow-lg">
              <p className="text-lg italic leading-relaxed text-white/90">
                &ldquo;The technical support and transparent lead times mean we can commit to massive infrastructure deployments with complete confidence.&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-brand-orange">
                  <Image src={partnerFemaleImg} alt="Female SI partner portrait" fill className="object-cover scale-110" placeholder="blur" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wide text-white uppercase">Project Manager</div>
                  <div className="mt-1 text-sm text-white/60">Nairobi, Kenya&nbsp;&nbsp;·&nbsp;&nbsp;Enterprise sector</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ─── */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag className="mx-auto">FAQs</SectionTag>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {[
            {
              question: "Who can join the Perlogy partner programme?",
              answer: "We exclusively partner with registered system integrators, AV consultants, and ICT resellers. We do not sell to end users."
            },
            {
              question: "Which regions does Perlogy cover?",
              answer: "We serve English-speaking East, West, and Southern Africa, including Kenya, Nigeria, Ghana, South Africa, Uganda, and Tanzania."
            },
            {
              question: "Do you sell directly to end-users?",
              answer: "No. Perlogy operates strictly on a Business-to-Business (B2B) model. If end users contact us directly, we refer the project to one of our authorised SI partners."
            },
            {
              question: "How quickly can systems integrators get quotes?",
              answer: "We guarantee a 24-hour response Service Level Agreement (SLA) for our registered partners to ensure your project proposals keep moving forward without delay."
            }
          ].map((faq, i) => (
            <details key={i} className="group rounded-xl border border-brand-gray-border bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl p-6 text-brand-navy font-bold">
                {faq.question}
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-brand-gray-text leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ─── SIBanner CTA ─── */}
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <SIBanner headline="Ready to partner with Perlogy?">
          <Button variant="orange" href="/partners/apply">
            Apply now →
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
