import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCoverImage from '@/components/BlogCoverImage'
import { prisma } from '@/lib/db'
import { constructMetadata, siteConfig } from '@/lib/siteConfig'
import { JsonLd, getBlogPostingSchema, getBreadcrumbSchema } from '@/components/JsonLd'

type Props = {
  params: Promise<{ slug: string }>
}

async function getBlog(slug: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug },
    })
    return blog
  } catch (err) {
    console.warn(`Could not fetch blog post ${slug}:`, err)
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    return constructMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      path: `/blog/${slug}`,
      noIndex: true,
    })
  }

  return constructMetadata({
    title: `${blog.title} | Security Insights`,
    description: blog.excerpt || blog.title,
    path: `/blog/${slug}`,
    image: blog.coverImage ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${siteConfig.url}${blog.coverImage}`) : undefined,
  })
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#0a1628] mb-3">Post Not Found</h1>
          <p className="text-gray-500 mb-6">This blog post doesn&apos;t exist or has been removed.</p>
          <Link href="/blog" className="text-[#1e40af] font-semibold hover:underline">← Back to Blog</Link>
        </div>
      </main>
    )
  }

  const hasValidImage = (() => {
    if (!blog.coverImage) return false
    try {
      if (blog.coverImage.startsWith('/')) return true
      new URL(blog.coverImage)
      return true
    } catch {
      return false
    }
  })()

  const blogSchema = getBlogPostingSchema({
    title: blog.title,
    description: blog.excerpt || blog.title,
    slug: blog.slug,
    publishedAt: blog.publishedAt || blog.createdAt,
    updatedAt: blog.updatedAt,
    coverImage: blog.coverImage,
  })

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: blog.title, item: `/blog/${blog.slug}` },
  ])

  return (
    <main>
      <JsonLd data={[blogSchema, breadcrumbSchema]} />

      <div className="relative h-72 lg:h-96 bg-[#0a1628]">
        {hasValidImage ? (
          <BlogCoverImage src={blog.coverImage} alt={blog.title} />
        ) : (
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 lg:px-16 pb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight">
            {blog.title}
          </h1>
          {blog.publishedAt && (
            <p className="text-gray-300 text-sm mt-3">
              {new Date(blog.publishedAt).toLocaleDateString('en-NZ', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          )}
        </div>
      </div>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div
            className="prose prose-lg text-gray-900 prose-headings:text-[#0a1628] prose-a:text-[#1e40af] prose-strong:text-[#0a1628] max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          {/* Contextual Internal Linking Silo */}
          <div className="mt-12 p-8 bg-white border border-gray-200 rounded-2xl shadow-xs">
            <h3 className="text-xl font-bold text-[#0a1628] mb-2">Need Professional Security for Your Site?</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Atlas Security NZ delivers licensed <Link href="/services/static-guard" className="text-[#1e40af] font-semibold underline">static security guards</Link>, GPS-tracked <Link href="/services/mobile-patrolling" className="text-[#1e40af] font-semibold underline">mobile patrol units</Link>, and 24/7 <Link href="/services/alarm-monitoring" className="text-[#1e40af] font-semibold underline">alarm monitoring services</Link> across New Zealand.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#0a1628]">Service Locations:</span>
                <Link href="/service-area/auckland" className="hover:text-[#1e40af] underline">Auckland</Link> |
                <Link href="/service-area/hamilton" className="hover:text-[#1e40af] underline">Hamilton</Link> |
                <Link href="/service-area/wellington" className="hover:text-[#1e40af] underline">Wellington</Link>
              </div>
              <Link
                href="/contact"
                className="bg-[#0a1628] hover:bg-[#1e40af] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors"
              >
                Request Free Quote
              </Link>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1e40af] font-semibold hover:underline text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Back to All Insights
            </Link>
            <Link
              href="/services"
              className="text-xs font-semibold text-gray-600 hover:text-[#1e40af] underline"
            >
              Explore All Security Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}