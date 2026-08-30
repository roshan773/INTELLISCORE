import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INTELLUSCORE — Engineering, AI & Cybersecurity",
    short_name: "INTELLUSCORE",
    description:
      "Enterprise Web Engineering, Autonomous AI Pipelines, and Zero-Trust Cybersecurity Architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#121A0D",
    theme_color: "#556B2F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["business", "technology", "productivity", "utilities"],
    lang: "en-US",
  };
}
