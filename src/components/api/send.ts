import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { EmailTemplate } from '../email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async  (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name,
    email,
    message,
  };

  const res = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });

  const result = await res.json();
  if (result.success) {
    alert("Email sent!");
  } else {
    alert("Failed to send email");
  }
};
