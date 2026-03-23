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

  // ─── Embassy in Nairobi ──────────────────────────────────────

  {
    id:            'embassy-nairobi',
    slug:          'embassy-nairobi',
    isFlagship:    false,
    name:          'Embassy in Nairobi',
    fullName:      'Embassy in Nairobi — Unilumin LSK P2.9 Outdoor LED Display',
    location:      'Nairobi, Kenya',
    locationShort: 'Kenya',
    sector:        'Digital Signage',
    client:        'Embassy in Nairobi, Kenya',
    projectValue:  'USD 150,000',
    completedYear: '2025',
    headline:
      'Embassy in Nairobi — Kenya\'s first ultra-slim curved outdoor LED display.',
    heroTagline:
      'Digital Signage · Kenya · Unilumin LSK P2.9',
    recordClaim:
      'Kenya\'s first Unilumin LSK P2.9 curved outdoor LED installation',
    heroParagraph:
      'The design and supply of Kenya\'s first Unilumin P2.9 curved outdoor ' +
      'LED display — installed in an outdoor auditorium at an Embassy in ' +
      'Nairobi. 28 square metres, 7,000mm × 4,000mm, USD 150,000. Supplied ' +
      'by Perlogy Technologies and installed by a local Kenyan system integrator.',
    challenge:
      'The brief required a large-format outdoor LED display capable of ' +
      'operating reliably in Nairobi\'s outdoor environment — exposed to ' +
      'direct sunlight, rain, dust, and variable temperatures — while ' +
      'delivering high-definition image quality worthy of a prestigious ' +
      'diplomatic installation. The curved configuration added a further ' +
      'design challenge, requiring a custom engineering approach to ensure ' +
      'seamless panel alignment across the full 28 SQM screen area.',
    ourRole:
      'Perlogy Technologies, operating as the authorised Unilumin distributor ' +
      'for sub-Saharan Africa, designed the display solution and specified the ' +
      'Unilumin LSK P2.9 as the correct model for this installation. Perlogy ' +
      'supplied the full hardware complement directly to the local Kenyan ' +
      'system integrator and provided full technical advisory support throughout ' +
      'specification, procurement, and commissioning.',
    result:
      'The Unilumin LSK P2.9 curved outdoor LED display was successfully ' +
      'installed and commissioned at the Embassy outdoor auditorium in ' +
      'Nairobi — Kenya\'s first installation of this product at this scale. ' +
      'The 28 SQM display delivers ultra-high-definition imagery at 3,840Hz ' +
      'refresh rate and 14-bit grayscale, with IP69K waterproof protection ' +
      'ensuring reliable operation in all weather conditions.',
    directorQuote:
      'We are proud to have delivered Kenya\'s first installation of this ' +
      'calibre — a project that demonstrates exactly what is possible when ' +
      'the right technology partners, the right manufacturer, and a skilled ' +
      'local SI work together across the African market.',
    directorName:  'Nelson Mandela Mugarura',
    directorTitle: 'Director, Perlogy Technologies LLC · MBA, MSc, BSc',
    stats: [
      { value: 'USD 150K',    label: 'Project value'      },
      { value: '28 SQM',      label: 'Screen area'        },
      { value: '7000×4000mm', label: 'Dimensions'         },
      { value: 'P2.9',        label: 'Pixel pitch'        },
      { value: 'IP69K',       label: 'Protection rating'  },
    ],
    specs: [
      {
        label:  'Display model',
        value:  'Unilumin LSK Series — P2.9',
        detail:
          'LSK Series outdoor HD LED. Available in P2.6, P2.9, P3.9, P4.8, ' +
          'and P5.9. Cabinet sizes: 500mm × 1,000mm and 500mm × 750mm. The ' +
          'P2.9 was selected for this installation for its combination of ' +
          'high resolution, outdoor durability, and curved configuration support.',
      },
      {
        label:  'Screen dimensions',
        value:  '7,000mm × 4,000mm — 28 SQM',
        detail:
          'Custom curved configuration engineered to the architectural ' +
          'requirements of the outdoor auditorium setting at the Embassy grounds.',
      },
      {
        label:  'Cabinet',
        value:  '500×1,000mm · 82mm thick · 14.2 kg/panel',
        detail:
          'Ultra-slim, ultra-light cabinet. At 82mm thickness and 14.2kg per ' +
          'panel, the LSK Series significantly reduces transport and labour ' +
          'costs for the installing SI partner compared to conventional ' +
          'outdoor LED cabinets.',
      },
      {
        label:  'Image quality',
        value:  '3,840Hz refresh rate · 14-bit grayscale',
        detail:
          'Cinema-quality outdoor imagery with zero visible flicker even in ' +
          'direct Nairobi sunlight. 14-bit grayscale produces 16× more tonal ' +
          'gradations than standard 10-bit outdoor LED products.',
      },
      {
        label:  'Protection rating',
        value:  'IP69K — highest available',
        detail:
          'Tested at 80–100 bar water pressure, 80°C water temperature, ' +
          'at multiple spray angles. Complete protection against dust, water ' +
          'ingress, and high-pressure wash-down in all conditions.',
      },
      {
        label:       'Application',
        value:       'Outdoor auditorium · Embassy grounds · Nairobi, Kenya',
        detail:
          'Permanent outdoor installation serving official presentations, ' +
          'events, and public programming at a diplomatic facility in Nairobi. ' +
          'Designed for continuous operation across all seasons.',
        isFullWidth: true,
      },
    ],
    partners: [
      {
        name:     'Unilumin Group',
        role:     'LED display manufacturer · LSK Series',
        dotColor: '#1635D4',
      },
      {
        name:     'Perlogy Technologies LLC',
        role:     'Authorised Unilumin distributor · Design & supply',
        dotColor: '#F25C1A',
      },
      {
        name:     'Local Kenyan SI',
        role:     'Installation & commissioning partner',
        dotColor: '#059669',
      },
    ],
    seoTitle:
      'Embassy in Nairobi LED Display | Unilumin LSK P2.9 | Perlogy Kenya',
    seoDescription:
      'Perlogy Technologies supplied Kenya\'s first Unilumin LSK P2.9 curved ' +
      'outdoor LED display for an Embassy in Nairobi — 28 SQM, 7,000mm × ' +
      '4,000mm, USD 150,000, IP69K rated. Installed by a local Kenyan SI.',
    cardHeadline:
      'Kenya\'s first Unilumin LSK P2.9 outdoor LED — Embassy in Nairobi.',
    cardBody:
      'A 28 SQM curved outdoor LED installation at an Embassy in Nairobi. ' +
      'USD 150,000 · IP69K · 3,840Hz · designed and supplied by Perlogy.',
  },
]

// Helpers
export const getFlagshipCaseStudy = () =>
  CASE_STUDIES.find((cs) => cs.isFlagship)!

export const getAllCaseStudies = () => CASE_STUDIES

export const getCaseStudyBySlug = (slug: string) =>
  CASE_STUDIES.find((cs) => cs.slug === slug)
