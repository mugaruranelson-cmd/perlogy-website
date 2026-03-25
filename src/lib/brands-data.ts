export type BrandTier = 'authorised' | 'partner'

export type BrandCategory =
  | 'displays-led'
  | 'hospitality-tech'
  | 'audio'
  | 'av-connectivity'
  | 'software-cms'

export interface Brand {
  id: string
  name: string
  domain: string           // used for Brandfetch API calls
  tier: BrandTier
  categories: BrandCategory[]
  tagline: string          // short descriptor shown under name
  description: string      // 2–3 sentence description for card body
  fullDescription: string  // full paragraph for modal/detail view
  products: string[]       // key product lines (shown as tags)
  geoScope: string         // geographic availability statement
  authorityNote?: string   // only for tier: 'authorised'
  websiteUrl: string       // for reference (do NOT link out — users stay on Perlogy)
}

export const BRANDS: Brand[] = [
  // ─── AUTHORISED REPRESENTATIVES ───────────────────────────────

  {
    id: 'lg',
    name: 'LG Electronics',
    domain: 'lge.com',
    tier: 'authorised',
    categories: ['displays-led', 'hospitality-tech'],
    tagline: 'Professional Display & Hospitality Solutions',
    description:
      'The world\'s leading manufacturer of professional displays and hospitality AV technology. Perlogy holds full authorised representative status for LG\'s B2B portfolio across English-speaking Africa.',
    fullDescription:
      'LG Electronics is the world\'s leading manufacturer of professional displays and hospitality technology. As LG\'s authorised representative for English-speaking Africa, Perlogy provides SI partners with direct access to the complete LG B2B product range — including the Pro:Centric hospitality TV platform, OLED commercial displays, LED-based video wall systems, and the full LG Information Display range — with genuine manufacturer warranty, technical support, and competitive regional pricing. This authorised status means Perlogy partners receive official LG product training, marketing support, and direct escalation routes for technical issues.',
    products: [
      'Pro:Centric Hospitality TVs',
      'OLED Commercial Displays',
      'LED Video Walls',
      'Digital Signage',
      'Interactive Displays',
      'Transparent OLED',
    ],
    geoScope:
      'Authorised representative for English-speaking East Africa (Kenya, Uganda, Tanzania), West Africa (Nigeria, Ghana), and Southern Africa (South Africa, Zimbabwe, Zambia). Direct manufacturer pricing and warranty support across all markets.',
    authorityNote:
      'Perlogy holds full authorised representative status for LG Information Display and LG Hospitality products across English-speaking Africa.',
    websiteUrl: 'https://www.lg-informationdisplay.com',
  },

  {
    id: 'unilumin',
    name: 'Unilumin',
    domain: 'unilumin.com',
    tier: 'authorised',
    categories: ['displays-led'],
    tagline: 'LED Display Technology — Indoor · Outdoor · Fine-Pitch',
    description:
      'One of the world\'s top-three LED display manufacturers. Perlogy is the authorised distributor for Unilumin across sub-Saharan Africa, with regional stock and full technical support.',
    fullDescription:
      'Unilumin is one of the world\'s top three LED display manufacturers, with over 3,000 patents and installations in 130+ countries. As Unilumin\'s authorised distributor for sub-Saharan Africa, Perlogy delivers the complete LED product range to English-speaking African markets — from UpadIII fine-pitch indoor LED for broadcast studios and control rooms, to UphixS Series outdoor high-brightness panels for billboards and stadiums. Regional stock is maintained for shorter lead times, with full technical support from commissioning through warranty. Unilumin products are trusted by major broadcasters, international event companies, and premium retail brands worldwide.',
    products: [
      'Fine-Pitch Indoor LED',
      'Outdoor LED Panels',
      'LED Video Walls',
      'Broadcast LED',
      'Rental & Events LED',
      'Stadium LED',
      'Control Room LED',
    ],
    geoScope:
      'Authorised distributor for sub-Saharan English-speaking Africa. Coverage includes East Africa (Kenya, Uganda, Tanzania), West Africa (Nigeria, Ghana), and Southern Africa (South Africa, Zambia, Zimbabwe). Regional stock maintained for shorter lead times.',
    authorityNote:
      'Perlogy holds full authorised distribution rights for Unilumin LED products across sub-Saharan Africa.',
    websiteUrl: 'https://www.unilumin.com',
  },

  {
    id: 'lampro',
    name: 'Lampro',
    domain: 'lampro.net',
    tier: 'authorised',
    categories: ['displays-led'],
    tagline: 'Professional LED Display Solutions — A Unilumin Brand',
    description:
      'A leading manufacturer of LED display solutions and a subsidiary of Unilumin. Perlogy holds direct authority to distribute and represent Lampro\'s professional LED portfolio across our markets.',
    fullDescription:
      'Lampro, a flagship brand under the Unilumin Group, specializes in providing high-quality LED display solutions for a wide range of applications, including commercial display, high-end retail, and corporate environments. As an authorised representative, Perlogy provides direct access to Lampro\'s innovative LED technology, ensuring competitive pricing, genuine manufacturer support, and specialized technical expertise for our partners across Africa. Lampro combines Unilumin\'s world-class engineering with a focused portfolio designed for versatility and performance.',
    products: [
      'Commercial LED Displays',
      'Retail LED Solutions',
      'Fine-Pitch LED',
      'Outdoor LED',
      'Indoor LED Cabinets',
    ],
    geoScope:
      'Directly represented and distributed by Perlogy across English-speaking East, West, and Southern Africa. Full manufacturer backing and technical support.',
    authorityNote:
      'Perlogy holds direct authority to represent and distribute Lampro LED solutions across our markets.',
    websiteUrl: 'https://www.lampro.net/',
  },

  // ─── PORTFOLIO PARTNERS ───────────────────────────────────────

  {
    id: 'samsung',
    name: 'Samsung Electronics',
    domain: 'samsung.com',
    tier: 'partner',
    categories: ['displays-led'],
    tagline: 'Commercial Displays & Signage',
    description:
      'Samsung\'s B2B display division offers one of the broadest commercial display portfolios — from The Wall MicroLED to Flip interactive panels and QM/QH-series commercial signage.',
    fullDescription:
      'Samsung\'s B2B display division delivers world-class commercial display technology across retail, corporate, and hospitality environments. Key product ranges distributed by Perlogy include The Wall series (modular MicroLED for prestige installations), Flip interactive displays for collaborative workspaces, and the QM/QH series commercial-grade panels designed for permanent 24/7 signage deployments. Samsung\'s commercial displays are engineered for reliability, colour accuracy, and seamless integration into professional AV infrastructure.',
    products: [
      'The Wall MicroLED',
      'Flip Interactive Displays',
      'QM/QH Commercial Panels',
      'Retail Signage',
      'Corporate Displays',
      'Video Walls',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.samsung.com',
  },

  {
    id: 'benq',
    name: 'BenQ',
    domain: 'benq.com',
    tier: 'partner',
    categories: ['displays-led', 'av-connectivity'],
    tagline: 'Interactive Displays & Professional Projection',
    description:
      'A global leader in professional projection and interactive display technology. BenQ\'s portfolio covers education, corporate, and large-venue AV with laser projectors and smart boards.',
    fullDescription:
      'BenQ is a global leader in professional projection and interactive display technology. The BenQ portfolio available through Perlogy includes InstaShow wireless presentation systems, Board smart collaborative displays for education and corporate environments, high-brightness laser projectors for large venues, and the RP series large-format interactive flat panels widely used in education institutions and corporate training facilities across Africa. BenQ products are specified for environments where image quality, reliability, and ease of use are paramount.',
    products: [
      'Interactive Flat Panels',
      'Laser Projectors',
      'InstaShow Wireless',
      'Board Smart Displays',
      'Education Displays',
      'Corporate AV',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.benq.com',
  },

  {
    id: 'absen',
    name: 'Absen',
    domain: 'absen.com',
    tier: 'partner',
    categories: ['displays-led'],
    tagline: 'Professional LED Display Solutions',
    description:
      'World-leading LED display manufacturer with over 20 years of expertise across fine-pitch, rental, outdoor, and broadcast LED applications globally.',
    fullDescription:
      'Absen is a world-leading LED display manufacturer with over 20 years of expertise and installations across 130+ countries. Their product range covers the full spectrum of professional LED applications — from high-resolution fine-pitch panels for broadcast and corporate control rooms, to ruggedised rental and staging LED for live events, to high-brightness outdoor products for billboards and stadium perimeters. Absen products are trusted by major broadcasters, international event production companies, and large-format outdoor advertising operators.',
    products: [
      'Fine-Pitch LED',
      'Rental & Staging LED',
      'Outdoor LED',
      'Broadcast LED',
      'Stadium & Sport',
      'Corporate LED',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.absen.com',
  },

  {
    id: 'displax',
    name: 'Displax',
    domain: 'displax.com',
    tier: 'partner',
    categories: ['displays-led', 'av-connectivity'],
    tagline: 'Capacitive Touch Technology',
    description:
      'Capacitive touch foil and overlay solutions that transform any glass or display surface into a multi-touch interactive experience for retail, kiosks, and corporate environments.',
    fullDescription:
      'Displax manufactures capacitive touch foil and overlay solutions that transform any surface — glass, acrylic, or display — into a multi-touch interactive experience. Their Skin Ultra touch foil supports up to 100 simultaneous touch points and works behind glass up to 6mm thick, making it ideal for retail interactive windows, museum kiosks, wayfinding installations, and corporate interactive walls. No visible sensor lines — the touch integration is optically invisible. Displax products allow integrators to add interactivity to existing or new installations without replacing the display substrate.',
    products: [
      'Touch Foil (Skin Ultra)',
      'Touch Overlay',
      'Retail Interactive',
      'Kiosk Touch',
      'Museum Installations',
      'Interactive Walls',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.displax.com',
  },

  {
    id: 'kramer',
    name: 'Kramer Electronics',
    domain: 'kramerav.com',
    tier: 'partner',
    categories: ['av-connectivity'],
    tagline: 'AV Signal Management & Connectivity',
    description:
      'The global standard for professional AV signal management. Kramer\'s portfolio of switchers, scalers, extenders, and AV-over-IP solutions underpins AV infrastructure across every vertical.',
    fullDescription:
      'Kramer Electronics is the global standard for professional AV signal management. Their portfolio — including switchers, scalers, AV-over-IP transmitters and receivers, extenders, and Kramer Control room control systems — is found in boardrooms, lecture theatres, hotel conference centres, and government facilities worldwide. Kramer products form the backbone of most professional AV infrastructure installations and are a staple specification for integrators across every vertical Perlogy serves. Kramer\'s AV-over-IP solutions are particularly well-suited for large-venue and multi-room deployments common in African hospitality and corporate projects.',
    products: [
      'AV-over-IP',
      'Matrix Switchers',
      'Scalers',
      'Signal Extenders',
      'Kramer Control',
      'Signal Distribution',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.kramerav.com',
  },

  {
    id: 'vview',
    name: 'VView',
    domain: 'vviewtech.com',
    tier: 'partner',
    categories: ['av-connectivity', 'software-cms'],
    tagline: 'Unified AV Platform — CMS, Video Wall & AI Analytics',
    description:
      'A software-driven platform combining video wall control, content management, AV-over-IP, and real-time AI demography analytics in a single unified solution.',
    fullDescription:
      'VView is a software-defined AV platform that unifies video wall control, content management, AV-over-IP streaming, and real-time AI demography analytics into a single solution. It is particularly powerful in retail and corporate environments where dynamic content needs to respond to live audience data — VView\'s AI engine detects audience demographics in real time and adjusts displayed content automatically. One platform replacing multiple separate software systems, with a single dashboard for operators to manage content, monitor displays, and review analytics across all locations.',
    products: [
      'Video Wall CMS',
      'AV-over-IP Streaming',
      'AI Audience Analytics',
      'Content Automation',
      'Multi-Source Display',
      'Dynamic Scheduling',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://vviewtech.com',
  },

  {
    id: 'uniguest',
    name: 'Uniguest',
    domain: 'uniguest.com',
    tier: 'partner',
    categories: ['hospitality-tech', 'software-cms'],
    tagline: 'Hotel IPTV, Digital Signage & Guest Engagement',
    description:
      'The world\'s most trusted cloud-based IPTV and guest engagement platform. Powers 1.1 million+ hotel room endpoints across 150+ countries. Works natively with LG Pro:Centric hardware.',
    fullDescription:
      'Uniguest is the world\'s most trusted provider of cloud-based IPTV, digital signage, and guest engagement technology for the hospitality sector. Their platform powers 1.1 million+ hotel room endpoints globally across 150+ countries. For African hotel operators and the system integrators who serve them, Uniguest provides the software platform that sits behind Perlogy\'s LG Pro:Centric hardware — delivering IPTV headend, VOD, interactive guest services, digital signage CMS, and staff communication tools from a single cloud platform. The LG + Uniguest combination is Perlogy\'s recommended complete hospitality AV stack.',
    products: [
      'IPTV Headend',
      'VOD Platform',
      'Guest Engagement',
      'Signage CMS',
      'Staff Communications',
      'Cloud Management',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa. Works natively with LG Pro:Centric hospitality TV hardware.',
    websiteUrl: 'https://uniguest.com',
  },

  {
    id: 'guesttek',
    name: 'Guesttek',
    domain: 'guesttek.com',
    tier: 'partner',
    categories: ['hospitality-tech'],
    tagline: 'Hotel Internet Infrastructure & Guest Connectivity',
    description:
      'High-performance hotel Wi-Fi infrastructure and guest connectivity solutions. Guesttek\'s OneView platform delivers enterprise-grade bandwidth management for hospitality properties of all sizes.',
    fullDescription:
      'Guesttek provides high-performance internet infrastructure and guest connectivity solutions purpose-built for the hospitality industry. Their OneView platform delivers enterprise-grade Wi-Fi management, in-room entertainment connectivity, and bandwidth management for hotel properties of all sizes. For African hotels upgrading their connectivity infrastructure, Guesttek provides the network backbone that modern guests and operators expect — bandwidth-on-demand, BYOD support, property-wide coverage, and centralised remote management. Guesttek\'s technology is particularly relevant for new hotel builds and refurbishments where high-speed guest internet is a core expectation.',
    products: [
      'OneView Platform',
      'Hotel Wi-Fi',
      'Bandwidth Management',
      'In-Room Connectivity',
      'BYOD Support',
      'Centralised Management',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://guesttek.com',
  },

  {
    id: 'toa',
    name: 'TOA Electronics',
    domain: 'toaelectronics.com',
    tier: 'partner',
    categories: ['audio'],
    tagline: 'Professional Public Address & Audio Systems',
    description:
      'The global benchmark in professional PA and sound systems for over 80 years. TOA covers the full range from hotel background music to airport emergency voice evacuation.',
    fullDescription:
      'TOA Electronics has been the global benchmark in professional public address and sound systems for over 80 years. Their portfolio covers the full range of commercial audio applications — from background music and paging for hotels and retail, to emergency voice evacuation systems for airports and transit hubs, to professional conference and installed sound for corporate and government facilities. TOA products are certified to international life-safety standards, making them the specification of choice for any project where reliable audio is mission-critical. TOA\'s reliability and longevity in the market make them a trusted specification for African integrators delivering complex, multi-zone audio environments.',
    products: [
      'Public Address Systems',
      'Background Music',
      'Emergency Voice Evacuation',
      'Conference Audio',
      'Paging Systems',
      'Airport Audio',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.toaelectronics.com',
  },

  {
    id: 'alpha',
    name: 'Alpha Acoustics',
    domain: 'alphacoustics.com',
    tier: 'partner',
    categories: ['audio'],
    tagline: 'Professional Loudspeakers & Installed Audio',
    description:
      'Precision-engineered professional loudspeakers and installation audio for commercial, hospitality, and high-fidelity environments. Pairs naturally with TOA electronics for complete audio deployments.',
    fullDescription:
      'Alpha Acoustics manufactures precision-engineered professional loudspeakers and installed audio solutions for commercial, hospitality, and high-fidelity environments. Their product range is designed for demanding installations where audio quality, reliability, and aesthetic integration matter — hotel lobbies, boardrooms, high-end restaurants, corporate atriums, and retail flagships. Alpha Acoustics products pair naturally with TOA electronics infrastructure for complete professional audio deployments, giving integrators a coherent full-chain solution from amplifier to loudspeaker through Perlogy.',
    products: [
      'Professional Loudspeakers',
      'Installed Audio',
      'Hotel Lobby Audio',
      'Boardroom Sound',
      'Retail Audio',
      'High-Fidelity Installation',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://alphacoustics.com',
  },

  {
    id: 'aopen',
    name: 'Aopen',
    domain: 'aopen.com',
    tier: 'partner',
    categories: ['av-connectivity', 'software-cms'],
    tagline: 'Digital Signage Media Players & Edge Computing',
    description:
      'Compact, ruggedised media players and edge computing appliances for 24/7 commercial display environments. Chrome OS and Windows-based players for retail, QSR, and hospitality signage.',
    fullDescription:
      'Aopen specialises in compact, ruggedised digital signage media players and edge computing appliances designed for 24/7 commercial operation. Their Chrome OS and Windows-based signage players are used behind screens in retail, QSR, corporate, and hospitality deployments globally. Compact enough to mount behind any display, powerful enough to drive 4K content, and built for African power environments — Aopen players are the go-to for signage infrastructure that needs to be reliable and unattended. Aopen players integrate with VView and Uniguest software platforms, making them a natural fit in Perlogy\'s complete signage stack.',
    products: [
      'Chrome OS Signage Players',
      'Windows Media Players',
      '4K Content Playback',
      'Edge Computing',
      '24/7 Commercial',
      'Compact Form Factor',
    ],
    geoScope:
      'Available through Perlogy to registered SI partners in English-speaking East, West, and Southern Africa.',
    websiteUrl: 'https://www.aopen.com',
  },
]

// Helper: get brands by tier
export const getAuthorisedBrands = () =>
  BRANDS.filter((b) => b.tier === 'authorised')

// Helper: get brands by category
export const getBrandsByCategory = (cat: BrandCategory) =>
  BRANDS.filter((b) => b.categories.includes(cat))

// Helper: get all unique categories from brand list
export const ALL_CATEGORIES: { id: BrandCategory; label: string; count: number }[] = [
  { id: 'displays-led',     label: 'Displays & LED',     count: getBrandsByCategory('displays-led').length },
  { id: 'hospitality-tech', label: 'Hospitality tech',   count: getBrandsByCategory('hospitality-tech').length },
  { id: 'audio',            label: 'Audio',               count: getBrandsByCategory('audio').length },
  { id: 'av-connectivity',  label: 'AV connectivity',     count: getBrandsByCategory('av-connectivity').length },
  { id: 'software-cms',     label: 'Software & CMS',      count: getBrandsByCategory('software-cms').length },
]
