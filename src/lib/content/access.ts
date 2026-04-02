import { glossaryEntries } from "@/content/glossary";
import type { GlossaryEntry, Topic } from "@/content/types";
import { topics } from "@/content/topics";

export function getAllGlossaryEntries(): GlossaryEntry[] {
  return [...glossaryEntries].sort((a, b) => a.title.localeCompare(b.title));
}

export function getGlossaryEntryBySlug(slug: string): GlossaryEntry | undefined {
  return glossaryEntries.find((e) => e.slug === slug);
}

export function getAllGlossarySlugs(): string[] {
  return glossaryEntries.map((e) => e.slug);
}

export function getAllTopics(): Topic[] {
  return [...topics].sort((a, b) => a.title.localeCompare(b.title));
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAllTopicSlugs(): string[] {
  return topics.map((t) => t.slug);
}
