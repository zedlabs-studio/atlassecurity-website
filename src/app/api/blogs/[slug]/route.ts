import { NextResponse } from 'next/server'
import { getBlogBySlug } from '@/lib/blogService'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (!slug) {
    return NextResponse.json({ error: 'Blog slug is required' }, { status: 400 })
  }

  try {
    const blog = await getBlogBySlug(slug)

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (err) {
    console.error(`GET blog by slug error [${slug}]:`, err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}