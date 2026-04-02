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
    labelForTab(TAB.map, "state trade on the map"),
    labelForTab(TAB.table, "state_trade_metrics rows"),
    labelForTab(TAB.charts, "totals by state chart"),
  ];
}

const LABOR_ROADMAP_FOOTNOTE =
  "Dashboard panels are state trade metrics for now; unemployment and wages pages link here as the nearest geographic context until state_labor_metrics ships.";

/**
 * Only glossary slugs with a direct tie to live `state_trade_metrics` or the near-term labor roadmap
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

/** Concepts surfaced on dashboard tabs (Map / Table / Charts). */
export const DASHBOARD_TAB_GLOSSARY_CONCEPTS: Record<
  "map" | "table" | "charts",
  readonly string[]
> = {
  map: ["globalization", "trade-deficit", "capital-flows", "economic-growth"],
  table: ["trade-surplus", "trade-deficit", "globalization", "exchange-rates"],
  charts: ["globalization", "economic-growth", "trade-surplus"],
};
