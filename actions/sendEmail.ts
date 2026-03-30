'use server'; // Marks this as a Server Action

import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, 'Imię jest wymagane'),
  lastName: z.string().optional(),
  email: z.string().email('Nieprawidłowy email'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Wiadomość jest wymagana'),
  gRecaptchaToken: z.string().min(1, 'Brak tokena reCAPTCHA'),
});

export async function sendEmail(formData: unknown) {
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Nieprawidłowe dane formularza.',
      errors: parsed.error.flatten(),
    };
  }

  const { firstName, lastName, email, phone, message, gRecaptchaToken } =
    parsed.data;

  try {
    const body = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: gRecaptchaToken,
    });

    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
        cache: 'no-store',
      },
    );

    const recaptchaData = await recaptchaResponse.json();
    console.log(recaptchaData);
    if (!recaptchaData.success) {
      return {
        success: false,
        message: 'Weryfikacja reCAPTCHA nie powiodła się.',
      };
    }

    if (recaptchaData.action && recaptchaData.action !== 'inquirySubmit') {
      return {
        success: false,
        message: 'Nieprawidłowa akcja reCAPTCHA.',
      };
    }

    if (typeof recaptchaData.score === 'number' && recaptchaData.score < 0.5) {
      return {
        success: false,
        message: 'Wiadomość wygląda podejrzanie.',
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_GMAIL_EMAIL_ADDRESS,
        pass: process.env.NEXT_GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_GMAIL_EMAIL_ADDRESS,
      replyTo: email,
      subject: 'Nowa wiadomość ze strony internetowej!',
      html: `
        <h3>Masz nową wiadomość ze strony internetowej!</h3>
        <br/>
        <p>Imię: ${firstName}</p>
        ${lastName && `<p>Nazwisko:${lastName}</p>`}
        <p>Adres e-mail nadawcy: ${email}</p>
        ${phone && `<p>Numer nadawcy: ${phone}</p>`}
        <p>Wiadomość: ${message}</p>
      `,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}
