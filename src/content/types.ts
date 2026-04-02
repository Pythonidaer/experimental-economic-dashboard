/**
 * File-based knowledge content (see docs/economists-hour-content-plan.md).
 * People, institutions, events, and laws/policy are modeled as glossary entries via `category`.
 */

export type ContentSection = {
  heading?: string;
  paragraphs: string[];
};

/** Classifies glossary entries so people, institutions, events, and laws live alongside concepts. */
export type GlossaryEntryCategory =
  | "concept"
  | "theory"
  | "person"
  | "institution"
  | "event"
  | "law_policy";

export type GlossaryEntry = {
  slug: string;
  category: GlossaryEntryCategory;
  title: string;
  summary: string;
  sections: ContentSection[];
  /** Topic slugs for longer reads that use or deepen this term */
  relatedTopicSlugs: string[];
};

export type Topic = {
  slug: string;
  title: string;
  subtitle?: string;
  sections: ContentSection[];
  /** Glossary slugs for definitions referenced in this topic */
  relatedGlossarySlugs: string[];
};
