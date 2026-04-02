"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DASHBOARD_TABS } from "./dashboard-tabs.constants";

export function DashboardTabList() {
  return (
    <TabsList
      aria-label="Data views"
      className="h-auto w-full min-h-10 max-w-full justify-start gap-1 overscroll-x-contain overflow-x-auto sm:min-h-9 sm:flex-wrap sm:overflow-x-visible md:w-auto"
    >
      {DASHBOARD_TABS.map(({ value, label }) => (
        <TabsTrigger
          key={value}
          className="min-h-10 shrink-0 touch-manipulation px-3 py-2 sm:min-h-[calc(100%-1px)] sm:px-2 sm:py-0.5"
          value={value}
        >
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
