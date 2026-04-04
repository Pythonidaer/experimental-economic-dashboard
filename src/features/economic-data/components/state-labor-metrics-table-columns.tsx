"use client";

import { createColumnHelper } from "@tanstack/react-table";

import type { StateLaborMetricRow } from "@/features/economic-data/types/database";
import { formatUnemploymentRate } from "@/features/economic-data/utils/format-labor-metrics";

const columnHelper = createColumnHelper<StateLaborMetricRow>();

export const stateLaborMetricColumns = [
  columnHelper.accessor("state_name", {
    header: "State",
    meta: { align: "left" },
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("unemployment_rate", {
    header: "Unemployment rate",
    cell: ({ getValue }) => formatUnemploymentRate(Number(getValue())),
    meta: { align: "right" },
    sortingFn: (rowA, rowB) => {
      const a = Number(rowA.original.unemployment_rate);
      const b = Number(rowB.original.unemployment_rate);
      return a === b ? 0 : a < b ? -1 : 1;
    },
    enableGlobalFilter: false,
    sortDescFirst: true,
  }),
];
