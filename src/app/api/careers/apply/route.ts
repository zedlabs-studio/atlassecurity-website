// src/app/api/careers/apply/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  try {
    // 1. Safely parse JSON to catch malformed payloads early
    let body;
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { careerId, name, email, phone, coverLetter } = body

    // 2. Validate required fields
    if (!careerId || !name || !email || !coverLetter) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    // 3. Verify career exists and is active
    const career = await prisma.career.findFirst({
      where: { id: careerId, isActive: true },
    })
    
    if (!career) {
      return NextResponse.json({ error: 'Position not found or no longer active' }, { status: 404 })
    }

    // 4. Execute database operation safely
    const application = await prisma.jobApplication.create({
      data: { 
        careerId, 
        name, 
        email, 
        phone: phone || '', 
        coverLetter 
      },
    })

    return NextResponse.json({ success: true, id: application.id }, { status: 201 })

  } catch (err) {
    // 5. Catch and log the actual error for debugging
    console.error('POST job application error:', err)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}