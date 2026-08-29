import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTELLISCORE — BUILD. AUTOMATE. SECURE.",
  description:
    "We build intelligent digital experiences, automate complex workflows, and secure the technology that powers modern businesses. Specializing in Web Development, AI Automation, Custom Software, and Cybersecurity.",
  keywords: [
    "INTELLISCORE",
    "Web Development",
    "AI Automation",
    "Cybersecurity",
    "Custom Software Engineering",
    "Digital Transformation",
    "Technology Consulting",
  ],
  authors: [{ name: "INTELLISCORE" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#283845",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-brand-slate text-brand-cream font-body selection:bg-brand-orange selection:text-brand-dark antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
