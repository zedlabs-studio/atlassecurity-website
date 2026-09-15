import { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'
import { siteConfig } from '@/lib/siteConfig'
import { mockBlogs } from '@/lib/mock'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/blog',
    '/careers',
    '/contact',
    '/service-area',
    '/service-area/auckland',
    '/service-area/hamilton',
    '/service-area/wellington',
    '/services',
    '/services/alarm-monitoring',
    '/services/mobile-patrolling',
    '/services/static-guard',
    '/services/construction-site-security',
    '/services/retail-security',
    '/services/commercial-security',
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

    if (posts.length > 0) {
      blogRoutes = posts.map((post: { slug: string; updatedAt: Date }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.6,
      }))
    }
  } catch (err) {
    console.warn('Could not fetch blog posts from DB for sitemap generation:', err)
  }

  if (blogRoutes.length === 0) {
    blogRoutes = mockBlogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  }

  return [...staticRoutes, ...blogRoutes]
}