import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thiago Baltrons — Web Frontend Developer",
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
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-zinc-950 text-zinc-50 antialiased selection:bg-white selection:text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
