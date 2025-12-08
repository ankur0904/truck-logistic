import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mudanzas Sarria - Servicios Profesionales de Mudanzas en Barcelona y Andorra",
  description: "Empresa líder en mudanzas profesionales en Barcelona y Andorra. Más de 15 años de experiencia. Mudanzas locales, internacionales, embalaje profesional y almacenamiento seguro. ¡10% de descuento este mes!",
  keywords: "mudanzas Barcelona, mudanzas Andorra, mudanzas profesionales, transporte de muebles, embalaje profesional, almacenamiento, mudanzas económicas",
  authors: [{ name: "Mudanzas Sarria" }],
  openGraph: {
    title: "Mudanzas Sarria - Transportamos Sueños",
    description: "Servicios profesionales de mudanzas en Barcelona y Andorra. 10% de descuento este mes.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
