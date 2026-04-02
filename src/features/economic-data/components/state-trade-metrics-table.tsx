"use client";

import { useState } from "react";

import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateTradeMetrics } from "@/features/economic-data/hooks/use-state-trade-metrics";

import { StateTradeMetricsDataTable } from "./state-trade-metrics-data-table";
import { StateTradeMetricsTableFilter } from "./state-trade-metrics-table-filter";

export function StateTradeMetricsTable() {
  const { data, error, isPending, isError, isSuccess } = useStateTradeMetrics();
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <section
      aria-labelledby="table-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="table-heading">
        Table
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        State trade metrics (<code className="text-xs">state_trade_metrics</code>) from
        Supabase. Sort columns with the header controls; filter by state name or code
        client-side.
      </p>

      <div className="mt-4">
        {isPending ? <ViewLoading message="Loading state trade metrics…" /> : null}
        {isError ? (
          <ViewError
            description={error instanceof Error ? error.message : undefined}
            title="Could not load data"
          />
        ) : null}
        {isSuccess && data.length === 0 ? (
          <ViewEmpty description="Seeded rows will appear here once the state_trade_metrics table has data." />
        ) : null}
        {isSuccess && data.length > 0 ? (
          <>
            <StateTradeMetricsTableFilter
              onChange={setGlobalFilter}
              value={globalFilter}
            />
            <StateTradeMetricsDataTable
              data={data}
              globalFilter={globalFilter}
              onGlobalFilterChange={setGlobalFilter}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
