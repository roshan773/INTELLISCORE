import React from "react";

export default function JsonLd() {
  const siteUrl = "https://intelluscore.vercel.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "INTELLUSCORE",
    alternateName: [
      "intelluscore",
      "INTELLUSCORE",
      "INTELLISCORE",
      "Intelluscore AI",
      "INTELLUSCORE Studio",
      "Intelluscore Technologies",
    ],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/favicon.ico`,
      caption: "INTELLUSCORE Emblem",
    },
    image: `${siteUrl}/opengraph-image`,
    description:
      "INTELLUSCORE is an elite technology engineering agency specializing in high-performance web platforms, autonomous AI agent pipelines, and zero-trust enterprise cybersecurity architectures.",
    email: "support.intelluscore@gmail.com",
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Technical Inquiries & Client Support",
        email: "support.intelluscore@gmail.com",
        url: `${siteUrl}/contact`,
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "Web Architecture",
      "AI Automation",
      "Autonomous Agents",
      "Cybersecurity",
      "Custom Software Development",
      "Next.js",
      "React",
      "Zero-Trust Security",
      "Cloud Infrastructure",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "INTELLUSCORE",
    alternateName: ["intelluscore", "INTELLISCORE"],
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/solutions?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "INTELLUSCORE",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    description:
      "Full-stack digital transformation: Next-gen web applications, autonomous agent workflows, and zero-trust defensive security.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Performance Web Architecture",
            description:
              "Next.js and Edge-native web platforms built for speed, SEO, and global scale.",
            url: `${siteUrl}/services#web-development`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Autonomous AI Automation & Agents",
            description:
              "Multi-agent state machines, LLM fine-tuning, and enterprise autonomous pipelines.",
            url: `${siteUrl}/solutions`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zero-Trust Cybersecurity & Penetration Testing",
            description:
              "Defensive cloud hardening, continuous threat monitoring, and SOC2 / ISO 27001 readiness.",
            url: `${siteUrl}/services#cybersecurity`,
          },
        },
      ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
