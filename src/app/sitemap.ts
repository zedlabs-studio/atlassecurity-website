import { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'
import { siteConfig } from '@/lib/siteConfig'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/blog',
    '/careers',
    '/contact',
    '/service-area',
    '/services',
    '/services/alarm-monitoring',
    '/services/mobile-patrolling',
    '/services/static-guard',
    '/terms',
    '/testimonials',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await prisma.blog.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    blogRoutes = posts.map((post: { slug: string; updatedAt: Date }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (err) {
    console.warn('Could not fetch blog posts for sitemap generation:', err)
  }

  return [...staticRoutes, ...blogRoutes]
}