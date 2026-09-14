import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/login/', '/private/', '/tmp/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
