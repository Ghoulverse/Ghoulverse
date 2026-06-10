import { NextRequest, NextResponse } from 'next/server';

/*
  POST /api/contact
  Accepts investor inquiry form submissions.

  To enable real email delivery:
  1. Sign up at resend.com (free tier: 100 emails/day)
  2. Add RESEND_API_KEY to your environment variables
  3. Uncomment the Resend code below

  Alternative: Use Formspree (formspr.ee) — just change the form action
  in the frontend component and skip this API route entirely.
*/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, interest, message, formType } = body;

    // Validation
    if (!name || !email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Name and valid email are required.' },
        { status: 400 }
      );
    }

    const submission = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      company: String(company || '').trim(),
      interest: String(interest || '').trim(),
      message: String(message || '').trim(),
      formType: String(formType || 'investor'),
      timestamp: new Date().toISOString(),
      source: req.headers.get('referer') || 'unknown',
      userAgent: req.headers.get('user-agent') || 'unknown',
    };

    // ─── LOG SUBMISSION ───
    // In production, this appears in Cloudflare/Vercel function logs.
    // You can export logs via your platform dashboard.
    console.log('[CONTACT SUBMISSION]', JSON.stringify(submission));

    /*
    // ─── RESEND INTEGRATION (uncomment when ready) ───
    // npm install resend
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'GHOULVERSE <contact@ghoulverse.com>',
    //   to: ['founder@ghoulverse.com'],
    //   replyTo: submission.email,
    //   subject: `Investor Inquiry: ${submission.name}${submission.company ? ' @ ' + submission.company : ''}`,
    //   text: `
    // Name: ${submission.name}
    // Email: ${submission.email}
    // Company: ${submission.company || 'N/A'}
    // Interest: ${submission.interest || 'N/A'}
    // Message: ${submission.message || 'N/A'}
    // Submitted: ${submission.timestamp}
    //   `,
    // });
    */

    /*
    // ─── AIRTABLE CRM INTEGRATION (uncomment when ready) ───
    // Add AIRTABLE_API_KEY and AIRTABLE_BASE_ID to environment variables.
    // See: https://airtable.com/create/tokens
    //
    // await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Investors`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ fields: submission }),
    // });
    */

    return NextResponse.json(
      { success: true, message: 'Submission received. We will be in touch within 24 hours.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[CONTACT ERROR]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email founder@ghoulverse.com directly.' },
      { status: 500 }
    );
  }
}
