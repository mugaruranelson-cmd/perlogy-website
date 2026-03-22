// src/lib/case-studies-data.ts

export interface CaseStudyPartner {
  name:       string
  role:       string
  dotColor:   string  // brand colour for the partner dot
}

export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudySpec {
  label: string
  value: string
  detail: string
  isFullWidth?: boolean
}

export interface CaseStudy {
  id:            string
  slug:          string           // URL slug
  isFlagship:    boolean          // true = Uhuru Gardens
  name:          string           // short name for cards
  fullName:      string           // full formal name
  location:      string           // city, country
  locationShort: string           // country only
  sector:        string           // for tags
  client:        string
  projectValue:  string           // formatted: 'USD 1.4M'
  completedYear: string
  headline:      string           // hero H1
  heroTagline:   string           // orange pill text above H1
  recordClaim:   string           // e.g. 'Largest LCD video walls in East Africa'
  heroParagraph: string           // hero subtext
  challenge:     string           // full paragraph
  ourRole:       string           // full paragraph
  result:        string           // full paragraph
  directorQuote: string           // pull quote
  directorName:  string
  directorTitle: string
  stats:         CaseStudyStat[]
  specs:         CaseStudySpec[]
  partners:      CaseStudyPartner[]
  seoTitle:      string
  seoDescription: string
  videoId?:      string           // YouTube video ID (if available)
  // Cross-site thumbnail content (used in pull cards)
  cardHeadline:  string           // shorter headline for cards
  cardBody:      string           // 1-2 sentence card description
}

