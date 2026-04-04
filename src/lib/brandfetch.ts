// Brandfetch Logo API — CDN URL builder
// Docs: https://docs.brandfetch.com/logo-api/overview

const CLIENT_ID = process.env.NEXT_PUBLIC_BRANDFETCH_CLIENT_ID!

// Logo URL patterns:
// - /logo   → full horizontal wordmark (best for brand cards)
// - /symbol → icon/emblem only (best for small displays)
// - /icon   → square icon (best for favicons/thumbnails)
// Fallback: /fallback/lettermark/icon → auto-generates initials if no logo found

export function getBrandLogoUrl(
  domain: string,
  type: 'logo' | 'symbol' | 'icon' = 'logo',
  width = 200,
  height = 80
): string {
  if (domain === 'absen.com') {
    return '/images/brands/absen.svg'
  }

  if (!CLIENT_ID) {
    console.warn('NEXT_PUBLIC_BRANDFETCH_CLIENT_ID is not set')
    return '' // triggers onError → shows initials fallback
  }
  return `https://cdn.brandfetch.io/${domain}/w/${width}/h/${height}/${type}?c=${CLIENT_ID}&fallback=monogram`
}

export function getBrandIconUrl(domain: string, size = 64): string {
  if (domain === 'absen.com') return '/images/brands/absen.svg'
  if (!CLIENT_ID) return ''
  return `https://cdn.brandfetch.io/${domain}/w/${size}/h/${size}/icon?c=${CLIENT_ID}&fallback=monogram`
}

// Brand API — server-side only, returns colors, fonts, description
// Call this from a server component or API route (never from client)
export async function getBrandData(domain: string) {
  const apiKey = process.env.BRANDFETCH_API_KEY
  if (!apiKey) return null
  
  const res = await fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    next: { revalidate: 86400 }, // cache for 24 hours
  })
  if (!res.ok) return null
  return res.json()
}
