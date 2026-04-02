import { DashboardPageHeader } from "@/components/layout/dashboard/dashboard-page-header";
import { DashboardTabsShell } from "@/components/layout/dashboard/dashboard-tabs-shell";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 sm:gap-6">
      <DashboardPageHeader />
      <DashboardTabsShell />
    </div>
  );
}