export const CASE_STUDIES: CaseStudy[] = [

  // ─── FLAGSHIP: UHURU GARDENS MUSEUM ──────────────────────────

  {
    id:            'uhuru-gardens',
    slug:          'uhuru-gardens-museum',
    isFlagship:    true,
    name:          'Uhuru Gardens Museum',
    fullName:      'Uhuru Gardens Museum Audio-Visual System',
    location:      'Nairobi, Kenya',
    locationShort: 'Kenya',
    sector:        'Heritage & Culture',
    client:        'Uhuru Gardens National Monument',
    projectValue:  'USD 1.4M',
    completedYear: '2024',
    headline:
      'Uhuru Gardens Museum — East Africa\'s most significant cultural AV installation.',
    heroTagline:
      '★ Flagship project · USD 1.4M · Largest LCD video walls in East Africa',
    recordClaim:   'Largest LCD video walls in East Africa',
    heroParagraph:
      'The design and implementation of a landmark USD 1.4 million audio-visual system ' +
      'at Uhuru Gardens National Heritage Site, Nairobi — featuring the largest LCD video ' +
      'walls in East Africa, a 100m² transparent LED film, and Displax interactive touch ' +
      'technology for immersive heritage storytelling.',
    challenge:
      'Uhuru Gardens is Kenya\'s most significant national heritage site — the location ' +
      'where independence was proclaimed on 12 December 1963. The brief required an ' +
      'audio-visual system that could serve multiple, competing demands simultaneously: ' +
      'immersive exhibition experiences for daily visitors, infrastructure for national ' +
      'state ceremonies, and a permanent heritage storytelling platform that would ' +
      'endure decades of use. The scale of the LED and LCD requirements, combined with ' +
      'the architectural sensitivity of a protected national monument, made this one of ' +
      'the most technically demanding projects ever undertaken in East Africa.',
    ourRole:
      'Perlogy Technologies led the design and technology specification for the entire ' +
      'audio-visual system, working in authorised partnership with LG Electronics and ' +
      'executing alongside Digital Mara Kenya. Under the leadership of Director Nelson ' +
      'Mandela Mugarura MBA, MSc, BSc, Perlogy specified and supplied the full LG display ' +
      'technology stack — including the 12×5 configuration of LG 1.8mm pixel-pitch 55-inch ' +
      'commercial displays forming East Africa\'s largest LCD video wall, the 100m² LG ' +
      'Transparent LED Film installation, and the integration of Displax capacitive touch ' +
      'technology across the video wall surface for interactive exhibition experiences.',
    result:
      'The completed system delivers a fully immersive, modern visual environment capable ' +
      'of supporting permanent exhibitions, temporary cultural programmes, and state-level ' +
      'national events. The 12×5 LCD video wall — the largest of its kind in East Africa — ' +
      'anchors the main exhibition space, while the 100m² transparent LED film creates ' +
      'a landmark architectural feature visible from both inside and outside the facility. ' +
      'The Displax touch integration transforms the video wall into an interactive heritage ' +
      'platform, allowing visitors to engage directly with Kenya\'s independence story. ' +
      'This installation sets a new benchmark for what is possible in cultural AV ' +
      'across the African continent.',
    directorQuote:
      'Uhuru Gardens is where Kenya\'s independence story lives. Our responsibility was ' +
      'to build a technology system worthy of that story — one that would inspire visitors ' +
      'for generations and demonstrate that Africa\'s cultural institutions deserve ' +
      'world-class technology.',
    directorName:  'Nelson Mandela Mugarura',
    directorTitle: 'Director, Perlogy Technologies LLC · MBA, MSc, BSc',
    stats: [
      { value: 'USD 1.4M',  label: 'Project value'              },
      { value: '12×5',      label: 'LCD video wall (LG 1.8mm)'  },
      { value: '100m²',     label: 'Transparent LED film'       },
      { value: '55"',       label: 'Display modules'            },
      { value: '#1',        label: 'Largest in East Africa'      },
    ],
    specs: [
      {
        label:  'LCD Video Wall',
        value:  '12×5 LG · 1.8mm pixel pitch',
        detail: '60 × 55-inch LG commercial displays in a 12-wide by 5-tall ' +
                'configuration. At 1.8mm pixel pitch, this is the highest-resolution ' +
                'large-format LCD video wall installation in East Africa.',
      },
      {
        label:  'Transparent LED Film',
        value:  '100m² LG Transparent LED',
        detail: 'Full-surface transparent LED film enabling see-through digital ' +
                'content overlay on architectural glass — creating a landmark ' +
                'visual feature visible from both inside and outside the facility.',
      },
      {
        label:  'Interactive Technology',
        value:  'Displax Capacitive Touch',
        detail: 'The LCD video wall is enhanced with Displax capacitive touch ' +
                'foil technology, enabling multi-touch interactive exhibition ' +
                'experiences directly on the wall surface.',
      },
      {
        label:  'Project Lead',
        value:  'Nelson Mandela Mugarura',
        detail: 'Director, Perlogy Technologies LLC · MBA, MSc, BSc. ' +
                'Led the full design, specification, and implementation process.',
      },
      {
        label:       'Application & Use',
        value:       'Exhibitions · National events · Heritage storytelling',
        detail:      'Uhuru Gardens National Heritage Site, Nairobi, Kenya — ' +
                     'Kenya\'s national independence memorial site. The system ' +
                     'serves permanent exhibitions, state ceremonies, and ' +
                     'public heritage programming.',
        isFullWidth: true,
      },
    ],
    partners: [
      { name: 'LG Electronics',   role: 'Display technology partner (authorised)', dotColor: '#A50034' },
      { name: 'Displax',          role: 'Touch technology integration',            dotColor: '#E84118' },
      { name: 'Digital Mara Kenya', role: 'Implementation & commissioning partner', dotColor: '#1635D4' },
    ],
    seoTitle:
      'Uhuru Gardens Museum AV System | USD 1.4M | Perlogy Technologies',
    seoDescription:
      'Perlogy Technologies designed and implemented East Africa\'s largest LCD video ' +
      'wall installation at Uhuru Gardens Museum, Nairobi — a USD 1.4M project featuring ' +
      'LG 1.8mm displays, 100m² transparent LED film, and Displax interactive touch.',
    cardHeadline:
      'USD 1.4M · East Africa\'s largest LCD video walls — Uhuru Gardens Museum, Nairobi.',
    cardBody:
      'A landmark AV installation at Kenya\'s national heritage site — 12×5 LG 1.8mm ' +
      'video wall, 100m² transparent LED film, and Displax touch technology.',
  },

  // ─── REFERENCE: DOUBLETREE BY HILTON ASABA ────────────────────

  {
    id:            'hilton-asaba',
    slug:          'hilton-asaba',
    isFlagship:    false,
    name:          'DoubleTree by Hilton Asaba',
    fullName:      'DoubleTree by Hilton — In-Room Entertainment System',
    location:      'Asaba, Nigeria',
    locationShort: 'Nigeria',
    sector:        'Hospitality',
    client:        'DoubleTree by Hilton',
    projectValue:  'Confidential',
    completedYear: '2023',
    headline:
      '220 LG Hospitality TVs. DoubleTree by Hilton Asaba. On time. Hilton-approved.',
    heroTagline:   'Hospitality · Nigeria · LG Pro:Centric',
    recordClaim:   '',
    heroParagraph:
      'Full in-room display supply and technical support for the DoubleTree by Hilton ' +
      'in Asaba, Nigeria. 220 LG Pro:Centric hospitality televisions delivered, ' +
      'commissioned, and signed off to Hilton brand standards.',
    challenge:
      'The DoubleTree by Hilton in Asaba required a consistent, internationally ' +
      'standardised in-room entertainment system across 220 rooms on a timeline ' +
      'matching the property\'s opening schedule. The SI partner needed a supply ' +
      'partner who could guarantee stock, support the technical specification, and ' +
      'provide reliable lead times for a high-profile international brand deployment.',
    ourRole:
      'Perlogy supplied the full complement of LG Pro:Centric hospitality televisions ' +
      'and provided technical advisory support throughout the specification phase. ' +
      'We worked directly with the SI partner — not the hotel — ensuring the integrator ' +
      'retained full ownership of the client relationship throughout.',
    result:
      '220 LG Hospitality TVs delivered on time. Commissioned successfully across all ' +
      '220 rooms. The property opened to Hilton brand standards, and the SI partner ' +
      'built a track record opening doors to further Hilton-group projects across West Africa.',
    directorQuote:
      'This project demonstrated exactly how the Perlogy model works — we supplied, ' +
      'we supported, and we stayed out of the client relationship. The integrator won ' +
      'the project, delivered it, and grew their business as a result.',
    directorName:  'Nelson Mandela Mugarura',
    directorTitle: 'Director, Perlogy Technologies LLC',
    stats: [
      { value: '220',    label: 'LG Pro:Centric TVs'  },
      { value: '100%',   label: 'On-time delivery'    },
      { value: 'Hilton', label: 'Brand standard met'  },
      { value: 'Nigeria', label: 'West Africa'        },
    ],
    specs: [
      {
        label:  'Product',
        value:  'LG Pro:Centric Series',
        detail: 'LG\'s professional hospitality TV platform, designed for hotel ' +
                'environments with IPTV integration and centralised management.',
      },
      {
        label:  'Quantity',
        value:  '220 units',
        detail: 'Full property supply — all guest rooms and suites.',
      },
    ],
    partners: [
      { name: 'LG Electronics', role: 'Display technology (authorised)', dotColor: '#A50034' },
    ],
    seoTitle:
      'DoubleTree by Hilton Asaba — LG Hospitality TV Supply | Perlogy',
    seoDescription:
      '220 LG Pro:Centric hospitality TVs supplied and commissioned for DoubleTree ' +
      'by Hilton Asaba, Nigeria. Delivered on time to Hilton brand standards by Perlogy Technologies.',
    cardHeadline:
      '220 LG Hospitality TVs. DoubleTree by Hilton Asaba. On time.',
    cardBody:
      'Full in-room display supply for DoubleTree by Hilton in Asaba, Nigeria. ' +
      'Delivered on schedule to Hilton brand standards.',
  },
]

// Helpers
export const getFlagshipCaseStudy = () =>
  CASE_STUDIES.find((cs) => cs.isFlagship)!

export const getAllCaseStudies = () => CASE_STUDIES

export const getCaseStudyBySlug = (slug: string) =>
  CASE_STUDIES.find((cs) => cs.slug === slug)
