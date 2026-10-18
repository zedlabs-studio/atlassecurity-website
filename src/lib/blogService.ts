import { prisma } from '@/lib/db'
import { mockBlogs } from '@/lib/mock'

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  published: boolean
  publishedAt: Date | string | null
  createdAt: Date | string
  updatedAt: Date | string
}

/**
 * Ensures all mock blogs are seeded into the database if the database has 0 blogs.
 * Returns the count of blogs seeded or existing count.
 */
export async function ensureBlogsSeeded(): Promise<number> {
  try {
    const count = await prisma.blog.count()
    if (count > 0) {
      return count
    }

    console.log('[blogService] Database has 0 blogs. Seeding initial 10 blogs from mock data...')
    let seeded = 0
    for (const mock of mockBlogs) {
      await prisma.blog.upsert({
        where: { slug: mock.slug },
        update: {},
        create: {
          id: mock.id,
          title: mock.title,
          slug: mock.slug,
          excerpt: mock.excerpt || '',
          content: mock.content || '',
          coverImage: mock.coverImage || '/images/blog-commercial-building.jpg',
          published: mock.published ?? true,
          publishedAt: mock.publishedAt ? new Date(mock.publishedAt) : new Date(mock.createdAt),
          createdAt: mock.createdAt ? new Date(mock.createdAt) : new Date(),
          updatedAt: mock.updatedAt ? new Date(mock.updatedAt) : new Date(),
        },
      })
      seeded++
    }
    console.log(`[blogService] Successfully seeded ${seeded} blogs into the database.`)
    return seeded
  } catch (err) {
    console.error('[blogService] Failed to seed blogs (database may be unreachable or offline):', err)
    return 0
  }
}

/**
 * Force sync/restore all mock blogs into the database (e.g. from admin panel action).
 */
export async function syncMockBlogsToDatabase(): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    let synced = 0
    for (const mock of mockBlogs) {
      await prisma.blog.upsert({
        where: { slug: mock.slug },
        update: {
          title: mock.title,
          excerpt: mock.excerpt,
          content: mock.content,
          coverImage: mock.coverImage,
          published: mock.published ?? true,
        },
        create: {
          id: mock.id,
          title: mock.title,
          slug: mock.slug,
          excerpt: mock.excerpt || '',
          content: mock.content || '',
          coverImage: mock.coverImage || '/images/blog-commercial-building.jpg',
          published: mock.published ?? true,
          publishedAt: mock.publishedAt ? new Date(mock.publishedAt) : new Date(mock.createdAt),
          createdAt: mock.createdAt ? new Date(mock.createdAt) : new Date(),
          updatedAt: mock.updatedAt ? new Date(mock.updatedAt) : new Date(),
        },
      })
      synced++
    }
    return { success: true, count: synced }
  } catch (err) {
    console.error('[blogService] Error syncing mock blogs:', err)
    return { success: false, count: 0, error: err instanceof Error ? err.message : 'Unknown error' }
  }
}

/**
 * Fetch all published blogs for public listing.
 */
export async function getPublishedBlogs() {
  try {
    await ensureBlogsSeeded()
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        published: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    if (blogs && blogs.length > 0) {
      return blogs
    }
    // If DB is reachable and count > 0 but none are published, return empty array
    const count = await prisma.blog.count()
    if (count > 0) {
      return []
    }
  } catch (err) {
    console.warn('[blogService] DB fetch failed, falling back to mockBlogs:', err)
  }
  return mockBlogs.filter((b) => b.published)
}

/**
 * Fetch a single blog by slug for the blog detail page.
 */
export async function getBlogBySlug(slug: string) {
  try {
    await ensureBlogsSeeded()
    const blog = await prisma.blog.findUnique({
      where: { slug },
    })
    if (blog) {
      if (!blog.published) return null
      return blog
    }
    // If DB is connected and query executed, check if any blogs exist in DB
    const count = await prisma.blog.count()
    if (count > 0) {
      // The database is active, but the post was deleted or does not exist
      return null
    }
  } catch (err) {
    console.warn(`[blogService] Could not fetch blog post ${slug} from DB:`, err)
  }
  // Fallback only if DB is unavailable
  const fallback = mockBlogs.find((b) => b.slug === slug && b.published)
  return fallback || null
}
