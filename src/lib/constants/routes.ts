export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  glossary: "/glossary",
  topics: "/topics",
} as const;

export function glossaryEntryPath(slug: string): string {
  return `${ROUTES.glossary}/${slug}`;
}

export function topicPath(slug: string): string {
  return `${ROUTES.topics}/${slug}`;
}
