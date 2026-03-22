export type SolutionCategory =
  | 'hospitality'
  | 'signage'
  | 'airports'
  | 'corporate'
  | 'retail'
  | 'government'

export interface SolutionProduct {
  name: string
  sub: string
  isAuthorised?: boolean  // shows orange dot
}

export interface SolutionVertical {
  id: SolutionCategory
  label: string              // short label for filter tabs
  headline: string           // card h3
  tagline: string            // small uppercase tag above headline
  description: string        // card body paragraph
  href: string               // links to sub-page
  iconPath: string           // SVG path data for the icon
  iconColor: string          // stroke colour for the SVG icon
  iconBg: string             // background tint for icon box
  size: 'featured' | 'standard' | 'mini'
  products?: SolutionProduct[]  // shown in featured card right panel
  authorityNote?: string     // orange badge text (featured only)
}

export const SOLUTIONS: SolutionVertical[] = [
  // ── FEATURED ──────────────────────────────────────────────────
  {
    id: 'hospitality',
    label: 'Hospitality',
    size: 'featured',
    headline: 'Hospitality',
    tagline: '★ Strongest vertical · Reference: Hilton Asaba, Nigeria',
    description:
      'In-room entertainment, IPTV, lobby AV, conference systems, and guest Wi-Fi for hotels and resorts across Africa — powered by LG Pro:Centric, Uniguest, and Guesttek.',
    href: '/solutions/hospitality',
    iconPath:
      'M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-4a3 3 0 016 0v4',
    iconColor: '#7B9AFF',
    iconBg: 'rgba(22,53,212,0.25)',
    products: [
      { name: 'LG Pro:Centric',    sub: 'Hospitality TV platform',       isAuthorised: true  },
      { name: 'Uniguest IPTV',     sub: 'Cloud CMS & guest engagement',  isAuthorised: false },
      { name: 'Guesttek OneView',  sub: 'Hotel Wi-Fi infrastructure',    isAuthorised: false },
      { name: 'Kramer AV',         sub: 'Conference signal management',  isAuthorised: false },
      { name: 'TOA / Alpha',       sub: 'Professional audio systems',    isAuthorised: false },
    ],
    authorityNote: '★ LG authorised representative · English-speaking Africa',
  },

  // ── STANDARD ──────────────────────────────────────────────────
  {
    id: 'signage',
    label: 'Digital signage',
    size: 'standard',
    headline: 'Digital Signage',
    tagline: 'LED · Commercial · Outdoor',
    description:
      'LED video walls, commercial displays, and outdoor screens — powered by our official Unilumin distribution partnership for sub-Saharan Africa and backed by Samsung, Absen, and Displax.',
    href: '/solutions/digital-signage',
    iconPath: 'M2 3h20v14H2zM8 21h8M12 17v4',
    iconColor: '#1635D4',
    iconBg: 'rgba(22,53,212,0.08)',
    products: [
      { name: 'Unilumin LED',   sub: 'Fine-pitch, outdoor, video wall', isAuthorised: true  },
      { name: 'Samsung',        sub: 'The Wall, commercial panels',      isAuthorised: false },
      { name: 'Absen',          sub: 'Rental, fixed, outdoor LED',       isAuthorised: false },
      { name: 'Displax',        sub: 'Touch foil & overlays',            isAuthorised: false },
      { name: 'Aopen',          sub: 'Signage media players',            isAuthorised: false },
      { name: 'VView',          sub: 'CMS & AI analytics',               isAuthorised: false },
    ],
  },

  {
    id: 'corporate',
    label: 'Corporate AV',
    size: 'standard',
    headline: 'Corporate AV / ICT',
    tagline: 'Boardroom · Education · Enterprise',
    description:
      'Boardroom displays, video conferencing, digital signage networks, and enterprise AV infrastructure for the modern African workplace — from single meeting rooms to full campuses.',
    href: '/solutions/corporate',
    iconPath:
      'M2 4h20v16H2zM8 4V2M16 4V2M2 10h20',
    iconColor: '#F25C1A',
    iconBg: 'rgba(242,92,26,0.08)',
    products: [
      { name: 'LG Commercial', sub: 'Meeting room displays',       isAuthorised: true  },
      { name: 'BenQ',          sub: 'Interactive panels, laser PJ', isAuthorised: false },
      { name: 'Kramer',        sub: 'AV-over-IP, switchers',        isAuthorised: false },
      { name: 'VView',         sub: 'Video wall control & CMS',     isAuthorised: false },
      { name: 'Samsung',       sub: 'Flip, corporate signage',       isAuthorised: false },
    ],
  },

  // ── MINI ──────────────────────────────────────────────────────
  {
    id: 'airports',
    label: 'Airports & transport',
    size: 'mini',
    headline: 'FIDS & Passenger Displays',
    tagline: 'Airports & Transport',
    description:
      'Flight information displays, gate signage, wayfinding systems, and passenger-facing digital media for terminals and transit stations.',
    href: '/solutions/airports',
    iconPath:
      'M17.8 19.2L16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9 5.8 7.2l-3 2.9L9 12l-3 3H4l-1 2 3 1 1 3 2-1v-2l3-3 2.2 6.2 2.8-2.8z',
    iconColor: '#1635D4',
    iconBg: 'rgba(22,53,212,0.08)',
  },

  {
    id: 'retail',
    label: 'Retail',
    size: 'mini',
    headline: 'In-Store Digital Signage',
    tagline: 'Retail & Banking',
    description:
      'Retail display networks, window-facing screens, queue management displays, and banking branch signage deployments.',
    href: '/solutions/retail',
    iconPath:
      'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0',
    iconColor: '#059669',
    iconBg: 'rgba(5,150,105,0.08)',
  },

  {
    id: 'government',
    label: 'Government',
    size: 'mini',
    headline: 'Public Sector AV',
    tagline: 'Government & Public',
    description:
      'Command centres, public information displays, PA systems, and AV infrastructure for government buildings and civic spaces.',
    href: '/solutions/government',
    iconPath:
      'M3 21h18M5 21V10M19 21V10M12 21V4M3 10l9-7 9 7',
    iconColor: '#1635D4',
    iconBg: 'rgba(22,53,212,0.08)',
  },
]

// Helpers
export const getFeaturedSolution = () =>
  SOLUTIONS.find((s) => s.size === 'featured')!

export const getStandardSolutions = () =>
  SOLUTIONS.filter((s) => s.size === 'standard')

export const getMiniSolutions = () =>
  SOLUTIONS.filter((s) => s.size === 'mini')

export const ALL_FILTER_TABS = [
  { id: 'all',         label: 'All solutions'       },
  { id: 'hospitality', label: 'Hospitality'         },
  { id: 'signage',     label: 'Digital signage'     },
  { id: 'airports',    label: 'Airports & transport' },
  { id: 'corporate',   label: 'Corporate AV'        },
] as const
