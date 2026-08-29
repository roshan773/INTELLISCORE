import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FuturisticLoader from "@/components/ui/FuturisticLoader";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body-custom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-display-custom",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#556B2F",
};

export const metadata: Metadata = {
  title: "INTELLUSCORE — BUILD. AUTOMATE. SECURE.",
  description:
    "We build intelligent digital experiences, automate complex workflows, and secure the technology that powers modern businesses. Specializing in Web Development, AI Automation, Custom Software, and Cybersecurity.",
  keywords: [
    "INTELLUSCORE",
    "Web Development",
    "AI Automation",
    "Cybersecurity",
    "Custom Software Engineering",
    "Digital Transformation",
  ],
  authors: [{ name: "INTELLUSCORE" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${oswald.variable} scroll-smooth`}>
      <body className="bg-brand-olive-dark text-brand-cream font-body selection:bg-brand-cream selection:text-brand-olive-dark antialiased">
        <FuturisticLoader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
