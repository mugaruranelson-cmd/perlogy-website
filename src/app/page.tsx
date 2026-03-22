import Button from "@/components/ui/Button";
import SectionTag from "@/components/ui/SectionTag";
import DarkHero from "@/components/ui/DarkHero";
import StatBar from "@/components/ui/StatBar";
import FeatureCard from "@/components/ui/FeatureCard";
import SIBanner from "@/components/ui/SIBanner";

import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard'
import { getAllCaseStudies } from '@/lib/case-studies-data'
import { PROJECT_VIDEOS } from '@/lib/project-videos'

/* ─────────────────────────────────────────────
   Icons for Solutions cards (inline SVGs)
   ───────────────────────────────────────────── */

function HospitalityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 9h1" />
      <path d="M14 9h1" />
      <path d="M9 13h1" />
      <path d="M14 13h1" />
    </svg>
  );
}

function SignageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 8h5" />
      <path d="M7 12h10" />
    </svg>
  );
}

function CorporateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22V6l10-4 10 4v16" />
      <path d="M6 10h1" />
      <path d="M11 10h1" />
      <path d="M16 10h1" />
      <path d="M6 14h1" />
      <path d="M11 14h1" />
      <path d="M16 14h1" />
      <path d="M6 18h1" />
      <path d="M11 18h1" />
      <path d="M16 18h1" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Solutions card data
   ───────────────────────────────────────────── */

const solutions = [
  {
    icon: HospitalityIcon,
    title: "Hospitality",
    body: "In-room displays, lobby signage, IPTV, and guest-facing technology for hotels and resorts across Africa.",
  },
  {
    icon: SignageIcon,
    title: "Digital Signage",
    body: "Indoor and outdoor LED, video walls, menu boards, and content management for retail, QSR, and corporate spaces.",
  },
  {
    icon: CorporateIcon,
    title: "Airports & Corporate",
    body: "Flight information displays, wayfinding, meeting room solutions, and enterprise-grade AV distribution.",
  },
] as const;

/* ─────────────────────────────────────────────
   Brand Ticker Imports
   ───────────────────────────────────────────── */
import { LogoWallRow } from '@/components/brands/LogoWallRow';
import { ROW_CONFIGS } from '@/lib/brands-logo-wall';

/* ===========================================
   HOME PAGE
   =========================================== */

import type { Metadata } from "next";
import { buildCanonical, SEO } from '@/lib/seo-config'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'ProAV & ICT Distribution Across Africa',
  description:
    'Perlogy Technologies distributes world-class ProAV and ICT technology ' +
    'across English-speaking Africa — authorised LG Electronics and Unilumin ' +
    'partner, serving 13 brands across East, West, and Southern Africa ' +
    'exclusively through system integrators.',
  alternates: { canonical: buildCanonical('/') },
  openGraph: {
    title: 'Perlogy Technologies | ProAV & ICT Distribution Across Africa',
    description:
      'Authorised LG Electronics and Unilumin distributor for English-speaking ' +
      'Africa. 13 world-class ProAV brands. Exclusively through SI partners.',
    url: buildCanonical('/'),
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type':    'WebSite',
  '@id':      `${SEO.siteUrl}/#website`,
  name:       SEO.siteName,
  url:        SEO.siteUrl,
  description: SEO.defaultDescription,
  publisher: { '@id': `${SEO.siteUrl}/#organization` },
}

const homeBreadcrumb = {
  '@context': 'https://schema.org',
  '@type':    'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
  ],
}

import homepageHero from "../../public/images/heroes/homepage-hero.webp";

