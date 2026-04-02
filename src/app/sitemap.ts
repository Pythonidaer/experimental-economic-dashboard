import type { MetadataRoute } from "next";

import {
  getAllGlossarySlugs,
  getAllTopicSlugs,
} from "@/lib/content/access";
import { glossaryEntryPath, ROUTES, topicPath } from "@/lib/constants/routes";
import { getSiteUrlString } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrlString();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}${ROUTES.dashboard}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}${ROUTES.glossary}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}${ROUTES.topics}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  const glossaryUrls: MetadataRoute.Sitemap = getAllGlossarySlugs().map((slug) => ({
    url: `${base}${glossaryEntryPath(slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const topicUrls: MetadataRoute.Sitemap = getAllTopicSlugs().map((slug) => ({
    url: `${base}${topicPath(slug)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...glossaryUrls, ...topicUrls];
}
