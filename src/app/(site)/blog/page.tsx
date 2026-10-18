import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import { getPublishedBlogs } from '@/lib/blogService'
import BlogPageClient from './BlogPageClient'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = constructMetadata({
  title: 'Security Insights & News | Atlas Security NZ Blog',
  description:
    'Read the latest security insights, site protection advice, and industry news from the licensed security experts at Atlas Security NZ.',
  path: '/blog',
})

export default async function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ])

  const blogs = await getPublishedBlogs()

  const initialBlogs = blogs.map(b => ({
    id: b.id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    publishedAt: b.publishedAt ? new Date(b.publishedAt).toISOString() : null,
  }))

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <BlogPageClient initialBlogs={initialBlogs} />
    </>
  )
}