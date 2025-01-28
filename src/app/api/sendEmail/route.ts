import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json(); // Pega o corpo da requisição
    const { replyTo, subject, html } = data;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER_FROM,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER_FROM,
      to: process.env.MAIL_USER_TO, // Envia para o próprio e-mail
      replyTo,
      subject,
      html,
    });

    return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ success: false, message: 'Erro ao enviar e-mail.' }, { status: 500 });
  }
}
