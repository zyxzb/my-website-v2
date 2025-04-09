'use server'; // Marks this as a Server Action

import nodemailer from 'nodemailer';

export async function sendEmail(formData: any) {
  const { firstName, lastName, email, phone, message } = formData;

  console.log(
    'process.env.NEXT_GMAIL_EMAIL_ADDRESS',
    process.env.NEXT_GMAIL_EMAIL_ADDRESS,
  );

  console.log(formData);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.NEXT_GMAIL_EMAIL_ADDRESS,
      pass: process.env.NEXT_GMAIL_APP_PASSWORD,
    },
  });

  const mailOption = {
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
  };

  try {
    await transporter.sendMail(mailOption);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}