export default function Home() {
  const allStudies   = getAllCaseStudies()
  const flagship     = allStudies.find(s => s.isFlagship)!
  const secondary    = allStudies.find(s => !s.isFlagship)!
  const flagshipVid  = PROJECT_VIDEOS.uhuruGardens

  return (
    <>
      <StructuredData data={[websiteSchema, homeBreadcrumb]} />
      {/* ────────────────────────────────────
          1 · HERO
          ──────────────────────────────────── */}
      <DarkHero
        bgImage={homepageHero}
        tag="ProAV & ICT Distribution · Africa"
        title={
          <>
            Africa&apos;s technology distribution partner.{" "}
            Built to make you{" "}
            <span className="text-brand-blue">stronger.</span>
          </>
        }
        subtitle="We distribute world-class ProAV and ICT technology across Africa — exclusively through system integrators. Your clients stay yours. Always."
      >
        <Button variant="primary" href="/partners/apply">
          I&apos;m a system integrator →
        </Button>
        <Button
          variant="outline-blue"
          href="/solutions"
          className="border-white/30 text-white hover:bg-white/10"
        >
          Explore solutions
        </Button>
      </DarkHero>

      {/* Stat grid underneath hero */}
      <div className="mx-auto max-w-4xl px-4 -mt-6">
        <StatBar
          dark
          stats={[
            { value: "2000+", label: "Hotel rooms supplied" },
            { value: "5+", label: "African markets" },
            { value: "0", label: "Direct sales — ever" },
          ]}
          className="bg-brand-navy-mid"
        />
      </div>

      {/* ────────────────────────────────────
          2 · BRANDS STRIP
          ──────────────────────────────────── */}
      <section className="py-16 overflow-hidden bg-brand-light-blue-bg border-y border-brand-blue/5">
        <div className="mx-auto max-w-5xl px-4 lg:px-8 mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
            Brands in our portfolio
          </p>
        </div>

        {/* Constrained Ticker Container with Alpha Fade Mask */}
        <div 
          className="relative flex flex-col gap-5 overflow-hidden w-full max-w-[1400px] mx-auto opacity-90"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <LogoWallRow config={ROW_CONFIGS[0]} />
          <LogoWallRow config={ROW_CONFIGS[1]} />
        </div>
      </section>

      {/* ────────────────────────────────────
          3 · PARTNER PLEDGE
          ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 pb-20 lg:px-8">
        <SectionTag>The partner pledge</SectionTag>

        <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
          We exist to serve you, not compete with you.
        </h2>
        <p className="mt-3 max-w-2xl text-brand-gray-muted leading-relaxed">
          Four commitments to every system integrator. Not aspirations — how we
          operate.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FeatureCard number="01 — Never go direct" title="Your clients stay yours">
            We do not sell to your clients. Ever. If an end user contacts us, we
            send them to you.
          </FeatureCard>

          <FeatureCard number="02 — Margin protection" title="Room to compete and win">
            Our pricing gives you competitive room. We won&apos;t undercut your
            proposal on the same products.
          </FeatureCard>

          <FeatureCard number="03 — Technical backing" title="Support throughout">
            Pre-sales help, product specs, installation guidance, and
            after-sales troubleshooting.
          </FeatureCard>

          <FeatureCard number="04 — Stock in Africa" title="Reliable supply chain">
            Regional stock means shorter lead times. Your projects don&apos;t
            stall waiting for freight.
          </FeatureCard>
        </div>
      </section>

      {/* ────────────────────────────────────
          4 · SOLUTIONS
          ──────────────────────────────────── */}
      <section className="bg-brand-light-blue-bg py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <SectionTag>Solutions</SectionTag>

          <h2 className="mt-4 text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Technology for Africa&apos;s fastest-growing sectors.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-xl border border-brand-gray-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Thumbnail area */}
                <div className="flex items-center justify-center bg-brand-navy p-8">
                  <s.icon className="h-12 w-12 text-brand-orange transition-transform group-hover:scale-110" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          5 · CASE STUDY
          ──────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase
          text-[#1635D4] mb-2">
          Proven projects
        </p>
        <h2 className="text-[22px] font-medium
          text-[var(--color-text-primary)] mb-2">
          Landmark projects across Africa.
        </h2>
        <p className="text-[14px] text-[var(--color-text-secondary)]
          leading-[1.65] max-w-[500px] mb-7">
          From Kenya&apos;s national heritage site to five-star hotels in
          Nigeria — real projects, delivered through our SI partner network.
        </p>

        {/* Flagship: Uhuru Gardens — full width */}
        <div className="mb-3.5">
          <CaseStudyCard
            study={flagship}
            videoId={flagshipVid.youtubeId}
            featured={true}
          />
        </div>

        {/* Secondary: Hilton Asaba — right aligned, 50% width */}
        <div className="flex justify-end">
          <div className="w-full sm:w-[calc(50%-7px)]">
            <CaseStudyCard study={secondary} />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────
          6 · SI BANNER
          ──────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pb-20 lg:px-8">
        <SIBanner
          headline="Ready to add world-class brands to your portfolio?"
          subtext="Becoming a Perlogy partner takes less than a week. We respond within 24 hours."
          statValue="24h"
          statLabel="Response guaranteed"
        >
          <Button variant="orange" href="/partners/apply">
            Apply to become a partner →
          </Button>
        </SIBanner>
      </div>
    </>
  );
}
