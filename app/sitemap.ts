import type { MetadataRoute } from 'next'
import { services, siteUrl } from '@/lib/practices'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = ['', 'about', 'services', 'clients', 'careers', 'contact', 'privacy-policy', 'terms', 'disclaimer']
  return [
    ...pages.map((path) => ({ url: `${siteUrl}/${path}`, lastModified: now })),
    ...services.map((s) => ({ url: `${siteUrl}/services/${s.slug}`, lastModified: now })),
  ]
}
