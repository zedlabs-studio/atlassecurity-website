// src/app/api/testimonials/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { status: 'APPROVED' },
      orderBy: { createdAt: 'desc' },
      select: { id: true, name: true, message: true, rating: true, createdAt: true },
    })
    return NextResponse.json(testimonials)
  } catch (err) {
    // 1. Added error logging so you aren't flying blind if the DB drops
    console.error('GET public testimonials error:', err)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // 2. Added the JSON shield to catch malformed payloads early
    let body;
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { name, message, rating } = body

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 })
    }

    const testimonial = await prisma.testimonial.create({
      data: { 
        name, 
        message, 
        // Your excellent sanitization logic stays exactly the same
        rating: Math.min(5, Math.max(1, Number(rating) || 5)) 
      },
    })

    return NextResponse.json(testimonial, { status: 201 })
  } catch (err) {
    // 3. Added error logging for the POST route
    console.error('POST public testimonial error:', err)
    return NextResponse.json({ error: 'Failed to submit testimonial' }, { status: 500 })
  }
}