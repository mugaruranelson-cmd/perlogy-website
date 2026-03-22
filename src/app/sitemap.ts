// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { SEO } from '@/lib/seo-config'
import { getAllCaseStudies } from '@/lib/case-studies-data'

const SITE_LAST_UPDATED = new Date('2025-03-22')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.siteUrl
  const cases = getAllCaseStudies()

  const staticPages: MetadataRoute.Sitemap = [
    // Tier 1: Homepage
    {
      url:             `${base}/`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    // Tier 2: Core sections
    {
      url:             `${base}/about`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/solutions`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/brands`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/partners`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${base}/resources/case-studies`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority:        0.9,
    },
    // Tier 3: Solution verticals
    {
      url:             `${base}/solutions/hospitality`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/solutions/digital-signage`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/solutions/airports`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    {
      url:             `${base}/solutions/corporate-av`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    // Tier 4: Partner and contact
    {
      url:             `${base}/partners/apply`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${base}/contact`,
      lastModified:    SITE_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority:        0.7,
    },
  ]

  // Dynamic case study pages
  const caseStudyPages: MetadataRoute.Sitemap = cases.map((study) => ({
    url:             `${base}/resources/case-studies/${study.slug}`,
    lastModified:    SITE_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority:        study.isFlagship ? 0.95 : 0.85,
  }))

  return [...staticPages, ...caseStudyPages]
}
