import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Placeholder for Resend API Integration
    // TODO: Install resend package: npm install resend
    // TODO: Configure RESEND_API_KEY in .env.local

    const body = await request.json();
    const { email } = body;

    console.log(`[Placeholder] Sending welcome email to: ${email}`);

    // Simulate success
    return NextResponse.json({ success: true, message: "Use Resend to send emails here." });
}
