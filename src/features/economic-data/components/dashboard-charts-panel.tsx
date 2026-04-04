"use client";

import { useState } from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { LaborUnemploymentByStateChartBody } from "@/features/economic-data/components/state-labor-unemployment-by-state-chart";
import { StateExportProfilesByStateChartBody } from "@/features/economic-data/components/state-export-profiles-by-state-chart";

const CHART_HEADING_ID = "chart-heading";
const CHART_SUMMARY_ID = "chart-summary";

export function DashboardChartsPanel() {
  const [dataset, setDataset] = useState<DashboardDataset>("exports");

  const summary =
    dataset === "labor"
      ? "Unemployment rate by state — latest year per state in the data. Sorted for comparison."
      : "State export buckets from Census origin-of-movement data (broad structure, not industries). Pick a bucket to compare states for their latest period in the table.";

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

      <div className="mt-3">
        <DashboardDatasetToggle
          idPrefix="charts"
          value={dataset}
          variant="bar"
          onChange={setDataset}
        />
      </div>

      <div className="mt-4">
        {dataset === "labor" ? (
          <LaborUnemploymentByStateChartBody
            dataset={dataset}
            headingId={CHART_HEADING_ID}
            showDatasetToggle={false}
            summaryId={CHART_SUMMARY_ID}
            onDatasetChange={setDataset}
          />
        ) : (
          <StateExportProfilesByStateChartBody
            dataset={dataset}
            headingId={CHART_HEADING_ID}
            showDatasetToggle={false}
            summaryId={CHART_SUMMARY_ID}
            onDatasetChange={setDataset}
          />
        )}
      </div>
    </section>
  );
}
