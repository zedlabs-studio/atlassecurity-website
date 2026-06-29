// //src/app/api/admin/applications/route.ts
// import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/db'
// import { cookies } from 'next/headers'

// async function isAuthenticated() {
//   const cookieStore = await cookies()
//   return cookieStore.get('admin_session')?.value === 'authenticated'
// }

// export async function GET() {
//   if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

//   try {
//     const applications = await prisma.jobApplication.findMany({
//       orderBy: { createdAt: 'desc' },
//       include: { career: { select: { title: true } } },
//     })
//     return NextResponse.json(applications)
//   } catch (err) {
//     console.error('GET /api/admin/applications error:', err)
//     return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 })
//   }
// }

// export async function DELETE(req: Request) {
//   if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

//   try {
//     let body;
//     try { body = await req.json() } catch (parseError) { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
    
//     const { id } = body
//     if (!id) return NextResponse.json({ error: 'Application ID is required' }, { status: 400 })

//     await prisma.jobApplication.delete({ where: { id } })
//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error('DELETE /api/admin/applications error:', err)
//     return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 })
//   }
// }

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/db'
import { transporter } from '@/lib/mailer'

async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get('admin_session')?.value === 'authenticated'
}

export async function POST(req: Request) {
  if (!(await isAuthenticated()))
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    let body;
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { applicationId, to, subject, message } = body

    if (!to || !subject || !message)
      return NextResponse.json({ error: 'To, subject, and message are required' }, { status: 400 })

    await transporter.sendMail({
      from: `Atlas Security <${process.env.ZOHO_SMTP_USER}>`,
      to,
      replyTo: process.env.ZOHO_SMTP_USER,
      subject,
      html: `<div style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</div>`,
    })

    if (applicationId) {
      try {
        await prisma.jobApplication.update({
          where: { id: applicationId },
          data: { repliedAt: new Date() },
        })
      } catch (dbError) {
        console.warn('Email sent, but failed to update application repliedAt:', dbError)
      }
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Admin application reply error:', err)
    return NextResponse.json({ error: 'Internal server error during reply' }, { status: 500 })
  }
}