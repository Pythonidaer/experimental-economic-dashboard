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

import type { StateExportProfileRow } from "@/features/economic-data/types/database";
import { NON_MANUFACTURED_EXPORTS_TABLE_FOOTNOTE } from "@/features/economic-data/utils/export-profiles-chart-data";

import { stateExportProfileColumns } from "./state-export-profiles-table-columns";

const stateNameOrCodeGlobalFilter: FilterFn<StateExportProfileRow> = (
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

type StateExportProfilesDataTableProps = {
  "aria-label"?: string;
  "aria-describedby"?: string;
  data: StateExportProfileRow[];
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
};

const METHODOLOGY_FOOT_ID = "export-profiles-table-methodology";

export function StateExportProfilesDataTable({
  "aria-label": ariaLabel = "State export profile by state and period",
  "aria-describedby": ariaDescribedBy,
  data,
  globalFilter,
  onGlobalFilterChange,
}: StateExportProfilesDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "period_label", desc: true },
    { id: "state_name", desc: false },
  ]);

  const describedBy =
    [ariaDescribedBy, METHODOLOGY_FOOT_ID].filter(Boolean).join(" ") || undefined;

  /* eslint-disable-next-line react-hooks/incompatible-library -- TanStack Table headless store API */
  const table = useReactTable({
    data,
    columns: stateExportProfileColumns,
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
        aria-describedby={describedBy}
        aria-label={ariaLabel}
        className="w-full min-w-[40rem] text-left text-sm sm:min-w-[44rem]"
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
                colSpan={stateExportProfileColumns.length}
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
      <div
        className="border-t border-border/80 bg-muted/10 px-3 py-2 sm:px-3.5 sm:py-2.5"
        id={METHODOLOGY_FOOT_ID}
      >
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
          Data notes
        </p>
        <ul className="mt-1.5 max-w-prose list-disc space-y-1 pl-4 text-xs leading-snug text-muted-foreground">
          <li>
            <span className="font-medium text-foreground/85">Source:</span> U.S. Census Bureau{" "}
            origin-of-movement exports (same statistical idea as{" "}
            <strong className="font-medium text-foreground">Exhibit 2</strong> — Origin of
            Movement of U.S. Exports of Goods by State by NAICS-Based Product Code Groupings).
            This app uses <strong className="font-medium text-foreground">broad buckets</strong>, not
            full industry detail.
          </li>
          <li>
            <span className="font-medium text-foreground/85">Units:</span>{" "}
            <strong className="font-medium text-foreground">Millions of U.S. dollars</strong>{" "}
            — charts use compact dollar labels on axes/tooltips for readability.
          </li>
          <li>
            <strong className="font-medium text-foreground">Rounding:</strong> parts may not
            add to stated totals exactly.
          </li>
          <li>
            <strong className="font-medium text-foreground">FTZ</strong> shipments are included
            in totals per Census practice.
          </li>
          <li>
            <strong className="font-medium text-foreground">—</strong> (or “-” in Census
            tables) = zero or less than half the displayed unit.
          </li>
          <li>
            <span className="font-medium text-foreground/85">Non-manufactured column:</span>{" "}
            {NON_MANUFACTURED_EXPORTS_TABLE_FOOTNOTE}
          </li>
        </ul>
      </div>
    </div>
  );
}
