import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, phone, organization, service, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"Sharp Legal & Co. Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `Enquiry: ${service} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${organization || '-'}\nService: ${service}\n\n${message}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${organization || '-'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form email error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
  }
}
