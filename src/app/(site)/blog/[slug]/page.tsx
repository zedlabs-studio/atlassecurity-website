import Link from 'next/link'
import BlogCoverImage from '@/components/BlogCoverImage'

type Blog = {
  id: string
  title: string
  slug: string
  content: string
  coverImage: string
  publishedAt: string | null
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let blog: Blog | null = null

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  try {
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      next: { revalidate: 3600 },
    })
    if (res.ok) blog = await res.json()
  } catch {
    blog = null
  }

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#0a1628] mb-3">Post Not Found</h1>
          <p className="text-gray-500 mb-6">This blog post doesn't exist or has been removed.</p>
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

  return (
    <main>
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
            // Added text-gray-900 right here to fix the invisible body text
            className="prose prose-lg text-gray-900 prose-headings:text-[#0a1628] prose-a:text-[#1e40af] prose-strong:text-[#0a1628] max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1e40af] font-semibold hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}