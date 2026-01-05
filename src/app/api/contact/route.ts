
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, service, message, token } = body;

        // Verify ReCaptcha
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        if (recaptchaSecret) {
            const verificationResponse = await fetch(
                `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`,
                { method: 'POST' }
            );
            const verificationData = await verificationResponse.json();

            if (!verificationData.success || verificationData.score < 0.5) {
                return NextResponse.json({ error: 'Recaptcha verification failed' }, { status: 400 });
            }
        }

        const { data, error } = await resend.emails.send({
            from: 'Quick Response Contact <contact@send.quick2restore.com>',
            to: ['amir@growthmarketingco.com'],
            subject: `New Contact Request: ${service}`,
            html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Needed:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
