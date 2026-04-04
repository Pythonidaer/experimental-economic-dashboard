"use client";

import { createColumnHelper } from "@tanstack/react-table";

import type { StateExportProfileRow } from "@/features/economic-data/types/database";
import { formatExportMillionsUsdCompact } from "@/features/economic-data/utils/format-export-profile-value";
import { formatExportPeriodLabelForDisplay } from "@/features/economic-data/utils/format-export-period-label";

const columnHelper = createColumnHelper<StateExportProfileRow>();

function cellMillions(v: number | null) {
  if (v == null || v === undefined) return "—";
  return formatExportMillionsUsdCompact(Number(v));
}

export const stateExportProfileColumns = [
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
  columnHelper.accessor("period_label", {
    header: "Period",
    cell: ({ getValue }) => formatExportPeriodLabelForDisplay(getValue()),
    sortingFn: "alphanumeric",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("manufactured_exports", {
    header: "Mfg exports",
    cell: ({ getValue }) => cellMillions(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("non_manufactured_exports", {
    header: "Non-mfg",
    cell: ({ getValue }) => cellMillions(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("re_exports", {
    header: "Re-exports",
    cell: ({ getValue }) => (
      <span className="text-muted-foreground">{cellMillions(getValue())}</span>
    ),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("total_exports", {
    header: "Total",
    cell: ({ getValue }) => cellMillions(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("manufactured_percent", {
    header: "Mfg %",
    cell: ({ getValue }) =>
      getValue() == null ? "—" : `${Number(getValue()).toFixed(1)}%`,
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("non_manufactured_percent", {
    header: "Non-mfg %",
    cell: ({ getValue }) =>
      getValue() == null ? "—" : `${Number(getValue()).toFixed(1)}%`,
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
];
