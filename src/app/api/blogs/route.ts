import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { mockBlogs } from '@/lib/mock'

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        publishedAt: true,
      },
    })
    if (blogs.length > 0) {
      return NextResponse.json(blogs)
    }
  } catch (err) {
    console.error('GET public blogs DB error, using static fallback:', err)
  }
  return NextResponse.json(mockBlogs)
}