import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentSections } from "@/components/knowledge/content-sections";
import { RelatedDashboardData } from "@/components/knowledge/related-dashboard-data";
import { RelatedTopicLinks } from "@/components/knowledge/related-topic-links";
import {
  getAllGlossarySlugs,
  getGlossaryEntryBySlug,
} from "@/lib/content/access";
import { ROUTES } from "@/lib/constants/routes";
import { getDashboardBridgeForGlossarySlug } from "@/lib/knowledge/dashboard-data-bridge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGlossaryEntryBySlug(slug);
  if (!entry) return { title: "Not found" };

  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default async function GlossaryEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getGlossaryEntryBySlug(slug);
  if (!entry) notFound();

  const dashboardBridge = getDashboardBridgeForGlossarySlug(slug);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <article className="mx-auto w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <header className="mb-8 space-y-3 border-b pb-8">
          <p className="text-sm font-medium text-muted-foreground">
            <Link
              className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={ROUTES.home}
            >
              Home
            </Link>
            <span aria-hidden="true" className="px-1.5 text-muted-foreground/70">
              /
            </span>
            <Link
              className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={ROUTES.glossary}
            >
              Glossary
            </Link>
            <span aria-hidden="true" className="px-1.5 text-muted-foreground/70">
              /
            </span>
            <span className="text-foreground">{entry.title}</span>
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {entry.title}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            {entry.summary}
          </p>
        </header>

        <ContentSections sections={entry.sections} />
        <RelatedTopicLinks slugs={entry.relatedTopicSlugs} />
        {dashboardBridge ? <RelatedDashboardData block={dashboardBridge} /> : null}

        <p className="mt-10 text-sm text-muted-foreground">
          <Link
            className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            href={ROUTES.glossary}
          >
            ← All glossary entries
          </Link>
        </p>
      </article>
    </div>
  );
}
