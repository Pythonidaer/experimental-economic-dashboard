"use client";

import { ChevronDown, Maximize2, Minimize2, Search } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ChartSortMode = "high-low" | "low-high" | "alphabetical";

export type ChartSortOption = { value: ChartSortMode; label: string };

export type ExpandedChartDensity = "comfortable" | "compact";

/** Reading order top → bottom for the chart; Nivo index 0 is at the bottom, so data is reversed when passing to the chart. */
export function orderRowsForBarChartDisplay<T extends { stateName: string; value: number }>(
  rows: T[],
  sort: ChartSortMode,
): T[] {
  const copy = [...rows];
  const byName = (a: T, b: T) =>
    a.stateName.localeCompare(b.stateName, undefined, { sensitivity: "base" });

  if (sort === "high-low") {
    copy.sort((a, b) => b.value - a.value || byName(a, b));
  } else if (sort === "low-high") {
    copy.sort((a, b) => a.value - b.value || byName(a, b));
  } else {
    copy.sort(byName);
  }
  return copy;
}

export function chartSortExpandedSummaryLabel(mode: ChartSortMode): string {
  switch (mode) {
    case "high-low":
      return "Highest to Lowest";
    case "low-high":
      return "Lowest to Highest";
    case "alphabetical":
      return "A–Z by state";
    default:
      return mode;
  }
}

export function chartSortMobileSummaryLabel(mode: ChartSortMode): string {
  switch (mode) {
    case "high-low":
      return "High → Low";
    case "low-high":
      return "Low → High";
    case "alphabetical":
      return "A–Z";
    default:
      return mode;
  }
}

export function requestPanelFullscreen(el: Element) {
  const anyEl = el as Element & {
    webkitRequestFullscreen?: () => Promise<void>;
  };
  return (
    el.requestFullscreen?.() ??
    anyEl.webkitRequestFullscreen?.() ??
    Promise.reject(new Error("Fullscreen not available"))
  );
}

export function exitPanelFullscreen() {
  const doc = document as Document & {
    webkitExitFullscreen?: () => Promise<void>;
  };
  return document.exitFullscreen?.() ?? doc.webkitExitFullscreen?.() ?? Promise.resolve();
}

export function getPanelFullscreenElement(): Element | null {
  const doc = document as Document & {
    webkitFullscreenElement?: Element | null;
  };
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

const chartToolbarMobileDatasetRowClass =
  "flex w-full min-w-0 items-center justify-between gap-2";

export const chartToolbarExpandedSelectClass = cn(
  "h-8 w-full min-w-[10.25rem] max-w-[13rem] rounded-md border border-input bg-background px-2 py-1 text-sm shadow-sm ring-offset-background",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
);

export function ChartToolbarExpandedControlSection({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 border-l border-border/70 pl-3 first:border-l-0 first:pl-0",
        className,
      )}
    >
      <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </span>
      {children}
    </div>
  );
}

export function ChartToolbarDensityPill({
  active,
  label,
  onSelect,
}: {
  active: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <button
      aria-checked={active}
      className={cn(
        "inline-flex h-7 min-h-7 items-center justify-center rounded-md border px-2.5 text-xs font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-transparent bg-background text-foreground hover:bg-muted/80",
      )}
      role="radio"
      type="button"
      onClick={onSelect}
    >
      {label}
    </button>
  );
}

