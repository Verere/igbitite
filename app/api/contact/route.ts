import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, company, phone, message } = await req.json();

  // Use nodemailer for sending email
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change to your email provider
    auth: {
      user: process.env.SMTP_USER, // Set in .env.local
      pass: process.env.SMTP_PASS, // Set in .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'oyateide@igbetiteengineering.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nMessage: ${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error) {
      message = (error as any).message;
    } else if (typeof error === 'string') {
      message = error;
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
