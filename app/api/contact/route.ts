import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Set up email service before production launch!
    // Uncomment one of the options below after installing the package

    // OPTION 1: RESEND (Recommended - run: npm install resend)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'House Of Havana <onboarding@resend.dev>',
    //   to: 'hello@jztech.co',
    //   subject: `Contact Form: ${name}`,
    //   text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}\n\nSubmitted at: ${new Date().toLocaleString()}`
    // });

    // OPTION 2: SENDGRID (run: npm install @sendgrid/mail)
    // import sgMail from '@sendgrid/mail';
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    // await sgMail.send({
    //   to: 'hello@jztech.co',
    //   from: 'info@houseofhavana.ca',
    //   subject: `Contact Form: ${name}`,
    //   text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}\n\nSubmitted at: ${new Date().toLocaleString()}`
    // });

    // TEMPORARY: Console log (remove after setting up email service)
    console.log('Contact Form Submission:', {
      name, email, phone, message,
      timestamp: new Date().toLocaleString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

