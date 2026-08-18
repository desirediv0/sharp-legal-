import type { MetadataRoute } from 'next'
import { practices, firmInsights, siteUrl } from '@/lib/practices'
export default function sitemap(): MetadataRoute.Sitemap { const routes=['','about','expertise','insights','contact','privacy-policy','terms','disclaimer'].map(path=>({url:`${siteUrl}/${path}`,lastModified:new Date()})); return [...routes,...practices.map(p=>({url:`${siteUrl}/practice-areas/${p.slug}`,lastModified:new Date()})),...firmInsights.map(i=>({url:`${siteUrl}/insights/${i.slug}`,lastModified:new Date()}))] }
