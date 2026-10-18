import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

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

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 })
    }

    let body
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { title, slug, excerpt, content, coverImage, published } = body

    const existing = await prisma.blog.findUnique({ where: { id } })
    if (!existing) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    // Determine slug: if user explicitly provided a new slug, sanitize it and verify uniqueness
    let targetSlug = existing.slug
    if (slug && slugify(slug) !== existing.slug) {
      targetSlug = slugify(slug)
      const conflict = await prisma.blog.findUnique({ where: { slug: targetSlug } })
      if (conflict && conflict.id !== id) {
        return NextResponse.json(
          { error: `The slug "${targetSlug}" is already in use by another post.` },
          { status: 400 }
        )
      }
    }

    const isPublished = published !== undefined ? Boolean(published) : existing.published

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title: title !== undefined ? title : existing.title,
        slug: targetSlug,
        excerpt: excerpt !== undefined ? excerpt : existing.excerpt,
        content: content !== undefined ? content : existing.content,
        coverImage: coverImage !== undefined ? coverImage : existing.coverImage,
        published: isPublished,
        publishedAt:
          isPublished && !existing.published
            ? new Date()
            : existing.publishedAt,
      },
    })

    // Purge Next.js cache so the public site updates immediately
    try {
      revalidatePath('/blog')
      revalidatePath(`/blog/${existing.slug}`)
      if (existing.slug !== targetSlug) {
        revalidatePath(`/blog/${targetSlug}`)
      }
      revalidatePath('/sitemap.xml')
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr)
    }

    return NextResponse.json(updatedBlog)
  } catch (err) {
    console.error('PATCH blog error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 })
    }

    const existing = await prisma.blog.findUnique({ where: { id } })
    if (!existing) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }

    await prisma.blog.delete({ where: { id } })

    // Purge Next.js cache so the deleted post disappears from public site immediately
    try {
      revalidatePath('/blog')
      revalidatePath(`/blog/${existing.slug}`)
      revalidatePath('/sitemap.xml')
    } catch (revalErr) {
      console.warn('Revalidation notice:', revalErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE blog error:', err)
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}