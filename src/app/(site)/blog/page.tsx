import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/siteConfig'
import { JsonLd, getBreadcrumbSchema } from '@/components/JsonLd'
import { mockBlogs } from '@/lib/mock'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = constructMetadata({
  title: 'Security Insights & News | Atlas Security NZ Blog',
  description:
    'Read the latest security insights, site protection advice, and industry news from the licensed security experts at Atlas Security NZ.',
  path: '/blog',
})

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ])

  const initialBlogs = mockBlogs.map(b => ({
    id: b.id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    publishedAt: b.publishedAt || b.createdAt,
  }))

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <BlogPageClient initialBlogs={initialBlogs} />
    </>
  )
}