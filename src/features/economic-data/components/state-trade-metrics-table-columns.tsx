"use client";

import { createColumnHelper } from "@tanstack/react-table";

import type { StateTradeMetricRow } from "@/features/economic-data/types/database";
import { formatTradeCurrency } from "@/features/economic-data/utils/format-trade-currency";

const columnHelper = createColumnHelper<StateTradeMetricRow>();

export const stateTradeMetricColumns = [
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
  columnHelper.accessor("import_value", {
    header: "Imports",
    cell: ({ getValue }) => formatTradeCurrency(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("export_value", {
    header: "Exports",
    cell: ({ getValue }) => formatTradeCurrency(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
  columnHelper.accessor("total_trade_value", {
    header: "Total trade",
    cell: ({ getValue }) => formatTradeCurrency(getValue()),
    meta: { align: "right" },
    sortingFn: "basic",
    enableGlobalFilter: false,
  }),
];
