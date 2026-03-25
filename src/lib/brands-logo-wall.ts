// src/lib/brands-logo-wall.ts

export interface LogoWallBrand {
  id: string
  name: string           // display name shown as fallback text
  domain: string         // Brandfetch domain
  isAuthorised: boolean  // true = blue glow tile treatment
  logoType: 'logo' | 'symbol'  // Brandfetch logo type
}

// All 14 brands — order determines row assignment
export const LOGO_WALL_BRANDS: LogoWallBrand[] = [
  // Row 1 (left → right, 18s)
  { id: 'lg',       name: 'LG',       domain: 'lg.com',            isAuthorised: true,  logoType: 'logo' },
  { id: 'samsung',  name: 'Samsung',  domain: 'samsung.com',        isAuthorised: false, logoType: 'logo'   },
  { id: 'benq',     name: 'BenQ',     domain: 'benq.com',           isAuthorised: false, logoType: 'logo'   },
  { id: 'absen',    name: 'Absen',    domain: 'absen.com',          isAuthorised: false, logoType: 'logo'   },
  { id: 'unilumin', name: 'Unilumin', domain: 'unilumin.com',       isAuthorised: true,  logoType: 'logo'   },
  // Row 2 (right → left, 22s)
  { id: 'kramer',   name: 'Kramer',   domain: 'kramerav.com',       isAuthorised: false, logoType: 'logo'   },
  { id: 'displax',  name: 'Displax',  domain: 'displax.com',        isAuthorised: false, logoType: 'logo'   },
  { id: 'vview',    name: 'VView',    domain: 'vviewtech.com',      isAuthorised: false, logoType: 'logo'   },
  { id: 'toa',      name: 'TOA',      domain: 'toaelectronics.com', isAuthorised: false, logoType: 'logo'   },
  // Row 3 (left → right, 28s)
  { id: 'uniguest', name: 'Uniguest', domain: 'uniguest.com',       isAuthorised: false, logoType: 'logo'   },
  { id: 'guesttek', name: 'Guesttek', domain: 'guesttek.com',       isAuthorised: false, logoType: 'logo'   },
  { id: 'aopen',    name: 'Aopen',    domain: 'aopen.com',          isAuthorised: false, logoType: 'logo'   },
  { id: 'alpha',    name: 'Alpha Acoustics', domain: 'alphacoustics.com', isAuthorised: false, logoType: 'logo' },
  { id: 'lampro',   name: 'Lampro',   domain: 'lampro.net',        isAuthorised: true,  logoType: 'logo' },
]

// Pre-split into rows for the wall
// Each row gets the full list shuffled differently for visual variety.
// The wall duplicates each row (original + copy) so the scroll is seamless.

export const ROW_CONFIGS = [
  {
    id: 'row1',
    direction: 'left' as const,   // scroll direction
    duration: 18,                  // seconds per loop
    brands: ['lg', 'samsung', 'benq', 'absen', 'unilumin', 'lampro', 'kramer', 'displax'],
  },
  {
    id: 'row2',
    direction: 'right' as const,
    duration: 24,
    brands: ['displax', 'vview', 'toa', 'uniguest', 'guesttek', 'lg', 'samsung'],
  },
  {
    id: 'row3',
    direction: 'left' as const,
    duration: 30,
    brands: ['uniguest', 'guesttek', 'aopen', 'alpha', 'unilumin', 'benq', 'toa'],
  },
  {
    id: 'row4',
    direction: 'right' as const,
    duration: 20,
    brands: ['aopen', 'alpha', 'lampro', 'kramer', 'absen', 'vview', 'unilumin', 'displax'],
  },
  {
    id: 'row5',
    direction: 'left' as const,
    duration: 26,
    brands: ['samsung', 'toa', 'lg', 'guesttek', 'kramer', 'benq', 'uniguest'],
  },
]
