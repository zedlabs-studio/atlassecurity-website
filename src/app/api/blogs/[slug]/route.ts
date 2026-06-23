import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // 1. Extract slug OUTSIDE the try/catch block so the catch block can see it
  const { slug } = await params

  try {
    if (!slug) {
      return NextResponse.json({ error: 'Blog slug is required' }, { status: 400 })
    }

    // 2. Execute database operation safely
    const blog = await prisma.blog.findUnique({
      where: { 
        slug, 
        published: true 
      },
    })

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(blog)

  } catch (err) {
    // 3. Now 'slug' is perfectly accessible here!
    console.error(`GET blog by slug error [${slug}]:`, err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}