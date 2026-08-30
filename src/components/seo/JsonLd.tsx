import React from "react";
import { SITE_CONFIG } from "@/lib/seo";

export default function JsonLd() {
  const siteUrl = SITE_CONFIG.siteUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "INTELLUSCORE",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.supportEmail,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE_CONFIG.supportEmail,
      url: `${siteUrl}/contact`,
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "INTELLUSCORE",
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
