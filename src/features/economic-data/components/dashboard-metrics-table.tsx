"use client";

import { useState } from "react";

import { type DashboardDataset } from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateExportProfiles } from "@/features/economic-data/hooks/use-state-export-profiles";
import { useStateIndustries } from "@/features/economic-data/hooks/use-state-industries";
import { useStateLaborMetrics } from "@/features/economic-data/hooks/use-state-labor-metrics";
import { cn } from "@/lib/utils";

import { StateExportProfilesDataTable } from "./state-export-profiles-data-table";
import { StateIndustriesDataTable } from "./state-industries-data-table";
import { StateLaborMetricsDataTable } from "./state-labor-metrics-data-table";
import { StateMetricsTableFilter } from "./state-metrics-table-filter";

export function DashboardMetricsTable() {
  const [dataset, setDataset] = useState<DashboardDataset | "industry">("exports");
  const [laborFilter, setLaborFilter] = useState("");
  const [exportFilter, setExportFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  const laborQuery = useStateLaborMetrics(undefined, { enabled: dataset === "labor" });
  const exportQuery = useStateExportProfiles(undefined, { enabled: dataset === "exports" });
  const industryQuery = useStateIndustries({ year: 2024 }, { enabled: dataset === "industry" });

  const active =
    dataset === "labor"
      ? laborQuery
      : dataset === "industry"
        ? industryQuery
        : exportQuery;

  const loadingMessage =
    dataset === "labor"
      ? "Loading labor figures…"
      : dataset === "industry"
        ? "Loading industry figures…"
        : "Loading export profiles…";

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
        exports, labor, and industry with the control below.
      </p>

      <div className="mt-4" role="radiogroup" aria-label="Table dataset">
        <div className="inline-flex flex-wrap gap-2">
          <TableDatasetOption
            checked={dataset === "exports"}
            id="table-dataset-exports"
            label="Exports"
            onSelect={() => setDataset("exports")}
          />
          <TableDatasetOption
            checked={dataset === "labor"}
            id="table-dataset-labor"
            label="Labor"
            onSelect={() => setDataset("labor")}
          />
          <TableDatasetOption
            checked={dataset === "industry"}
            id="table-dataset-industry"
            label="Industry"
            onSelect={() => setDataset("industry")}
          />
        </div>
      </div>

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
        {dataset === "industry" &&
        industryQuery.isSuccess &&
        industryQuery.data.length === 0 ? (
          <ViewEmpty description="No industry data available for the selected dataset." />
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
        {dataset === "industry" &&
        industryQuery.isSuccess &&
        industryQuery.data.length > 0 ? (
          <>
            <p
              className="mt-3 max-w-2xl text-sm text-muted-foreground"
              id="table-industry-context"
            >
              Industry employment and wage comparison for 2024 across Greater Boston and
              Worcester.
            </p>
            <StateMetricsTableFilter
              id="table-industry-filter"
              label="Filter by region, industry, or NAICS"
              value={industryFilter}
              onChange={setIndustryFilter}
            />
            <StateIndustriesDataTable
              aria-describedby="table-industry-context"
              data={industryQuery.data}
              globalFilter={industryFilter}
              onGlobalFilterChange={setIndustryFilter}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}

type TableDatasetOptionProps = {
  id: string;
  label: string;
  checked: boolean;
  onSelect: () => void;
};

function TableDatasetOption({ id, label, checked, onSelect }: TableDatasetOptionProps) {
  return (
    <button
      aria-checked={checked}
      className={cn(
        "inline-flex min-h-10 min-w-[5.5rem] items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        checked
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-muted/80",
      )}
      id={id}
      role="radio"
      type="button"
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
