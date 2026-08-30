import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const baseUrl = SITE_CONFIG.siteUrl;

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/process", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/technology", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
