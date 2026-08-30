import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FuturisticLoader from "@/components/ui/FuturisticLoader";
import ScrollCanvas from "@/components/3d/ScrollCanvas";
import JsonLd from "@/components/seo/JsonLd";

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

const siteUrl = "https://intelluscore.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INTELLUSCORE — BUILD. AUTOMATE. SECURE.",
    template: "%s | INTELLUSCORE",
  },
  description:
    "INTELLUSCORE (https://intelluscore.vercel.app) is an elite technology studio building next-generation web platforms, autonomous AI workflow automation pipelines, and zero-trust cybersecurity architectures.",
  applicationName: "INTELLUSCORE",
  authors: [{ name: "INTELLUSCORE", url: siteUrl }],
  creator: "INTELLUSCORE",
  publisher: "INTELLUSCORE",
  keywords: [
    "intelluscore",
    "INTELLUSCORE",
    "intelluscore.vercel.app",
    "https://intelluscore.vercel.app",
    "intelluscore official",
    "INTELLISCORE",
    "Intelluscore AI",
    "Intelluscore Web Development",
    "Intelluscore Cybersecurity",
    "AI Automation Agency",
    "Enterprise Web Development",
    "Autonomous AI Agents",
    "Zero-Trust Cybersecurity",
    "Custom Software Engineering",
    "Digital Transformation",
    "Next.js Development Agency",
    "Cloud Architecture",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "INTELLUSCORE",
    title: "INTELLUSCORE — BUILD. AUTOMATE. SECURE.",
    description:
      "We build intelligent digital experiences, automate complex workflows, and secure the technology that powers modern businesses. Specializing in Web Architecture, AI Automation, and Cybersecurity.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "INTELLUSCORE — BUILD. AUTOMATE. SECURE.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@intelluscore",
    creator: "@intelluscore",
    title: "INTELLUSCORE — BUILD. AUTOMATE. SECURE.",
    description:
      "Enterprise Web Engineering, Autonomous AI Workflow Automation & Zero-Trust Cybersecurity Architectures.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${oswald.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-brand-olive-dark text-brand-cream font-body selection:bg-brand-cream selection:text-brand-olive-dark antialiased relative">
        <FuturisticLoader />
        <ScrollCanvas />
        <div className="relative z-10">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
