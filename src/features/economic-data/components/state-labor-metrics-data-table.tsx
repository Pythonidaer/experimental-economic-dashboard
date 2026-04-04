"use client";

import {
  flexRender,
  functionalUpdate,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type FilterFn,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

import type { StateLaborMetricRow } from "@/features/economic-data/types/database";

import { stateLaborMetricColumns } from "./state-labor-metrics-table-columns";

const stateNameOrCodeGlobalFilter: FilterFn<StateLaborMetricRow> = (
  row,
  _columnId,
  filterValue,
) => {
  const q = String(filterValue ?? "")
    .toLowerCase()
    .trim();
  if (!q) return true;
  const { state_name, state_code } = row.original;
  return (
    state_name.toLowerCase().includes(q) ||
    state_code.toLowerCase().includes(q)
  );
};

type StateLaborMetricsDataTableProps = {
  "aria-label"?: string;
  data: StateLaborMetricRow[];
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
};

export function StateLaborMetricsDataTable({
  "aria-label": ariaLabel = "State labor metrics by state and year",
  data,
  globalFilter,
  onGlobalFilterChange,
}: StateLaborMetricsDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "year", desc: true },
  ]);

  /* eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table headless store API */
  const table = useReactTable({
    data,
    columns: stateLaborMetricColumns,
    getRowId: (row) => row.id,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: (updater) => {
      const next = functionalUpdate(updater, globalFilter);
      onGlobalFilterChange(String(next ?? ""));
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: stateNameOrCodeGlobalFilter,
  });

  const rows = table.getRowModel().rows;
  const hasFilter = globalFilter.trim().length > 0;
  const noMatches = rows.length === 0 && hasFilter;

  return (
    <div className="-mx-px touch-pan-x overflow-x-auto rounded-md border">
      <table
        aria-label={ariaLabel}
        className="w-full min-w-[36rem] text-left text-sm sm:min-w-[44rem]"
      >
        <thead className="border-b bg-muted/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                const ariaSort =
                  sorted === "asc"
                    ? "ascending"
                    : sorted === "desc"
                      ? "descending"
                      : header.column.getCanSort()
                        ? "none"
                        : undefined;

                return (
                  <th
                    aria-sort={ariaSort}
                    className="px-2 py-2 font-medium sm:px-3"
                    key={header.id}
                    scope="col"
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <button
                        className="-ml-1 inline-flex min-h-10 min-w-0 items-center gap-1 rounded-sm px-1 py-1 text-left hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-8 sm:py-0.5"
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sorted === "asc" ? (
                          <span aria-hidden className="text-muted-foreground">
                            ↑
                          </span>
                        ) : sorted === "desc" ? (
                          <span aria-hidden className="text-muted-foreground">
                            ↓
                          </span>
                        ) : null}
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {noMatches ? (
            <tr>
              <td
                className="px-2 py-10 text-center text-sm text-muted-foreground sm:px-3"
                colSpan={stateLaborMetricColumns.length}
              >
                No rows match your filter. Try a different state name or code.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                className="border-b border-border last:border-0"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  const alignRight =
                    cell.column.columnDef.meta?.align === "right";
                  return (
                    <td
                      className={`px-2 py-2 tabular-nums sm:px-3 ${alignRight ? "text-right" : ""}`}
                      key={cell.id}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
