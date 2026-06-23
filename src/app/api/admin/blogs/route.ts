import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(blogs)
  } catch (err) {
    console.error('GET blogs error:', err)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    let body;
    try { body = await req.json() } catch (parseError) { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

    const { title, excerpt, content, coverImage, published } = body

    if (!title || !content) return NextResponse.json({ error: 'Title and content required' }, { status: 400 })

    const blog = await prisma.blog.create({
      data: {
        title,
        slug: slugify(title),
        excerpt: excerpt || '',
        content,
        coverImage: coverImage || '/images/blog/default.jpg',
        published: Boolean(published),
        publishedAt: published ? new Date() : null,
      },
    })
    return NextResponse.json(blog, { status: 201 })
  } catch (err) {
    console.error('POST blog error:', err)
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}