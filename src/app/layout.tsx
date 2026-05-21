import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Baltrons — Frontend Developer",
  description:
    "Portfolio de Thiago Baltrons, desarrollador frontend especializado en Vue 3, JavaScript y UI moderna. Buscando primera experiencia profesional.",
  openGraph: {
    title: "Thiago Baltrons — Frontend Developer",
    description:
      "Desarrollador frontend con experiencia en Vue 3, JavaScript y proyectos reales. Aprendiendo React y Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
