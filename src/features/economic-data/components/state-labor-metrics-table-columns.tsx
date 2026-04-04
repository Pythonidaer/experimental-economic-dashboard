"use client";

import { createColumnHelper } from "@tanstack/react-table";

import type { StateLaborMetricRow } from "@/features/economic-data/types/database";
import {
  formatAvgWage,
  formatLaborForceParticipation,
  formatUnemploymentRate,
} from "@/features/economic-data/utils/format-labor-metrics";

const columnHelper = createColumnHelper<StateLaborMetricRow>();

export const stateLaborMetricColumns = [
  columnHelper.accessor("state_name", {
    header: "State",
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("state_code", {
    header: "Code",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs">{getValue()}</span>
    ),
    sortingFn: "alphanumeric",
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("year", {
    header: "Year",
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("unemployment_rate", {
    header: "Unemployment",
    cell: ({ getValue }) => formatUnemploymentRate(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("avg_wage", {
    header: "Avg. wage",
    cell: ({ getValue }) => formatAvgWage(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("labor_force_participation", {
    header: "Labor force participation",
    cell: ({ getValue }) => formatLaborForceParticipation(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
];
