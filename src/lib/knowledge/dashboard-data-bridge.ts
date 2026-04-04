import {
  DASHBOARD_TABS,
  type DashboardTabValue,
} from "@/components/layout/dashboard/dashboard-tabs.constants";

import { dashboardTabUrl } from "./dashboard-url";

export type DashboardDataLink = { href: string; label: string };

export type DashboardLinksForKnowledge = {
  links: DashboardDataLink[];
  /** Optional note when glossary emphasis is broader than the live dashboard slice */
  footnote?: string;
};

const TAB = {
  map: "map",
  table: "table",
  charts: "charts",
} as const satisfies Record<string, DashboardTabValue>;

function labelForTab(tab: DashboardTabValue, suffix: string): DashboardDataLink {
  const name = DASHBOARD_TABS.find((t) => t.value === tab)?.label ?? tab;
  return { href: dashboardTabUrl(tab), label: `${name} · ${suffix}` };
}

function activeDashboardTriple(): DashboardDataLink[] {
  return [
    labelForTab(TAB.map, "exports and labor on the map"),
    labelForTab(TAB.table, "exports and labor tables"),
    labelForTab(TAB.charts, "exports and labor charts"),
  ];
}

const LABOR_ROADMAP_FOOTNOTE =
  "Open the Table or Charts tab and choose Labor for unemployment; Exports shows Census origin-of-movement buckets.";

/**
 * Only glossary slugs with a direct tie to live dashboard data or the labor layer
 * (see docs/economists-hour-content-plan.md) get dashboard bridges — everything else routes via topics.
 */
const GLOSSARY_DASHBOARD: Record<string, DashboardLinksForKnowledge> = {
  globalization: { links: activeDashboardTriple() },
  "trade-surplus": { links: activeDashboardTriple() },
  "trade-deficit": { links: activeDashboardTriple() },
  "exchange-rates": { links: activeDashboardTriple() },
  "capital-flows": { links: activeDashboardTriple() },
  "economic-growth": { links: activeDashboardTriple() },
  unemployment: {
    links: activeDashboardTriple(),
    footnote: LABOR_ROADMAP_FOOTNOTE,
  },
  wages: { links: activeDashboardTriple(), footnote: LABOR_ROADMAP_FOOTNOTE },
};

const TOPIC_DASHBOARD: Record<string, DashboardLinksForKnowledge> = {
  "globalization-through-trade-data": { links: activeDashboardTriple() },
  "trade-and-state-economies": { links: activeDashboardTriple() },
  "labor-wages-and-unemployment": {
    links: activeDashboardTriple(),
    footnote: LABOR_ROADMAP_FOOTNOTE,
  },
};

export function getDashboardBridgeForGlossarySlug(
  slug: string,
): DashboardLinksForKnowledge | null {
  return GLOSSARY_DASHBOARD[slug] ?? null;
}

export function getDashboardBridgeForTopicSlug(
  slug: string,
): DashboardLinksForKnowledge | null {
  return TOPIC_DASHBOARD[slug] ?? null;
}
