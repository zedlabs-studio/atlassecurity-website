// src/app/api/admin/contact/reply/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { Resend } from 'resend'
import { prisma } from '@/lib/db'

// Note: Ensure process.env.RESEND_API_KEY exists
const resend = new Resend(process.env.RESEND_API_KEY)

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
}

export async function POST(req: Request) {
  if (!(await isAuthenticated()))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    // 1. Safely parse JSON
    let body;
    try {
      body = await req.json()
    } catch (parseError) {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { submissionId, to, subject, message } = body

    // 2. Validate input
    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'To, subject, and message are required' }, { status: 400 })
    }

    // 3. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: `Atlas Security <${process.env.RESEND_FROM_EMAIL}>`,
      to,
      replyTo: process.env.RESEND_TO_EMAIL!,
      subject,
      html: `<div style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</div>`,
    })

    // 4. Handle Resend API Errors explicitly
    if (error) {
      console.error('Resend rejected the send:', error)
      return NextResponse.json(
        { error: 'Failed to send email via provider' }, 
        { status: 500 }
      )
    }

    console.log('Resend accepted the send:', data)

    // 5. Update Database (Optional/Non-blocking)
    // if (submissionId) {
    //   // Wrapping this in its own try/catch so a database error here 
    //   // doesn't crash the route AFTER the email was already successfully sent.
    //   try {
    //     await prisma.contactSubmission.update({
    //       where: { id: submissionId },
    //       data: { repliedAt: new Date() },
    //     })
    //   } catch (dbError) {
    //     console.warn('Email sent, but failed to update submission repliedAt column:', dbError)
    //   }
    // }

    return NextResponse.json({ success: true })
    
  } catch (err) {
    console.error('Admin reply error:', err)
    return NextResponse.json({ error: 'Internal server error during reply' }, { status: 500 })
  }
}