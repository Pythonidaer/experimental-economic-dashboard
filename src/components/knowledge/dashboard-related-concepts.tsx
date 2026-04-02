"use client";

import Link from "next/link";

import { getGlossaryEntryBySlug } from "@/lib/content/access";
import {
  DASHBOARD_TAB_GLOSSARY_CONCEPTS,
} from "@/lib/knowledge/dashboard-data-bridge";
import { glossaryEntryPath } from "@/lib/constants/routes";

type Tab = keyof typeof DASHBOARD_TAB_GLOSSARY_CONCEPTS;

type Props = {
  tab: Tab;
};

export function DashboardRelatedConcepts({ tab }: Props) {
  const slugs = DASHBOARD_TAB_GLOSSARY_CONCEPTS[tab];

  return (
    <div className="mt-3 rounded-md border border-dashed border-border/70 bg-muted/15 px-3 py-2">
      <p className="text-xs font-medium text-foreground">Related concepts</p>
      <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {slugs.map((slug) => {
          const entry = getGlossaryEntryBySlug(slug);
          if (!entry) return null;
          return (
            <li key={slug}>
              <Link
                className="text-primary underline-offset-2 hover:text-primary/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={glossaryEntryPath(slug)}
              >
                {entry.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
