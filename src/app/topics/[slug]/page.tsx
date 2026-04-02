import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentSections } from "@/components/knowledge/content-sections";
import { RelatedDashboardData } from "@/components/knowledge/related-dashboard-data";
import { RelatedGlossaryLinks } from "@/components/knowledge/related-glossary-links";
import {
  getAllTopicSlugs,
  getTopicBySlug,
} from "@/lib/content/access";
import { ROUTES } from "@/lib/constants/routes";
import { getDashboardBridgeForTopicSlug } from "@/lib/knowledge/dashboard-data-bridge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return { title: "Not found" };

  return {
    title: topic.title,
    description: topic.subtitle ?? topic.sections[0]?.paragraphs[0],
  };
}

export default async function TopicDetailPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const dashboardBridge = getDashboardBridgeForTopicSlug(slug);

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
              href={ROUTES.topics}
            >
              Topics
            </Link>
            <span aria-hidden="true" className="px-1.5 text-muted-foreground/70">
              /
            </span>
            <span className="text-foreground">{topic.title}</span>
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {topic.title}
          </h1>
          {topic.subtitle ? (
            <p className="text-base leading-relaxed text-muted-foreground">
              {topic.subtitle}
            </p>
          ) : null}
        </header>

        <ContentSections sections={topic.sections} />
        <RelatedGlossaryLinks slugs={topic.relatedGlossarySlugs} />
        {dashboardBridge ? <RelatedDashboardData block={dashboardBridge} /> : null}

        <p className="mt-10 text-sm text-muted-foreground">
          <Link
            className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            href={ROUTES.topics}
          >
            ← All topics
          </Link>
        </p>
      </article>
    </div>
  );
}
