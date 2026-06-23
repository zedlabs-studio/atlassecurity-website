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

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated()))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { id } = await params
    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 })
    }

    // 1. Safely parse JSON to catch malformed payloads
    let body;
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { title, excerpt, content, coverImage, published } = body

    // 2. Execute database operations safely
    const existing = await prisma.blog.findUnique({ where: { id } })
    if (!existing)
      return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug: title ? slugify(title) : existing.slug,
        excerpt,
        content,
        coverImage,
        published: Boolean(published),
        // set publishedAt only when first publishing
        publishedAt: published && !existing.published ? new Date() : existing.publishedAt,
      },
    })
    
    return NextResponse.json(blog)

  } catch (err) {
    console.error('PATCH blog error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated()))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { id } = await params
    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 })
    }

    await prisma.blog.delete({ where: { id } })
    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('DELETE blog error:', err)
    // Note: Prisma throws an error if you try to delete a record that doesn't exist.
    // This catch block cleanly handles that scenario by returning a 500 (or you could check the error code and return a 404).
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}