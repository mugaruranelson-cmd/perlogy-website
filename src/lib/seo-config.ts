// src/lib/seo-config.ts
// Single source of truth for all SEO defaults

export const SEO = {
  // ── Site identity ──────────────────────────────
  siteName:      'Perlogy Technologies',
  siteUrl:       'https://perlogy.co.ke',
  locale:        'en_US',
  twitterHandle: '@perlogyT',

  // ── Default metadata ───────────────────────────
  defaultTitle:
    'Perlogy Technologies | ProAV & ICT Distribution Across Africa',
  defaultDescription:
    'Perlogy Technologies distributes world-class ProAV and ICT technology ' +
    'across English-speaking Africa — through authorised partnerships with ' +
    'LG Electronics and Unilumin. Exclusively through SI partners.',

  // ── Title template ─────────────────────────────
  titleTemplate: '%s | Perlogy Technologies',

  // ── Default OG image ───────────────────────────
  defaultOgImage: '/opengraph-image.png',

  // ── Company details (structured data) ──────────
  company: {
    name:        'Perlogy Technologies LLC',
    legalName:   'Perlogy Technologies LLC',
    description:
      'ProAV and ICT distribution company serving English-speaking Africa ' +
      'through authorised partnerships with LG Electronics and Unilumin, ' +
      'and a portfolio of 14 leading technology brands.',
    foundingYear:  '2019',
    email:         'info@perlogy.africa',
    phone:         '+254792651241',
    address: {
      street:      'Jebel Ali',
      city:        'Dubai',
      country:     'United Arab Emirates',
      countryCode: 'AE',
    },
    logo:          'https://perlogy.co.ke/perlogy_logo.svg',
    socialProfiles: [
      'https://www.linkedin.com/company/perlogy/',
      'https://x.com/perlogyT',
      'https://www.facebook.com/PerlogyTechnologies',
    ],
    areaServed: [
      'Kenya', 'Nigeria', 'Ghana', 'South Africa',
      'Uganda', 'Tanzania', 'Zimbabwe', 'Rwanda', 'Zambia',
    ],
  },

  // ── Director ───────────────────────────────────
  director: {
    name:       'Nelson Mandela Mugarura',
    jobTitle:   'Director',
    honorific:  'MBA, MSc, BSc',
    company:    'Perlogy Technologies LLC',
    linkedin:   '',
  },
} as const

// ── Helper: build canonical URL ──────────────────
export function buildCanonical(path: string): string {
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '')
  return `${SEO.siteUrl}${cleanPath}`
}

// ── Helper: build page title ─────────────────────
export function buildTitle(pageTitle: string): string {
  return SEO.titleTemplate.replace('%s', pageTitle)
}
