import Link from "next/link";

import { getTopicBySlug } from "@/lib/content/access";
import { topicPath } from "@/lib/constants/routes";

type Props = {
  slugs: string[];
};

export function RelatedTopicLinks({ slugs }: Props) {
  if (slugs.length === 0) return null;

  const resolved = slugs
    .map((slug) => {
      const topic = getTopicBySlug(slug);
      return topic ? { slug, title: topic.title } : null;
    })
    .filter(Boolean) as { slug: string; title: string }[];

  if (resolved.length === 0) return null;

  return (
    <nav aria-label="Related topics" className="mt-10 border-t pt-8">
      <h2 className="text-base font-semibold text-foreground">Related topics</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {resolved.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              className="text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={topicPath(slug)}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
