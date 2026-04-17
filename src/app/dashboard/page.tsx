import { DashboardPageHeader } from "@/components/layout/dashboard/dashboard-page-header";
import { DashboardTabsShell } from "@/components/layout/dashboard/dashboard-tabs-shell";
import { parseDashboardTabParam } from "@/components/layout/dashboard/dashboard-tabs.constants";
import { DASHBOARD_TAB_SEARCH_PARAM } from "@/lib/knowledge/dashboard-url";

export default async function DashboardPage(props: PageProps<"/dashboard">) {
  const searchParams = await props.searchParams;
  const raw = searchParams[DASHBOARD_TAB_SEARCH_PARAM];
  const rawString = Array.isArray(raw) ? raw[0] : raw;
  const initialTab = parseDashboardTabParam(
    typeof rawString === "string" ? rawString : undefined,
  );

  return (
    <div className="flex flex-1 flex-col gap-4 sm:gap-6">
      <DashboardPageHeader />
      <DashboardTabsShell initialTab={initialTab} />
    </div>
  );
}
