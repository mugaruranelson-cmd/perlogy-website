import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { StructuredData } from "@/components/seo/StructuredData";
import { SEO } from "@/lib/seo-config";
import "./globals.css";

const nexaPro = localFont({
  src: [
    {
      path: "../../public/fonts/NexaPro_Trial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NexaPro_Trial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NexaPro_Trial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NexaPro_Trial-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nexa-pro",
});

// ── ROOT METADATA ─────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://perlogy.co.ke'),

  title: {
    default:  SEO.defaultTitle,
    template: SEO.titleTemplate,
  },

  description: SEO.defaultDescription,

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type:        'website',
    locale:      SEO.locale,
    url:         SEO.siteUrl,
    siteName:    SEO.siteName,
    title:       SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url:    SEO.defaultOgImage,
        width:  1200,
        height: 630,
        alt:    'Perlogy Technologies — ProAV & ICT Distribution Across Africa',
      },
    ],
  },

  twitter: {
    card:        'summary_large_image',
    site:        SEO.twitterHandle,
    creator:     SEO.twitterHandle,
    title:       SEO.defaultTitle,
    description: SEO.defaultDescription,
    images:      [SEO.defaultOgImage],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      'max-video-preview':  -1,
      'max-image-preview':  'large',
      'max-snippet':        -1,
    },
  },

  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN',
  },

  icons: {
    icon:     '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple:    '/apple-touch-icon.png',
  },
};

// ── Organization structured data (global) ─────────
const organizationSchema = {
  '@context':   'https://schema.org',
  '@type':      'Organization',
  '@id':        `${SEO.siteUrl}/#organization`,
  name:         SEO.company.name,
  legalName:    SEO.company.legalName,
  url:          SEO.siteUrl,
  logo: {
    '@type': 'ImageObject',
    url:     SEO.company.logo,
    width:   '400',
    height:  '400',
  },
  description:  SEO.company.description,
  foundingDate: SEO.company.foundingYear,
  address: {
    '@type':         'PostalAddress',
    addressLocality:  SEO.company.address.city,
    addressCountry:   SEO.company.address.countryCode,
  },
  contactPoint: {
    '@type':            'ContactPoint',
    telephone:          SEO.company.phone,
    email:              SEO.company.email,
    contactType:        'customer service',
    areaServed:         SEO.company.areaServed,
    availableLanguage:  ['English'],
  },
  areaServed: SEO.company.areaServed.map((country) => ({
    '@type': 'Country',
    name:    country,
  })),
  sameAs: SEO.company.socialProfiles,
  member: [
    {
      '@type': 'OrganizationRole',
      member: {
        '@type':          'Person',
        '@id':            `${SEO.siteUrl}/#person-nmm`,
        name:             SEO.director.name,
        jobTitle:         SEO.director.jobTitle,
        honorificSuffix:  SEO.director.honorific,
        worksFor:         { '@id': `${SEO.siteUrl}/#organization` },
      },
      roleName: 'Director',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nexaPro.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FloatingWhatsApp />
        <main className="flex-1">{children}</main>
        <Footer />
        <StructuredData data={organizationSchema} />
      </body>
    </html>
  );
}
