"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DASHBOARD_TAB_SEARCH_PARAM } from "@/lib/knowledge/dashboard-url";

import { DashboardTabList } from "./dashboard-tab-list";
import { ChartsPanel } from "./panels/charts-panel";
import {
  DEFAULT_DASHBOARD_TAB,
  parseDashboardTabParam,
  type DashboardTabValue,
} from "./dashboard-tabs.constants";
import { MapPanel } from "./panels/map-panel";
import { NotesPanel } from "./panels/notes-panel";
import { OverviewPanel } from "./panels/overview-panel";
import { TablePanel } from "./panels/table-panel";

export function DashboardTabsShellInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryKey = searchParams.toString();
  const tabFromUrl = useMemo(() => {
    const params = new URLSearchParams(queryKey);
    return parseDashboardTabParam(params.get(DASHBOARD_TAB_SEARCH_PARAM));
  }, [queryKey]);

  const [tab, setTab] = useState<DashboardTabValue>(tabFromUrl);

  useEffect(() => {
    setTab(tabFromUrl);
  }, [tabFromUrl]);

  const onTabChange = useCallback(
    (value: string | number | null) => {
      if (value == null) return;
      const next = parseDashboardTabParam(String(value));
      setTab(next);
      const params = new URLSearchParams(searchParams.toString());
      if (next === DEFAULT_DASHBOARD_TAB) {
        params.delete(DASHBOARD_TAB_SEARCH_PARAM);
      } else {
        params.set(DASHBOARD_TAB_SEARCH_PARAM, next);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return (
    <Tabs
      className="flex flex-1 flex-col gap-3 sm:gap-4"
      onValueChange={onTabChange}
      value={tab}
    >
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
