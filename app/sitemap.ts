import type { MetadataRoute } from "next";
import { getSiteUrl } from "../utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    {
      url: new URL("/", base).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}

