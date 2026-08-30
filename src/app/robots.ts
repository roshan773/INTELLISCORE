import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://intelluscore.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
