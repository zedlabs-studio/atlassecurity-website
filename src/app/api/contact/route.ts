// // src/app/api/contact/route.ts
// import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/db'
// import { Resend } from 'resend'

// // Note: Ensure process.env.RESEND_API_KEY exists
// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(req: Request) {
//   try {
//     // 1. Safely parse JSON to catch malformed payloads
//     let body;
//     try {
//       body = await req.json()
//     } catch (parseError) {
//       return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
//     }

//     const { name, phone, email, service, message } = body

//     // 2. Validate input defensively
//     if (!name || !email || !message) {
//       return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 })
//     }

//     // 3. Save to Database FIRST
//     // This ensures you capture the lead even if the email provider is down.
//     await prisma.contactSubmission.create({
//       data: { 
//         name, 
//         phone: phone || '', 
//         email, 
//         service: service || '', 
//         message 
//       },
//     })

//     // 4. Send email notification via Resend
//     const { data, error } = await resend.emails.send({
//       from: `Atlas Security Website <${process.env.RESEND_FROM_EMAIL}>`,
//       to: process.env.RESEND_TO_EMAIL!,
//       subject: `New Contact Form Submission — ${service || 'General Enquiry'}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <table cellpadding="8" style="border-collapse:collapse;width:100%">
//           <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
//           <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
//           <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
//           <tr><td><strong>Service:</strong></td><td>${service || 'Not specified'}</td></tr>
//           <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
//         </table>
//       `,
//     })

//     // 5. Explicitly handle Resend results
//     if (error) {
//       // We log this as a critical error, but we DO NOT return a 500 to the client.
//       // The lead is safe in the database. Returning 500 would cause user confusion/duplicate submits.
//       console.error('CRITICAL: Contact saved to DB, but Resend failed to send notification:', error)
//     } else {
//       console.log('Resend notification sent successfully:', data)
//     }

//     return NextResponse.json({ success: true }, { status: 201 })

//   } catch (err) {
//     console.error('Public contact form error:', err)
//     return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
//   }
// }



// src/app/api/contact/route.ts


import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { transporter } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const { name, phone, email, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 })
    }

    await prisma.contactSubmission.create({
      data: { name, phone: phone || '', email, service: service || '', message },
    })

    try {
      await transporter.sendMail({
        from: `Atlas Security Website <${process.env.ZOHO_SMTP_USER}>`,
        to: process.env.ZOHO_SMTP_USER,
        subject: `New Contact Form Submission — ${service || 'General Enquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%">
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
            <tr><td><strong>Service:</strong></td><td>${service || 'Not specified'}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
          </table>
        `,
      })
    } catch (mailError) {
      console.error('CRITICAL: Contact saved to DB, but email failed:', mailError)
    }

    return NextResponse.json({ success: true }, { status: 201 })

  } catch (err) {
    console.error('Public contact form error:', err)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}