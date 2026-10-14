import type { MetadataRoute } from "next";
import { pages } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  return Object.values(pages).map((page) => ({
    url: new URL(page.path, origin).toString(),
    lastModified: "2026-10-14",
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
