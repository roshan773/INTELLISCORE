import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "INTELLUSCORE",
  siteUrl: "https://intelluscore.vercel.app",
  title: "INTELLUSCORE — BUILD. AUTOMATE. SECURE.",
  description:
    "We build intelligent digital experiences, automate complex workflows, and secure the technology that powers modern businesses. Specializing in Web Development, AI Automation, Custom Software, and Cybersecurity.",
  supportEmail: "support.intelluscore@gmail.com",
  themeColor: "#556B2F",
  backgroundColor: "#121A0D",
  locale: "en_US",
} as const;

export interface PageMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

/**
 * Helper to construct clean, consistent, production-ready metadata for any page.
 */
export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  path = "",
  keywords,
  noIndex = false,
  image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: SITE_CONFIG.title,
  },
}: PageMetadataProps = {}): Metadata {
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = path === "" || path === "/" ? "/" : formattedPath;

  const pageTitle = title ? title : SITE_CONFIG.title;

  return {
    title: title ? pageTitle : { default: SITE_CONFIG.title, template: `%s | ${SITE_CONFIG.name}` },
    description,
    keywords: keywords || [
      "INTELLUSCORE",
      "Web Architecture",
      "AI Automation",
      "Cybersecurity",
      "Custom Software Engineering",
      "Cloud Infrastructure",
      "Autonomous Agents",
      "Digital Transformation",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: `${SITE_CONFIG.siteUrl}${canonicalUrl === "/" ? "" : canonicalUrl}`,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [
        {
          url: image.url,
          width: image.width || 1200,
          height: image.height || 630,
          alt: image.alt || pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
  };
}
