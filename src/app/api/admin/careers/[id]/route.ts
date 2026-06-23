import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
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
      return NextResponse.json({ error: 'Career ID is required' }, { status: 400 })
    }

    // 1. Safely parse JSON
    let body;
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    // 2. Prevent empty updates
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({ error: 'Update payload cannot be empty' }, { status: 400 })
    }

    // 3. Execute database operation safely
    const career = await prisma.career.update({
      where: { id },
      data: body, // Note: Ensure your frontend only sends valid Prisma fields here
    })
    
    return NextResponse.json(career)

  } catch (err) {
    console.error('PATCH career error:', err)
    return NextResponse.json({ error: 'Failed to update career' }, { status: 500 })
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
      return NextResponse.json({ error: 'Career ID is required' }, { status: 400 })
    }

    await prisma.career.delete({ where: { id } })
    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('DELETE career error:', err)
    return NextResponse.json({ error: 'Failed to delete career' }, { status: 500 })
  }
}