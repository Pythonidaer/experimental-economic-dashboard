import Link from "next/link";

import { getGlossaryEntryBySlug } from "@/lib/content/access";
import { glossaryEntryPath } from "@/lib/constants/routes";

type Props = {
  slugs: string[];
};

export function RelatedGlossaryLinks({ slugs }: Props) {
  if (slugs.length === 0) return null;

  const labels = slugs
    .map((slug) => {
      const entry = getGlossaryEntryBySlug(slug);
      return entry ? { slug, title: entry.title } : null;
    })
    .filter(Boolean) as { slug: string; title: string }[];

  if (labels.length === 0) return null;

  return (
    <nav aria-label="Related glossary entries" className="mt-10 border-t pt-8">
      <h2 className="text-base font-semibold text-foreground">Related glossary</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {labels.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              className="text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={glossaryEntryPath(slug)}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
