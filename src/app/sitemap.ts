import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://calculadorafinancierax.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    ...ARTICLES.map(a => ({
      url: `${base}/blog/${a.slug}`, lastModified: new Date(a.date), changeFrequency: "monthly" as const, priority: 0.7,
    })),
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terminos`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${base}/acerca-de`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
  ];
}
