import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { ensureBlogsSeeded } from '@/lib/blogService'

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Automatically seed mock blogs if the table is currently empty
    await ensureBlogsSeeded()

    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(blogs)
  } catch (err) {
    console.error('GET admin blogs error:', err)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
    }

    const { title, slug, excerpt, content, coverImage, published } = body

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    let targetSlug = slug ? slugify(slug) : slugify(title)
    if (!targetSlug) {
      targetSlug = `post-${Date.now()}`
    }

    // Check for existing slug to ensure uniqueness
    const existing = await prisma.blog.findUnique({
      where: { slug: targetSlug },
    })
    if (existing) {
      targetSlug = `${targetSlug}-${Date.now().toString().slice(-4)}`
    }

    const isPublished = Boolean(published)

    const blog = await prisma.blog.create({
      data: {
        title,
        slug: targetSlug,
        excerpt: excerpt || '',
        content,
        coverImage: coverImage || '/images/blog-commercial-building.jpg',
        published: isPublished,
        publishedAt: isPublished ? new Date() : null,
      },
    })

    // Purge Next.js cache so the public site updates immediately
    try {
      revalidatePath('/blog')
      revalidatePath(`/blog/${blog.slug}`)
      revalidatePath('/sitemap.xml')
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr)
    }

    return NextResponse.json(blog, { status: 201 })
  } catch (err) {
    console.error('POST blog error:', err)
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}