"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { StateIndustryDetailsBarChart } from "@/components/charts/StateIndustryDetailsBarChart";
import { StateIndustriesBarChart } from "@/components/charts/StateIndustriesBarChart";
import { LaborUnemploymentByStateChartBody } from "@/features/economic-data/components/state-labor-unemployment-by-state-chart";
import { StateExportProfilesByStateChartBody } from "@/features/economic-data/components/state-export-profiles-by-state-chart";

const CHART_HEADING_ID = "chart-heading";
const CHART_SUMMARY_ID = "chart-summary";
type ChartDataset = DashboardDataset | "industry";
type IndustryChartSubview = "top-level" | "detailed";

export function DashboardChartsPanel() {
  const [dataset, setDataset] = useState<ChartDataset>("exports");
  const [industrySubview, setIndustrySubview] = useState<IndustryChartSubview>("top-level");
  const [detailFiltersOpen, setDetailFiltersOpen] = useState(false);

  const summary = (() => {
    if (dataset === "labor") {
      return "Unemployment rate by state for the latest year available, sorted for quick comparison.";
    }
    if (dataset === "industry") {
      return industrySubview === "top-level"
        ? "Compare average monthly employment across selected industries in 2024 between Greater Boston and Worcester."
        : "Explore detailed NAICS rows (2-digit through 4-digit) and compare average monthly employment by industry.";
    }
    return "State export buckets from Census origin-of-movement data (broad structure, not industries). Pick a bucket to compare states for their latest period in the table.";
  })();

  return (
    <section
      aria-labelledby={CHART_HEADING_ID}
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id={CHART_HEADING_ID}>
        Charts
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground" id={CHART_SUMMARY_ID}>
        {summary}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
        <div
          aria-label="Chart dataset"
          className="inline-flex flex-wrap items-center gap-2"
          role="radiogroup"
        >
          <ChartDatasetOption
            checked={dataset === "exports"}
            id="charts-dataset-exports"
            label="Exports"
            onSelect={() => setDataset("exports")}
          />
          <ChartDatasetOption
            checked={dataset === "labor"}
            id="charts-dataset-labor"
            label="Labor"
            onSelect={() => setDataset("labor")}
          />
          <ChartDatasetOption
            checked={dataset === "industry"}
            id="charts-dataset-industry"
            label="Industry"
            onSelect={() => setDataset("industry")}
          />
        </div>

        {dataset === "industry" ? (
          <fieldset className="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:gap-2.5">
            <div
              className="inline-flex items-center gap-3 text-sm text-foreground"
              role="radiogroup"
              aria-label="Industry chart view"
            >
              <label
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1.5 rounded-sm px-1 py-0.5",
                  "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring",
                )}
                htmlFor="chart-industry-view-top-level"
              >
                <input
                  checked={industrySubview === "top-level"}
                  className="h-4 w-4"
                  id="chart-industry-view-top-level"
                  name="chart-industry-view"
                  type="radio"
                  onChange={() => setIndustrySubview("top-level")}
                />
                <span className="text-sm">Top-level</span>
              </label>
              <label
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1.5 rounded-sm px-1 py-0.5",
                  "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring",
                )}
                htmlFor="chart-industry-view-detailed"
              >
                <input
                  checked={industrySubview === "detailed"}
                  className="h-4 w-4"
                  id="chart-industry-view-detailed"
                  name="chart-industry-view"
                  type="radio"
                  onChange={() => setIndustrySubview("detailed")}
                />
                <span className="text-sm">Detailed</span>
              </label>
            </div>
            {industrySubview === "detailed" ? (
              <button
                aria-controls="industry-detail-filters"
                aria-expanded={detailFiltersOpen}
                className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:ml-auto"
                type="button"
                onClick={() => setDetailFiltersOpen((value) => !value)}
              >
                {detailFiltersOpen ? "Hide filters" : "Show filters"}
              </button>
            ) : null}
          </fieldset>
        ) : null}
      </div>

      <div className="mt-4">
        {dataset === "labor" ? (
          <LaborUnemploymentByStateChartBody
            dataset={dataset}
            headingId={CHART_HEADING_ID}
            showDatasetToggle={false}
            summaryId={CHART_SUMMARY_ID}
            onDatasetChange={(value) => setDataset(value)}
          />
        ) : dataset === "industry" ? (
          <section aria-label="Industry Employment in Greater Boston">
            {industrySubview === "top-level" ? (
              <div className="mt-2">
                <h3 className="text-base font-semibold tracking-tight">
                  Industry Employment: Greater Boston vs Worcester
                </h3>
              </div>
            ) : null}
            <div className={industrySubview === "top-level" ? "mt-4" : "mt-1"}>
              {industrySubview === "top-level" ? (
                <StateIndustriesBarChart />
              ) : (
                <StateIndustryDetailsBarChart filtersOpen={detailFiltersOpen} />
              )}
            </div>
          </section>
        ) : (
          <StateExportProfilesByStateChartBody
            dataset={dataset}
            headingId={CHART_HEADING_ID}
            showDatasetToggle={false}
            summaryId={CHART_SUMMARY_ID}
            onDatasetChange={(value) => setDataset(value)}
          />
        )}
      </div>
    </section>
  );
}

type ChartDatasetOptionProps = {
  id: string;
  label: string;
  checked: boolean;
  onSelect: () => void;
  variant?: "default" | "subtle";
};

function ChartDatasetOption({
  id,
  label,
  checked,
  onSelect,
  variant = "default",
}: ChartDatasetOptionProps) {
  const isSubtle = variant === "subtle";

  return (
    <button
      aria-checked={checked}
      className={cn(
        "inline-flex items-center justify-center border text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isSubtle
          ? "min-h-8 min-w-[4.75rem] rounded-sm border-transparent px-2.5 py-1.5 text-xs"
          : "min-h-10 min-w-[5.5rem] rounded-lg px-3 py-2",
        checked
          ? isSubtle
            ? "bg-background text-foreground shadow-sm"
            : "border-primary bg-primary text-primary-foreground"
          : isSubtle
            ? "bg-transparent text-muted-foreground hover:bg-background/70 hover:text-foreground"
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

