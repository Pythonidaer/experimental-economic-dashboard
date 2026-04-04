import {
  DASHBOARD_TABS,
  type DashboardTabValue,
} from "@/components/layout/dashboard/dashboard-tabs.constants";

import { dashboardTabUrl } from "./dashboard-url";

export type DashboardDataLink = { href: string; label: string };

export type DashboardLinksForKnowledge = {
  links: DashboardDataLink[];
  /** Optional note when live data is trade-only but the term is labor- or macro-forward-looking */
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

function tradeTriple(): DashboardDataLink[] {
  return [
    labelForTab(TAB.map, "trade on the map"),
    labelForTab(TAB.table, "trade and labor tables"),
    labelForTab(TAB.charts, "trade and labor charts"),
  ];
}

const LABOR_ROADMAP_FOOTNOTE =
  "Open the Table or Charts tab and choose Labor for unemployment and wages; the map still highlights trade.";

/**
 * Only glossary slugs with a direct tie to live dashboard data or the labor layer
 * (see docs/economists-hour-content-plan.md) get dashboard bridges — everything else routes via topics.
 */
const GLOSSARY_DASHBOARD: Record<string, DashboardLinksForKnowledge> = {
  globalization: { links: tradeTriple() },
  "trade-surplus": { links: tradeTriple() },
  "trade-deficit": { links: tradeTriple() },
  "exchange-rates": { links: tradeTriple() },
  "capital-flows": { links: tradeTriple() },
  "economic-growth": { links: tradeTriple() },
  unemployment: { links: tradeTriple(), footnote: LABOR_ROADMAP_FOOTNOTE },
  wages: { links: tradeTriple(), footnote: LABOR_ROADMAP_FOOTNOTE },
};

const TOPIC_DASHBOARD: Record<string, DashboardLinksForKnowledge> = {
  "globalization-through-trade-data": { links: tradeTriple() },
  "trade-and-state-economies": { links: tradeTriple() },
  "labor-wages-and-unemployment": {
    links: tradeTriple(),
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
