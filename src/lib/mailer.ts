import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_SMTP_USER!,
    pass: process.env.ZOHO_SMTP_PASS!,
  },
})