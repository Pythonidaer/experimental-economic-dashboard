export const DASHBOARD_TABS = [
  { value: "overview", label: "Overview" },
  { value: "map", label: "Map" },
  { value: "table", label: "Table" },
  { value: "charts", label: "Charts" },
  { value: "notes", label: "Notes" },
] as const;

export type DashboardTabValue = (typeof DASHBOARD_TABS)[number]["value"];

export const DEFAULT_DASHBOARD_TAB: DashboardTabValue = "overview";

/** Primary nav "Dashboard" dispatches this when already under `/dashboard` to reset tab + URL. */
export const DASHBOARD_NAV_RESET_EVENT = "eed:dashboard-nav-reset";

export function parseDashboardTabParam(
  raw: string | null | undefined,
): DashboardTabValue {
  for (const { value } of DASHBOARD_TABS) {
    if (raw === value) {
      return value;
    }
  }
  return DEFAULT_DASHBOARD_TAB;
}
