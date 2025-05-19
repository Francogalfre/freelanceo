import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResetPasswordEmail(to: string, resetUrl: string) {
  const html = EmailTemplate({ url: resetUrl });

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to,
    subject: "Reset your password - Freelanceo",
    html,
  });
}
