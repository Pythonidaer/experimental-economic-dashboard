"use client";

import { Suspense } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";

import { DashboardTabList } from "./dashboard-tab-list";
import { DashboardTabsShellInner } from "./dashboard-tabs-shell-inner";
import { ChartsPanel } from "./panels/charts-panel";
import { DEFAULT_DASHBOARD_TAB } from "./dashboard-tabs.constants";
import { MapPanel } from "./panels/map-panel";
import { NotesPanel } from "./panels/notes-panel";
import { OverviewPanel } from "./panels/overview-panel";
import { TablePanel } from "./panels/table-panel";

function DashboardTabsFallback() {
  return (
    <Tabs className="flex flex-1 flex-col gap-3 sm:gap-4" defaultValue={DEFAULT_DASHBOARD_TAB}>
      <DashboardTabList />
      <TabsContent className="flex-1 outline-none" value="overview">
        <OverviewPanel />
      </TabsContent>
      <TabsContent className="flex-1 outline-none" value="map">
        <MapPanel />
      </TabsContent>
      <TabsContent className="flex-1 outline-none" value="table">
        <TablePanel />
      </TabsContent>
      <TabsContent className="flex-1 outline-none" value="charts">
        <ChartsPanel />
      </TabsContent>
      <TabsContent className="flex-1 outline-none" value="notes">
        <NotesPanel />
      </TabsContent>
    </Tabs>
  );
}

export function DashboardTabsShell() {
  return (
    <Suspense fallback={<DashboardTabsFallback />}>
      <DashboardTabsShellInner />
    </Suspense>
  );
}
