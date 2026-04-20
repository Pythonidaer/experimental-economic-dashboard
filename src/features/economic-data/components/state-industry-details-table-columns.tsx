"use client";

import { createColumnHelper } from "@tanstack/react-table";

import type { IndustryDetailDisplayRow } from "@/features/economic-data/utils/industry-hierarchy";

const columnHelper = createColumnHelper<IndustryDetailDisplayRow>();

const integerFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatInteger(value: number | null): string {
  if (value === null || Number.isNaN(Number(value))) return "—";
  return integerFormatter.format(Number(value));
}

function formatCurrency(value: number | null): string {
  if (value === null || Number.isNaN(Number(value))) return "—";
  return currencyFormatter.format(Number(value));
}

export const stateIndustryDetailsColumns = [
  columnHelper.accessor("parent_industry", {
    header: "Parent Industry",
    cell: ({ getValue }) => getValue() ?? "—",
    meta: { align: "left" },
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("region", {
    header: "Region",
    meta: { align: "left" },
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("industry", {
    header: "Industry",
    meta: { align: "left" },
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("naics_code", {
    header: "NAICS",
    meta: { align: "left" },
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("naics_level", {
    header: "NAICS Level",
    meta: { align: "left" },
    enableGlobalFilter: true,
  }),
  columnHelper.accessor("avg_monthly_employment", {
    header: "Avg Monthly Employees",
    cell: ({ getValue }) => formatInteger(getValue()),
    meta: { align: "right" },
    enableGlobalFilter: false,
    sortDescFirst: true,
  }),
  columnHelper.accessor("avg_weekly_wage", {
    header: "Avg Weekly Wage",
    cell: ({ getValue }) => formatCurrency(getValue()),
    meta: { align: "right" },
    enableGlobalFilter: false,
    sortDescFirst: true,
  }),
  columnHelper.accessor("establishments", {
    header: "Establishments",
    cell: ({ getValue }) => formatInteger(getValue()),
    meta: { align: "right" },
    enableGlobalFilter: false,
    sortDescFirst: true,
  }),
];
