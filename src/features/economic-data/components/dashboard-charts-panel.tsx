"use client";

import { useState } from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { LaborUnemploymentByStateChartBody } from "@/features/economic-data/components/state-labor-unemployment-by-state-chart";
import { TradeTotalByStateChartBody } from "@/features/economic-data/components/state-trade-total-by-state-chart";

const CHART_HEADING_ID = "chart-heading";
const CHART_SUMMARY_ID = "chart-summary";

export function DashboardChartsPanel() {
  const [dataset, setDataset] = useState<DashboardDataset>("trade");

  return (
    <section
      aria-labelledby={CHART_HEADING_ID}
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id={CHART_HEADING_ID}>
        Charts
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground" id={CHART_SUMMARY_ID}>
        {dataset === "trade"
          ? "Total trade by state (all years in the data added up). Useful for spotting which states move the most goods internationally."
          : "Unemployment rate by state (2024 annual average). Sorted highest to lowest."}
      </p>

      {dataset === "trade" ? (
        <div className="mt-3">
          <DashboardDatasetToggle
            idPrefix="charts"
            value={dataset}
            variant="bar"
            onChange={setDataset}
          />
        </div>
      ) : null}

      <div className="mt-4">
        {dataset === "trade" ? (
          <TradeTotalByStateChartBody
            headingId={CHART_HEADING_ID}
            summaryId={CHART_SUMMARY_ID}
          />
        ) : (
          <LaborUnemploymentByStateChartBody
            dataset={dataset}
            headingId={CHART_HEADING_ID}
            summaryId={CHART_SUMMARY_ID}
            onDatasetChange={setDataset}
          />
        )}
      </div>
    </section>
  );
}
