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
    const applications = await prisma.jobApplication.findMany({
      orderBy: { createdAt: 'desc' },
      include: { career: { select: { title: true } } },
    })
    return NextResponse.json(applications)
  } catch (err) {
    console.error('GET /api/admin/applications error:', err)
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    let body;
    try { body = await req.json() } catch (parseError) { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
    
    const { id } = body
    if (!id) return NextResponse.json({ error: 'Application ID is required' }, { status: 400 })

    await prisma.jobApplication.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE /api/admin/applications error:', err)
    return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 })
  }
}