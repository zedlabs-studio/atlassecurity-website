import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
}

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const careers = await prisma.career.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { applications: true } } },
    })
    return NextResponse.json(careers)
  } catch (err) {
    console.error('GET /api/admin/careers error:', err)
    return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    let body;
    try { body = await req.json() } catch (parseError) { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

    const { title, description, requirements, applyEmail } = body
    if (!title || !description || !requirements || !applyEmail) return NextResponse.json({ error: 'All fields required' }, { status: 400 })

    const career = await prisma.career.create({
      data: { title, description, requirements, applyEmail, isActive: true },
    })
    return NextResponse.json(career, { status: 201 })
  } catch (err) {
    console.error('POST /api/admin/careers error:', err)
    return NextResponse.json({ error: 'Failed to create career' }, { status: 500 })
  }
}