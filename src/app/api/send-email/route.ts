import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    // 1. Email to RankKit team/admin
    const adminMail = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace later with verified domain
      to: 'hello@rankkit.in', // or your admin email
      subject: 'New Contact Form Submission',
      text: `You have received a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // 2. Auto-response to User
    const userMail = await resend.emails.send({
      from: 'onboarding@resend.dev', // Or a verified sender like support@rankkit.in
      to: email,
      subject: 'Thanks for contacting RankKit!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to us. We’ve received your message and will get back to you shortly.</p>
        <p>– The RankKit Team</p>
        <p style="font-size:12px;color:#888;">This is an automated response. Please do not reply.</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
