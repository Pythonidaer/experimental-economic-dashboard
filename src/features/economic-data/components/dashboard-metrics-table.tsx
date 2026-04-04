"use client";

import { useState } from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateLaborMetrics } from "@/features/economic-data/hooks/use-state-labor-metrics";
import { useStateTradeMetrics } from "@/features/economic-data/hooks/use-state-trade-metrics";

import { StateLaborMetricsDataTable } from "./state-labor-metrics-data-table";
import { StateMetricsTableFilter } from "./state-metrics-table-filter";
import { StateTradeMetricsDataTable } from "./state-trade-metrics-data-table";

export function DashboardMetricsTable() {
  const [dataset, setDataset] = useState<DashboardDataset>("trade");
  const [tradeFilter, setTradeFilter] = useState("");
  const [laborFilter, setLaborFilter] = useState("");

  const trade = dataset === "trade";
  const tradeQuery = useStateTradeMetrics(undefined, { enabled: trade });
  const laborQuery = useStateLaborMetrics(undefined, { enabled: !trade });

  const active = trade ? tradeQuery : laborQuery;

  return (
    <section
      aria-labelledby="table-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="table-heading">
        Table
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Sort columns with the headers. Use the filter to find a state. Switch between
        trade flows and labor stats with the control below.
      </p>

      <DashboardDatasetToggle
        idPrefix="table"
        value={dataset}
        onChange={setDataset}
      />

      <div className="mt-4">
        {active.isPending ? (
          <ViewLoading
            message={trade ? "Loading trade figures…" : "Loading labor figures…"}
          />
        ) : null}
        {active.isError ? (
          <ViewError
            description={
              active.error instanceof Error ? active.error.message : undefined
            }
            title="Could not load data"
          />
        ) : null}
        {trade && tradeQuery.isSuccess && tradeQuery.data.length === 0 ? (
          <ViewEmpty description="No trade rows to show yet. They will appear here when data is available." />
        ) : null}
        {!trade && laborQuery.isSuccess && laborQuery.data.length === 0 ? (
          <ViewEmpty description="No labor rows to show yet. They will appear here when data is available." />
        ) : null}

        {trade &&
        tradeQuery.isSuccess &&
        tradeQuery.data.length > 0 ? (
          <>
            <StateMetricsTableFilter
              id="table-trade-filter"
              value={tradeFilter}
              onChange={setTradeFilter}
            />
            <StateTradeMetricsDataTable
              aria-label="State trade imports, exports, and totals by year"
              data={tradeQuery.data}
              globalFilter={tradeFilter}
              onGlobalFilterChange={setTradeFilter}
            />
          </>
        ) : null}

        {!trade &&
        laborQuery.isSuccess &&
        laborQuery.data.length > 0 ? (
          <>
            <StateMetricsTableFilter
              id="table-labor-filter"
              value={laborFilter}
              onChange={setLaborFilter}
            />
            <StateLaborMetricsDataTable
              data={laborQuery.data}
              globalFilter={laborFilter}
              onGlobalFilterChange={setLaborFilter}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