/** Compact sort UI for mobile toolbars (replaces a native select). */
export function ChartToolbarMobileSortMenu({
  instanceId,
  sortMode,
  setSortMode,
  sortOptions,
}: {
  instanceId: string;
  sortMode: ChartSortMode;
  setSortMode: (m: ChartSortMode) => void;
  sortOptions: readonly ChartSortOption[];
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryDomId = `chart-sort-menu-${instanceId}-summary`;
  return (
    <details
      ref={detailsRef}
      className="group/details relative min-w-0 shrink-0"
    >
      <summary
        aria-label={`Sort: ${chartSortMobileSummaryLabel(sortMode)}. Change sort order.`}
        className={cn(
          "flex h-8 max-w-[9rem] cursor-pointer list-none items-center gap-1 rounded-md border border-input bg-background px-2 text-xs font-medium text-foreground shadow-sm",
          "outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring",
          "[&::-webkit-details-marker]:hidden",
        )}
        id={summaryDomId}
      >
        <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
          Sort
        </span>
        <span className="min-w-0 truncate font-medium leading-none">
          {chartSortMobileSummaryLabel(sortMode)}
        </span>
        <ChevronDown
          aria-hidden
          className="size-3 shrink-0 opacity-60 transition-transform duration-200 group-open/details:rotate-180"
        />
      </summary>
      <div
        aria-labelledby={summaryDomId}
        className="absolute left-0 top-full z-30 mt-1 min-w-[11.5rem] rounded-md border border-border bg-popover py-1 shadow-md"
        role="menu"
      >
        {sortOptions.map((opt) => (
          <button
            aria-checked={sortMode === opt.value}
            className={cn(
              "flex w-full px-3 py-2 text-left text-xs",
              sortMode === opt.value
                ? "bg-muted font-medium text-foreground"
                : "text-foreground hover:bg-muted/80",
            )}
            key={opt.value}
            role="menuitemradio"
            type="button"
            onClick={() => {
              setSortMode(opt.value);
              detailsRef.current?.removeAttribute("open");
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </details>
  );
}

/** Desktop-style sectioned controls (also used when inline mobile “Show controls” is open). */
export function ChartToolbarDesktopPanel({
  headingId,
  dataset,
  onDatasetChange,
  showDatasetToggle,
  sortMode,
  setSortMode,
  sortOptions,
  nameFilter,
  setNameFilter,
  filterId,
  onExpandChart,
  expandDisabled,
  onResetView,
}: {
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
  showDatasetToggle: boolean;
  sortMode: ChartSortMode;
  setSortMode: (m: ChartSortMode) => void;
  sortOptions: readonly ChartSortOption[];
  nameFilter: string;
  setNameFilter: (v: string) => void;
  filterId: string;
  onExpandChart: () => void;
  expandDisabled: boolean;
  onResetView: () => void;
}) {
  const datasetPrefix = `${headingId}-chart-dataset`;
  const sortSelectId = `${headingId}-chart-sort`;

  return (
    <div className="flex flex-wrap items-end gap-x-2 gap-y-2 sm:gap-x-2.5 sm:gap-y-2.5">
      {showDatasetToggle ? (
        <ChartToolbarExpandedControlSection title="Data">
          <DashboardDatasetToggle
            className="shrink-0"
            idPrefix={datasetPrefix}
            value={dataset}
            variant="bar"
            onChange={onDatasetChange}
          />
        </ChartToolbarExpandedControlSection>
      ) : null}

      <ChartToolbarExpandedControlSection className="max-w-full sm:max-w-none" title="Sort by">
        <label className="sr-only" htmlFor={sortSelectId}>
          Sort order
        </label>
        <select
          className={chartToolbarExpandedSelectClass}
          id={sortSelectId}
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as ChartSortMode)}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </ChartToolbarExpandedControlSection>

      <ChartToolbarExpandedControlSection
        className="w-full max-w-[min(100%,220px)] sm:w-auto"
        title="Filter"
      >
        <div className="flex flex-wrap items-end gap-1.5">
          <div className="min-w-0 flex-1">
            <label className="sr-only" htmlFor={filterId}>
              Search states by name or code
            </label>
            <input
              autoComplete="off"
              className={cn(
                "h-8 w-full min-w-0 max-w-[200px] sm:max-w-[220px] rounded-md border border-input bg-background px-2.5 py-1 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              id={filterId}
              placeholder="Search states…"
              type="search"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>
          {nameFilter.trim() ? (
            <Button
              className="h-8 shrink-0 px-2.5 text-xs"
              size="sm"
              type="button"
              variant="ghost"
              onClick={() => setNameFilter("")}
            >
              Clear
            </Button>
          ) : null}
        </div>
      </ChartToolbarExpandedControlSection>

      <ChartToolbarExpandedControlSection title="View">
        <Button
          className="h-7 text-xs"
          disabled={expandDisabled}
          size="sm"
          type="button"
          variant="outline"
          onClick={onExpandChart}
        >
          Expand chart
        </Button>
      </ChartToolbarExpandedControlSection>

      <div className="flex w-full basis-full justify-end pt-1 sm:basis-auto sm:ml-auto sm:w-auto sm:pt-0">
        <Button
          className="h-8 text-xs text-muted-foreground hover:text-foreground"
          size="sm"
          type="button"
          variant="ghost"
          onClick={onResetView}
        >
          Reset view
        </Button>
      </div>
    </div>
  );
}

/** Narrow Charts tab: second row only — Sort, Filter, Expand flush (dataset row lives above). */
export function ChartToolbarInlineMobileQuickToolbar({
  toolbarId,
  sortMode,
  setSortMode,
  sortOptions,
  nameFilter,
  setNameFilter,
  filterId,
  onExpandChart,
  expandDisabled,
}: {
  toolbarId: string;
  sortMode: ChartSortMode;
  setSortMode: (m: ChartSortMode) => void;
  sortOptions: readonly ChartSortOption[];
  nameFilter: string;
  setNameFilter: (v: string) => void;
  filterId: string;
  onExpandChart: () => void;
  expandDisabled: boolean;
}) {
  return (
    <div
      aria-label="Chart actions"
      className="flex w-full min-w-0 shrink-0 flex-wrap items-center gap-1.5"
      id={toolbarId}
      role="group"
    >
      <ChartToolbarMobileSortMenu
        instanceId="inline-quick"
        setSortMode={setSortMode}
        sortMode={sortMode}
        sortOptions={sortOptions}
      />
      <details className="relative min-w-0 shrink-0">
        <summary
          aria-label={nameFilter.trim() ? "Filter states, filter active" : "Filter states"}
          className={cn(
            "flex h-8 cursor-pointer list-none items-center gap-1 rounded-md border border-input bg-background px-2 text-xs font-medium text-foreground shadow-sm",
            "outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <Search aria-hidden className="size-3.5 opacity-80" />
          <span aria-hidden>Filter</span>
          {nameFilter.trim() ? (
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          ) : null}
        </summary>
        <div className="absolute right-0 top-full z-20 mt-1 w-[min(calc(100vw-2.5rem),17rem)] rounded-md border border-border bg-popover p-2 shadow-md">
          <label className="sr-only" htmlFor={filterId}>
            Search states by name or code
          </label>
          <div className="flex items-center gap-1">
            <input
              autoComplete="off"
              className={cn(
                "h-8 w-full min-w-0 max-w-full flex-1 rounded-md border border-input bg-background px-2 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              id={filterId}
              placeholder="Search states…"
              type="search"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
            {nameFilter.trim() ? (
              <Button
                className="h-8 shrink-0 px-2 text-xs"
                size="sm"
                type="button"
                variant="ghost"
                onClick={() => setNameFilter("")}
              >
                Clear
              </Button>
            ) : null}
          </div>
        </div>
      </details>
      <Button
        aria-label="Expand chart"
        className="ml-auto h-8 w-8 shrink-0 rounded-md p-0"
        disabled={expandDisabled}
        size="icon-sm"
        type="button"
        variant="outline"
        onClick={onExpandChart}
      >
        <Maximize2 aria-hidden className="size-3.5" />
      </Button>
    </div>
  );
}

/** Inline charts tab: mobile = Show controls + compact row or full panel; desktop = sectioned bar. */
export function ChartToolbarPageControlBar({
  idPrefix,
  headingId,
  dataset,
  onDatasetChange,
  showDatasetToggle,
  sortMode,
  setSortMode,
  sortOptions,
  nameFilter,
  setNameFilter,
  filterId,
  onExpandChart,
  expandDisabled,
  onResetView,
  isNarrow,
}: {
  idPrefix: string;
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
  showDatasetToggle: boolean;
  sortMode: ChartSortMode;
  setSortMode: (m: ChartSortMode) => void;
  sortOptions: readonly ChartSortOption[];
  nameFilter: string;
  setNameFilter: (v: string) => void;
  filterId: string;
  onExpandChart: () => void;
  expandDisabled: boolean;
  onResetView: () => void;
  isNarrow: boolean;
}) {
  const [mobileInlineExpanded, setMobileInlineExpanded] = useState(false);
  const inlineQuickId = `${idPrefix}-quick`;
  const inlineFullId = `${idPrefix}-full`;

  if (isNarrow && !showDatasetToggle) {
    return (
      <div className="mt-2 w-full" id={idPrefix}>
        <div className="space-y-1.5 rounded-lg border border-border/70 bg-muted/10 p-1.5">
          <ChartToolbarInlineMobileQuickToolbar
            expandDisabled={expandDisabled}
            filterId={filterId}
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
            sortMode={sortMode}
            setSortMode={setSortMode}
            sortOptions={sortOptions}
            toolbarId={inlineQuickId}
            onExpandChart={onExpandChart}
          />
        </div>
      </div>
    );
  }

  if (isNarrow) {
    const datasetPrefix = `${headingId}-chart-dataset`;

    return (
      <div className="mt-2 w-full" id={idPrefix}>
        <div className="space-y-1.5 rounded-lg border border-border/70 bg-muted/10 p-1.5">
          {mobileInlineExpanded ? (
            <div className="flex justify-end">
              <Button
                aria-controls={inlineFullId}
                aria-expanded
                className="h-7 gap-0.5 px-2 text-xs text-muted-foreground hover:text-foreground"
                size="sm"
                type="button"
                variant="ghost"
                onClick={() => setMobileInlineExpanded(false)}
              >
                Hide controls
                <ChevronDown
                  aria-hidden
                  className="size-3.5 rotate-180 opacity-70 transition-transform duration-200"
                />
              </Button>
            </div>
          ) : (
            <div className={chartToolbarMobileDatasetRowClass}>
              <DashboardDatasetToggle
                className="min-w-0 shrink [&_[role=radiogroup]]:flex-nowrap"
                idPrefix={datasetPrefix}
                size="compact"
                value={dataset}
                variant="bar"
                onChange={onDatasetChange}
              />
              <Button
                aria-controls={inlineQuickId}
                aria-expanded={false}
                className="h-7 shrink-0 gap-0.5 px-2 text-xs text-muted-foreground hover:text-foreground"
                size="sm"
                type="button"
                variant="ghost"
                onClick={() => setMobileInlineExpanded(true)}
              >
                Show controls
                <ChevronDown
                  aria-hidden
                  className="size-3.5 opacity-70 transition-transform duration-200"
                />
              </Button>
            </div>
          )}
          {mobileInlineExpanded ? (
            <div className="rounded-md border border-border/60 bg-background/60 p-2" id={inlineFullId}>
              <ChartToolbarDesktopPanel
                dataset={dataset}
                expandDisabled={expandDisabled}
                filterId={filterId}
                headingId={headingId}
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                showDatasetToggle={showDatasetToggle}
                sortMode={sortMode}
                setSortMode={setSortMode}
                sortOptions={sortOptions}
                onDatasetChange={onDatasetChange}
                onExpandChart={onExpandChart}
                onResetView={onResetView}
              />
            </div>
          ) : (
            <ChartToolbarInlineMobileQuickToolbar
              expandDisabled={expandDisabled}
              filterId={filterId}
              nameFilter={nameFilter}
              setNameFilter={setNameFilter}
              sortMode={sortMode}
              setSortMode={setSortMode}
              sortOptions={sortOptions}
              toolbarId={inlineQuickId}
              onExpandChart={onExpandChart}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 w-full" id={idPrefix}>
      <div className="rounded-lg border border-border/80 bg-muted/10 p-1.5 sm:p-2">
        <ChartToolbarDesktopPanel
          dataset={dataset}
          expandDisabled={expandDisabled}
          filterId={filterId}
          headingId={headingId}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          showDatasetToggle={showDatasetToggle}
          sortMode={sortMode}
          setSortMode={setSortMode}
          sortOptions={sortOptions}
          onDatasetChange={onDatasetChange}
          onExpandChart={onExpandChart}
          onResetView={onResetView}
        />
      </div>
    </div>
  );
}

export function ChartToolbarExpandedStatusStrip({
  stateCount,
  sortLabel,
  insight,
  compact,
}: {
  stateCount: number;
  sortLabel: string;
  insight: string | null;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1 rounded-md border border-border/60 bg-muted/15 px-2.5 py-1.5 text-xs text-muted-foreground",
        compact &&
          "gap-x-1.5 gap-y-0 border-border/40 bg-muted/10 px-2 py-1 text-[0.65rem] leading-snug",
      )}
      role="status"
    >
      <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
        <span
          aria-hidden
          className="size-1.5 shrink-0 rounded-full bg-[#15803d]"
        />
        {stateCount} {stateCount === 1 ? "state" : "states"} shown
      </span>
      <span aria-hidden className="text-border/60">
        |
      </span>
      <span>
        Sorted: <span className="text-foreground">{sortLabel}</span>
      </span>
      {insight ? (
        <>
          <span aria-hidden className="text-border/60">
            |
          </span>
          <span
            className={cn(
              "max-w-[min(100%,24rem)] text-foreground/90",
              compact && "text-[0.65rem] leading-snug text-foreground/85",
            )}
          >
            {insight}
          </span>
        </>
      ) : null}
    </div>
  );
}

/** Mobile expanded: single balanced toolbar — chart stays high in the viewport. */
export function ChartToolbarExpandedModalMobileQuickRow({
  quickControlsId,
  headingId,
  dataset,
  onDatasetChange,
  showDatasetToggle,
  sortMode,
  setSortMode,
  sortOptions,
  nameFilter,
  setNameFilter,
  densityGroupId,
  onToggleFullscreen,
  fsActive,
}: {
  quickControlsId: string;
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
  showDatasetToggle: boolean;
  sortMode: ChartSortMode;
  setSortMode: (m: ChartSortMode) => void;
  sortOptions: readonly ChartSortOption[];
  nameFilter: string;
  setNameFilter: (v: string) => void;
  densityGroupId: string;
  onToggleFullscreen: () => void;
  fsActive: boolean;
}) {
  const filterId = `${headingId}-chart-modal-mobile-filter`;
  const datasetPrefix = `${headingId}-chart-modal-mobile-dataset`;

  return (
    <div
      aria-label="Chart controls"
      className="space-y-1.5 rounded-lg border border-border/70 bg-muted/10 p-1.5"
      id={quickControlsId}
      role="group"
    >
      {showDatasetToggle ? (
        <div className="flex w-full min-w-0 items-center">
          <DashboardDatasetToggle
            className="min-w-0 shrink [&_[role=radiogroup]]:flex-nowrap"
            idPrefix={datasetPrefix}
            size="compact"
            value={dataset}
            variant="bar"
            onChange={onDatasetChange}
          />
        </div>
      ) : null}
      <div className="flex w-full min-w-0 shrink-0 flex-wrap items-center gap-1.5">
        <ChartToolbarMobileSortMenu
          instanceId="modal-quick"
          setSortMode={setSortMode}
          sortMode={sortMode}
          sortOptions={sortOptions}
        />
        <details className="relative min-w-0 shrink-0">
          <summary
            aria-label={nameFilter.trim() ? "Filter states, filter active" : "Filter states"}
            className={cn(
              "flex h-8 cursor-pointer list-none items-center gap-1 rounded-md border border-input bg-background px-2 text-xs font-medium text-foreground shadow-sm",
              "outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring",
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <Search aria-hidden className="size-3.5 opacity-80" />
            <span aria-hidden>Filter</span>
            {nameFilter.trim() ? (
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            ) : null}
          </summary>
          <div className="absolute right-0 top-full z-30 mt-1 w-[min(calc(100vw-2.5rem),17rem)] rounded-md border border-border bg-popover p-2 shadow-md">
            <label className="sr-only" htmlFor={filterId}>
              Search states by name or code
            </label>
            <div className="flex items-center gap-1">
              <input
                autoComplete="off"
                className={cn(
                  "h-8 w-full min-w-0 max-w-full flex-1 rounded-md border border-input bg-background px-2 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                )}
                id={filterId}
                placeholder="Search states…"
                type="search"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
              {nameFilter.trim() ? (
                <Button
                  className="h-8 shrink-0 px-2 text-xs"
                  size="sm"
                  type="button"
                  variant="ghost"
                  onClick={() => setNameFilter("")}
                >
                  Clear
                </Button>
              ) : null}
            </div>
          </div>
        </details>
        <span className="sr-only" id={`${densityGroupId}-quick-fs-hint`}>
          Toggle browser full screen for this panel when supported.
        </span>
        <Button
          aria-describedby={`${densityGroupId}-quick-fs-hint`}
          aria-label={fsActive ? "Exit full screen" : "Enter full screen"}
          className="ml-auto h-8 w-8 shrink-0 rounded-md p-0"
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={onToggleFullscreen}
        >
          {fsActive ? (
            <Minimize2 aria-hidden className="size-3.5" />
          ) : (
            <Maximize2 aria-hidden className="size-3.5" />
          )}
        </Button>
      </div>
    </div>
  );
}

/** Expanded dialog: compact dashboard-style control bar (Data → Sort → Filter → View + reset). */
export function ChartToolbarExpandedDialogControls({
  idPrefix,
  headingId,
  dataset,
  onDatasetChange,
  showDatasetToggle,
  sortMode,
  setSortMode,
  sortOptions,
  nameFilter,
  setNameFilter,
  filterId,
  expandedDensity,
  setExpandedDensity,
  densityGroupId,
  onToggleFullscreen,
  fsActive,
  onResetView,
}: {
  idPrefix: string;
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
  showDatasetToggle: boolean;
  sortMode: ChartSortMode;
  setSortMode: (m: ChartSortMode) => void;
  sortOptions: readonly ChartSortOption[];
  nameFilter: string;
  setNameFilter: (v: string) => void;
  filterId: string;
  expandedDensity: ExpandedChartDensity;
  setExpandedDensity: (d: ExpandedChartDensity) => void;
  densityGroupId: string;
  onToggleFullscreen: () => void;
  fsActive: boolean;
  onResetView: () => void;
}) {
  const sortSelectId = `${headingId}-chart-expanded-sort`;
  const datasetPrefix = `${headingId}-chart-expanded-dataset`;

  return (
    <div className="flex shrink-0 flex-col gap-2" id={idPrefix}>
      <div className="rounded-lg border border-border/80 bg-muted/10 p-2 sm:p-2.5">
        <div className="flex flex-wrap items-end gap-x-3 gap-y-3">
          {showDatasetToggle ? (
            <ChartToolbarExpandedControlSection title="Data">
              <DashboardDatasetToggle
                className="shrink-0"
                idPrefix={datasetPrefix}
                value={dataset}
                variant="bar"
                onChange={onDatasetChange}
              />
            </ChartToolbarExpandedControlSection>
          ) : null}

          <ChartToolbarExpandedControlSection className="max-w-full sm:max-w-none" title="Sort by">
            <label className="sr-only" htmlFor={sortSelectId}>
              Sort order
            </label>
            <select
              className={chartToolbarExpandedSelectClass}
              id={sortSelectId}
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as ChartSortMode)}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </ChartToolbarExpandedControlSection>

          <ChartToolbarExpandedControlSection className="w-full max-w-[min(100%,240px)] sm:w-auto" title="Filter">
            <div className="flex flex-wrap items-end gap-1.5">
              <div className="min-w-0 flex-1">
                <label className="sr-only" htmlFor={filterId}>
                  Search states by name or code
                </label>
                <input
                  autoComplete="off"
                  className={cn(
                    "h-8 w-full min-w-0 max-w-[220px] rounded-md border border-input bg-background px-2.5 py-1 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  )}
                  id={filterId}
                  placeholder="Search states…"
                  type="search"
                  value={nameFilter}
                  onChange={(e) => setNameFilter(e.target.value)}
                />
              </div>
              {nameFilter.trim() ? (
                <Button
                  className="h-8 shrink-0 px-2.5 text-xs"
                  size="sm"
                  type="button"
                  variant="ghost"
                  onClick={() => setNameFilter("")}
                >
                  Clear
                </Button>
              ) : null}
            </div>
          </ChartToolbarExpandedControlSection>

          <ChartToolbarExpandedControlSection title="View">
            <div className="flex flex-wrap items-center gap-2">
              <div
                aria-label="Chart density"
                className="inline-flex items-center gap-0.5 rounded-md border border-border/80 bg-background p-0.5"
                role="radiogroup"
              >
                <ChartToolbarDensityPill
                  active={expandedDensity === "comfortable"}
                  label="Comfortable"
                  onSelect={() => setExpandedDensity("comfortable")}
                />
                <ChartToolbarDensityPill
                  active={expandedDensity === "compact"}
                  label="Compact"
                  onSelect={() => setExpandedDensity("compact")}
                />
              </div>
              <span className="sr-only" id={`${densityGroupId}-fs-hint`}>
                Toggle browser full screen for this panel when supported.
              </span>
              <Button
                aria-describedby={`${densityGroupId}-fs-hint`}
                className="h-7 text-xs"
                size="sm"
                type="button"
                variant="outline"
                onClick={onToggleFullscreen}
              >
                {fsActive ? "Exit full screen" : "Full screen"}
              </Button>
            </div>
          </ChartToolbarExpandedControlSection>

          <div className="flex w-full basis-full justify-end pt-1 sm:basis-auto sm:ml-auto sm:w-auto sm:pt-0">
            <Button
              className="h-8 text-xs text-muted-foreground hover:text-foreground"
              size="sm"
              type="button"
              variant="ghost"
              onClick={onResetView}
            >
              Reset view
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Sync React state with browser fullscreen for a panel `ref`. */
export function usePanelFullscreenState(panelRef: RefObject<HTMLElement | null>) {
  const [fsActive, setFsActive] = useState(false);

  useEffect(() => {
    const sync = () => {
      const el = panelRef.current;
      const active = !!el && getPanelFullscreenElement() === el;
      setFsActive(active);
    };
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, [panelRef]);

  const toggleFullscreen = useCallback(async () => {
    const el = panelRef.current;
    if (!el) return;
    try {
      if (getPanelFullscreenElement() === el) {
        await exitPanelFullscreen();
      } else {
        await requestPanelFullscreen(el);
      }
    } catch {
      /* API unsupported or blocked */
    }
  }, [panelRef]);

  return { fsActive, toggleFullscreen };
}
