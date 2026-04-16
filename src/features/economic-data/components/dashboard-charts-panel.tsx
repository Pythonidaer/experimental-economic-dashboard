"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { StateIndustriesBarChart } from "@/components/charts/StateIndustriesBarChart";
import { LaborUnemploymentByStateChartBody } from "@/features/economic-data/components/state-labor-unemployment-by-state-chart";
import { StateExportProfilesByStateChartBody } from "@/features/economic-data/components/state-export-profiles-by-state-chart";

const CHART_HEADING_ID = "chart-heading";
const CHART_SUMMARY_ID = "chart-summary";
type ChartDataset = DashboardDataset | "industry";

export function DashboardChartsPanel() {
  const [dataset, setDataset] = useState<ChartDataset>("exports");

  const summary = (() => {
    if (dataset === "labor") {
      return "Unemployment rate by state for the latest year available, sorted for quick comparison.";
    }
    if (dataset === "industry") {
      return "Compare average monthly employment across selected industries in 2024 between Greater Boston and Worcester.";
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

      <div className="mt-3" role="radiogroup" aria-label="Chart dataset">
        <div className="inline-flex flex-wrap gap-2">
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
            <IndustryChartContextPanel />
            <div className="mt-4">
              <h3 className="text-base font-semibold tracking-tight">
                Industry Employment: Greater Boston vs Worcester
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Average number of people employed each month in 2024 across selected industries in Greater Boston and Worcester.
              </p>
            </div>
            <div className="mt-4">
              <StateIndustriesBarChart />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              This reflects total employment levels, not current hiring demand.
            </p>
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
};

function ChartDatasetOption({ id, label, checked, onSelect }: ChartDatasetOptionProps) {
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

function IndustryChartContextPanel() {
  return (
    <div className="space-y-2 rounded-lg border border-border/80 bg-muted/10 p-3 sm:p-3.5">
      <p className="text-xs font-medium text-foreground">
        Compare how employment levels differ by industry across the two regions in this
        current dataset.
      </p>
      <div className="grid gap-1.5 rounded-md bg-background/70 px-3 py-2 text-xs sm:grid-cols-3">
        <ContextItem label="Regions shown" value="Greater Boston, Worcester" />
        <ContextItem label="Metric" value="Average monthly employees" />
        <ContextItem label="Year" value="2024" />
      </div>
    </div>
  );
}

type ContextItemProps = {
  label: string;
  value: string;
};

function ContextItem({ label, value }: ContextItemProps) {
  return (
    <div className="leading-snug">
      <span className="font-medium text-foreground">{label}:</span>{" "}
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
}
