"use client";

import { useState } from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateExportProfiles } from "@/features/economic-data/hooks/use-state-export-profiles";
import { useStateLaborMetrics } from "@/features/economic-data/hooks/use-state-labor-metrics";

import { StateExportProfilesDataTable } from "./state-export-profiles-data-table";
import { StateLaborMetricsDataTable } from "./state-labor-metrics-data-table";
import { StateMetricsTableFilter } from "./state-metrics-table-filter";

export function DashboardMetricsTable() {
  const [dataset, setDataset] = useState<DashboardDataset>("exports");
  const [laborFilter, setLaborFilter] = useState("");
  const [exportFilter, setExportFilter] = useState("");

  const laborQuery = useStateLaborMetrics(undefined, { enabled: dataset === "labor" });
  const exportQuery = useStateExportProfiles(undefined, { enabled: dataset === "exports" });

  const active = dataset === "labor" ? laborQuery : exportQuery;

  const loadingMessage =
    dataset === "labor" ? "Loading labor figures…" : "Loading export profiles…";

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
        exports and labor with the control below.
      </p>

      <DashboardDatasetToggle
        idPrefix="table"
        value={dataset}
        onChange={setDataset}
      />

      <div className="mt-4">
        {active.isPending ? <ViewLoading message={loadingMessage} /> : null}
        {active.isError ? (
          <ViewError
            description={
              active.error instanceof Error ? active.error.message : undefined
            }
            title="Could not load data"
          />
        ) : null}

        {dataset === "labor" &&
        laborQuery.isSuccess &&
        laborQuery.data.length === 0 ? (
          <ViewEmpty description="No labor rows to show yet. They will appear here when data is available." />
        ) : null}
        {dataset === "exports" &&
        exportQuery.isSuccess &&
        exportQuery.data.length === 0 ? (
          <ViewEmpty description="No export data available for the selected dataset." />
        ) : null}

        {dataset === "labor" &&
        laborQuery.isSuccess &&
        laborQuery.data.length > 0 ? (
          <>
            <p
              className="mt-3 max-w-2xl text-sm text-muted-foreground"
              id="table-labor-context"
            >
              State unemployment rates for years in the dataset. Sorted to highlight
              highest unemployment states.
            </p>
            <StateMetricsTableFilter
              id="table-labor-filter"
              label="Filter by state name"
              value={laborFilter}
              onChange={setLaborFilter}
            />
            <StateLaborMetricsDataTable
              aria-describedby="table-labor-context"
              data={laborQuery.data}
              globalFilter={laborFilter}
              onGlobalFilterChange={setLaborFilter}
            />
          </>
        ) : null}

        {dataset === "exports" &&
        exportQuery.isSuccess &&
        exportQuery.data.length > 0 ? (
          <>
            <p
              className="mt-3 max-w-2xl text-sm text-muted-foreground"
              id="table-exports-context"
            >
              Sort and filter by state. Re-exports use muted styling. Methodology and units
              are summarized under the table; see the Notes tab for the full story.
            </p>
            <StateMetricsTableFilter
              id="table-exports-filter"
              label="Filter by state name"
              value={exportFilter}
              onChange={setExportFilter}
            />
            <StateExportProfilesDataTable
              aria-describedby="table-exports-context"
              aria-label="State export profile buckets by period"
              data={exportQuery.data}
              globalFilter={exportFilter}
              onGlobalFilterChange={setExportFilter}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}
