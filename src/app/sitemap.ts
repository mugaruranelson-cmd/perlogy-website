// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { SEO } from '@/lib/seo-config'
import { getAllCaseStudies } from '@/lib/case-studies-data'

const SITE_LAST_UPDATED = new Date('2026-04-06')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.siteUrl
  const cases = getAllCaseStudies()

  const staticRoutes = [
    { path: '/', freq: 'weekly', priority: 1.0 },
    { path: '/about', freq: 'monthly', priority: 0.9 },
    { path: '/solutions', freq: 'monthly', priority: 0.9 },
    { path: '/brands', freq: 'monthly', priority: 0.9 },
    { path: '/partners', freq: 'monthly', priority: 0.9 },
    { path: '/resources/case-studies', freq: 'weekly', priority: 0.9 },
    { path: '/solutions/hospitality', freq: 'monthly', priority: 0.8 },
    { path: '/solutions/digital-signage', freq: 'monthly', priority: 0.8 },
    { path: '/solutions/airports', freq: 'monthly', priority: 0.7 },
    { path: '/solutions/corporate-av', freq: 'monthly', priority: 0.7 },
    { path: '/partners/apply', freq: 'monthly', priority: 0.8 },
    { path: '/contact', freq: 'yearly', priority: 0.7 },
    { path: '/privacy', freq: 'yearly', priority: 0.3 },
    { path: '/terms', freq: 'yearly', priority: 0.3 },
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Helper to push both en and fr entries for a given path
  const addRoute = (path: string, freq: string, priority: number) => {
    const isRoot = path === '/'
    const enUrl = `${base}${isRoot ? '' : path}`
    const frUrl = `${base}/fr${isRoot ? '' : path}`

    const alternates = {
      languages: {
        en: enUrl,
        fr: frUrl,
      },
    }

    sitemapEntries.push({
      url: enUrl,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: freq as any,
      priority,
      alternates,
    })

    sitemapEntries.push({
      url: frUrl,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: freq as any,
      priority,
      alternates,
    })
  }

  // Add static routes
  staticRoutes.forEach((route) => {
    addRoute(route.path, route.freq, route.priority)
  })

  // Add dynamic case study routes
  cases.forEach((study) => {
    addRoute(
      `/resources/case-studies/${study.slug}`,
      'monthly',
      study.isFlagship ? 0.95 : 0.85
    )
  })

  return sitemapEntries
}
