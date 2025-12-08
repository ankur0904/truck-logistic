import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, movingFrom, movingTo, date, message } = body;

    // Create a transporter using Gmail SMTP
    // You'll need to configure these environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'zamirafernandezeslait2@gmail.com',
      subject: `Nueva Solicitud de Presupuesto - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nueva Solicitud de Presupuesto
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Información del Cliente:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Nombre:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Teléfono:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${phone}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Fecha de Mudanza:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${date}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Detalles de la Mudanza:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Origen:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${movingFrom}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Destino:</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${movingTo}</td>
              </tr>
            </table>
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Mensaje Adicional:</h3>
            <div style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #2563eb; border-radius: 4px;">
              ${message}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Este correo fue enviado desde el formulario de contacto del sitio web.</p>
            <p>Fecha de recepción: ${new Date().toLocaleString('es-ES')}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
