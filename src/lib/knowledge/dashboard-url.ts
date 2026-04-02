import type { DashboardTabValue } from "@/components/layout/dashboard/dashboard-tabs.constants";
import { ROUTES } from "@/lib/constants/routes";

export const DASHBOARD_TAB_SEARCH_PARAM = "tab";

/** Deep-link to a dashboard tab (e.g. knowledge layer → data). */
export function dashboardTabUrl(tab: DashboardTabValue): string {
  return `${ROUTES.dashboard}?${DASHBOARD_TAB_SEARCH_PARAM}=${encodeURIComponent(tab)}`;
}
