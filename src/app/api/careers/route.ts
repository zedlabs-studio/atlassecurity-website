// src/app/api/careers/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const careers = await prisma.career.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
      select: { 
        id: true, 
        title: true, 
        description: true, 
        requirements: true, 
        applyEmail: true 
      },
    })
    return NextResponse.json(careers)
  } catch (err) {
    // Catch and log the actual error for your server logs
    console.error('GET public careers error:', err)
    return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 })
  }
}