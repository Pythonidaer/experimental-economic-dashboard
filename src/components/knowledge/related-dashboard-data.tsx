import Link from "next/link";

import type { DashboardLinksForKnowledge } from "@/lib/knowledge/dashboard-data-bridge";

type Props = {
  block: DashboardLinksForKnowledge;
};

export function RelatedDashboardData({ block }: Props) {
  if (block.links.length === 0) return null;

  return (
    <nav aria-label="Related dashboard data" className="mt-10 border-t pt-8">
      <h2 className="text-base font-semibold text-foreground">View related data</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {block.links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              className="text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {block.footnote ? (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{block.footnote}</p>
      ) : null}
    </nav>
  );
}
