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

import type { IndustryDetailDisplayRow } from "@/features/economic-data/utils/industry-hierarchy";
import { cn } from "@/lib/utils";

import { stateIndustryDetailsColumns } from "./state-industry-details-table-columns";

const detailGlobalFilter: FilterFn<IndustryDetailDisplayRow> = (row, _columnId, filterValue) => {
  const q = String(filterValue ?? "")
    .toLowerCase()
    .trim();
  if (!q) return true;

  const { region, industry, naics_code, naics_level, parent_industry } = row.original;
  return (
    region.toLowerCase().includes(q) ||
    industry.toLowerCase().includes(q) ||
    naics_code.toLowerCase().includes(q) ||
    naics_level.toLowerCase().includes(q) ||
    (parent_industry ?? "").toLowerCase().includes(q)
  );
};

type StateIndustryDetailsDataTableProps = {
  "aria-label"?: string;
  "aria-describedby"?: string;
  data: IndustryDetailDisplayRow[];
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
};

export function StateIndustryDetailsDataTable({
  "aria-label": ariaLabel = "Detailed industry employment comparison by region",
  "aria-describedby": ariaDescribedBy,
  data,
  globalFilter,
  onGlobalFilterChange,
}: StateIndustryDetailsDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "avg_monthly_employment", desc: true },
  ]);

  /* eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table headless store API */
  const table = useReactTable({
    data,
    columns: stateIndustryDetailsColumns,
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
    globalFilterFn: detailGlobalFilter,
  });

  const rows = table.getRowModel().rows;
  const hasFilter = globalFilter.trim().length > 0;
  const noRows = rows.length === 0;

  return (
    <div className="-mx-px touch-pan-x overflow-x-auto rounded-md border">
      <table
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        className="w-full min-w-[44rem] text-left text-sm"
      >
        <thead className="border-b bg-muted/50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sorted = header.column.getIsSorted();
                const align = header.column.columnDef.meta?.align ?? "left";
                const alignRight = align === "right";
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
                    className={cn(
                      "px-2 py-2 font-medium sm:px-3",
                      alignRight ? "text-right" : "text-left",
                    )}
                    key={header.id}
                    scope="col"
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <button
                        className={cn(
                          "inline-flex min-h-10 min-w-0 items-center gap-1 rounded-sm px-1 py-1 hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-8 sm:py-0.5",
                          alignRight
                            ? "ms-auto w-full justify-end text-right"
                            : "-ml-1 justify-start text-left",
                        )}
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
          {noRows ? (
            <tr>
              <td
                className="px-2 py-10 text-center text-sm text-muted-foreground sm:px-3"
                colSpan={stateIndustryDetailsColumns.length}
              >
                {hasFilter
                  ? "No rows match your filter. Try a different region, industry, or NAICS value."
                  : "No detailed industry rows match the selected region or NAICS level."}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr className="border-b border-border last:border-0" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const alignRight = cell.column.columnDef.meta?.align === "right";
                  return (
                    <td
                      className={cn(
                        "px-2 py-2 sm:px-3",
                        alignRight ? "text-right tabular-nums" : "text-left",
                      )}
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
