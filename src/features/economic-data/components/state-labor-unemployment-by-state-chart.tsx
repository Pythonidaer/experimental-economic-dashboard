"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ResponsiveBar } from "@nivo/bar";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { Button, buttonVariants } from "@/components/ui/button";
import { StateLaborUnemploymentByStateA11yTable } from "@/features/economic-data/components/state-labor-unemployment-by-state-a11y-table";
import { useStateLaborMetrics } from "@/features/economic-data/hooks/use-state-labor-metrics";
import { formatUnemploymentRate } from "@/features/economic-data/utils/format-labor-metrics";
import {
  buildLatestUnemploymentByStateBarData,
  type UnemploymentByStateBarDatum,
} from "@/features/economic-data/utils/unemployment-by-state-chart-data";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";

type LaborChartSummaryProps = {
  summaryId: string;
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
};

type LaborChartSortMode = "high-low" | "low-high" | "alphabetical";

type ExpandedChartDensity = "comfortable" | "compact";

/** Reading order top → bottom for the chart; Nivo uses index 0 at the bottom, so data is reversed when passing to the chart. */
function orderForVisualTopToBottom(
  rows: UnemploymentByStateBarDatum[],
  sort: LaborChartSortMode,
): UnemploymentByStateBarDatum[] {
  const copy = [...rows];
  const byName = (a: UnemploymentByStateBarDatum, b: UnemploymentByStateBarDatum) =>
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

function expandedSortSummaryLabel(mode: LaborChartSortMode): string {
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

function requestFs(el: Element) {
  const anyEl = el as Element & {
    webkitRequestFullscreen?: () => Promise<void>;
  };
  return (
    el.requestFullscreen?.() ??
    anyEl.webkitRequestFullscreen?.() ??
    Promise.reject(new Error("Fullscreen not available"))
  );
}

function exitFs() {
  const doc = document as Document & {
    webkitExitFullscreen?: () => Promise<void>;
  };
  return document.exitFullscreen?.() ?? doc.webkitExitFullscreen?.() ?? Promise.resolve();
}

function getFullscreenElement(): Element | null {
  const doc = document as Document & {
    webkitFullscreenElement?: Element | null;
  };
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

/**
 * All states: horizontal bars of unemployment (latest year per state), scrollable, with sort + filter + expanded dialog.
 */
export function LaborUnemploymentByStateChartBody({
  summaryId,
  headingId,
  dataset,
  onDatasetChange,
}: LaborChartSummaryProps) {
  const { data, error, isPending, isError, isSuccess } = useStateLaborMetrics();
  const isNarrow = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const [sortMode, setSortMode] = useState<LaborChartSortMode>("high-low");
  const [nameFilter, setNameFilter] = useState("");
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [expandedDensity, setExpandedDensity] = useState<ExpandedChartDensity>("comfortable");
  const [fsActive, setFsActive] = useState(false);
  /** Full control panel in expanded modal; always on for sm+; on mobile defaults collapsed for chart-first layout. */
  const [mobileModalFullControls, setMobileModalFullControls] = useState(false);
  const expandedShellRef = useRef<HTMLDivElement>(null);

  const onExpandedOpenChange = useCallback((open: boolean) => {
    setExpandedOpen(open);
    if (!open) {
      const fsEl = getFullscreenElement();
      if (fsEl && expandedShellRef.current?.contains(fsEl)) {
        void exitFs();
      }
    }
  }, []);

  useEffect(() => {
    if (expandedOpen && isNarrow) {
      setMobileModalFullControls(false);
    }
  }, [expandedOpen, isNarrow]);

  const showFullExpandedModalControls = !isNarrow || mobileModalFullControls;

  useEffect(() => {
    const sync = () => {
      const el = expandedShellRef.current;
      const active = !!el && getFullscreenElement() === el;
      setFsActive(active);
    };
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const el = expandedShellRef.current;
    if (!el) return;
    try {
      if (getFullscreenElement() === el) {
        await exitFs();
      } else {
        await requestFs(el);
      }
    } catch {
      /* API unsupported or blocked */
    }
  }, []);

  const baseRows = useMemo(
    () => (data?.length ? buildLatestUnemploymentByStateBarData(data) : []),
    [data],
  );

  const filteredRows = useMemo(() => {
    const q = nameFilter.trim().toLowerCase();
    if (!q) return baseRows;
    return baseRows.filter((r) => r.stateName.toLowerCase().includes(q));
  }, [baseRows, nameFilter]);

  const visualTopToBottom = useMemo(
    () => orderForVisualTopToBottom(filteredRows, sortMode),
    [filteredRows, sortMode],
  );

  const barData = useMemo(
    () =>
      [...visualTopToBottom].reverse().map((d) => ({
        stateName: d.stateName,
        value: d.value,
        year: d.year,
      })),
    [visualTopToBottom],
  );

  const maxRate = useMemo(() => {
    if (!visualTopToBottom.length) return 1;
    return Math.max(...visualTopToBottom.map((d) => d.value), 0.5);
  }, [visualTopToBottom]);

  const inlineControlsId = `${headingId}-labor-chart-controls`;
  const inlineFilterId = `${headingId}-labor-chart-filter`;
  const modalControlsId = `${headingId}-labor-chart-modal-controls`;
  const modalFilterId = `${headingId}-labor-chart-modal-filter`;
  const modalSummaryId = `${headingId}-labor-chart-modal-desc`;
  const densityGroupId = `${headingId}-labor-chart-density`;

  const hasChartData = baseRows.length > 0 && filteredRows.length > 0;

  const expandedSortLabel = useMemo(
    () => expandedSortSummaryLabel(sortMode),
    [sortMode],
  );

  const expandedInsight = useMemo(() => {
    if (!visualTopToBottom.length) return null;
    const first = visualTopToBottom[0];
    if (sortMode === "high-low") {
      return `${first.stateName}: ${formatUnemploymentRate(first.value)} (highest)`;
    }
    if (sortMode === "low-high") {
      return `${first.stateName}: ${formatUnemploymentRate(first.value)} (lowest)`;
    }
    return `${first.stateName} first (A–Z)`;
  }, [visualTopToBottom, sortMode]);

  const resetLaborChartView = useCallback(() => {
    setNameFilter("");
    setSortMode("high-low");
    setExpandedDensity("comfortable");
  }, []);

  return (
    <>
      <p className="sr-only" id={`${headingId}-labor-chart-sr`}>
        Scrollable bar chart of unemployment rate by state. Use sort and filter controls
        to change how states are listed. Open expanded view for a larger chart. A data
        table below matches the current chart order for screen readers.
      </p>
      {isPending ? <ViewLoading message="Loading chart data…" /> : null}
      {isError ? (
        <ViewError
          description={error instanceof Error ? error.message : undefined}
          title="Could not load data"
        />
      ) : null}
      {isSuccess && data.length === 0 ? (
        <ViewEmpty description="No labor rows to chart yet." />
      ) : null}
      {isSuccess && data.length > 0 && baseRows.length === 0 ? (
        <ViewEmpty description="Labor rows are present but unemployment values are missing." />
      ) : null}
      {isSuccess && baseRows.length > 0 ? (
        <div
          aria-describedby={`${headingId}-labor-chart-sr ${summaryId} ${inlineControlsId}`}
          className="not-prose"
        >
          <LaborChartsPageControlBar
            dataset={dataset}
            expandDisabled={filteredRows.length === 0}
            filterId={inlineFilterId}
            headingId={headingId}
            idPrefix={inlineControlsId}
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
            sortMode={sortMode}
            setSortMode={setSortMode}
            onDatasetChange={onDatasetChange}
            onExpandChart={() => setExpandedOpen(true)}
            onResetView={resetLaborChartView}
          />

          {filteredRows.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground" role="status">
              No states match this filter.
            </p>
          ) : (
            <>
              <div className="mt-3">
                <LaborExpandedStatusStrip
                  insight={expandedInsight}
                  sortLabel={expandedSortLabel}
                  stateCount={visualTopToBottom.length}
                />
              </div>
              <span className="sr-only">
                Scroll the chart region vertically to see all states in the current sort
                order.
              </span>
              <LaborUnemploymentBarChartRegion
                barData={barData}
                density="comfortable"
                maxRate={maxRate}
                summaryId={summaryId}
                variant="inline"
                isNarrow={isNarrow}
                isTablet={isTablet}
              />
              <StateLaborUnemploymentByStateA11yTable
                data={visualTopToBottom}
                describedBy={`${headingId}-labor-chart-sr ${summaryId} ${inlineControlsId}`}
                labelledBy={headingId}
              />
            </>
          )}
        </div>
      ) : null}

      <Dialog.Root modal open={expandedOpen} onOpenChange={onExpandedOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop
            className={cn(
              "fixed inset-0 z-50 bg-background/80 backdrop-blur-[2px]",
              "max-sm:bg-background max-sm:backdrop-blur-none",
              "transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0",
            )}
          />
          <Dialog.Viewport
            className={cn(
              "pointer-events-none fixed inset-0 z-50 flex min-h-0 flex-col",
              "max-sm:p-0",
              "sm:p-1 sm:p-2",
            )}
          >
            <Dialog.Popup
              className={cn(
                "pointer-events-auto flex min-h-0 w-full max-w-none flex-1 flex-col overflow-hidden bg-card text-card-foreground outline-none",
                "max-sm:h-[100dvh] max-sm:max-h-[100dvh] max-sm:rounded-none max-sm:border-0 max-sm:shadow-none",
                "max-h-[calc(100dvh-0.5rem)] sm:max-h-[calc(100dvh-1rem)] sm:rounded-lg sm:border sm:shadow-lg",
                "data-ending-style:opacity-0 data-starting-style:opacity-0",
                "transition-[opacity,transform] sm:data-ending-style:scale-[0.99] sm:data-starting-style:scale-[0.99]",
                "max-sm:data-starting-style:scale-100 max-sm:data-ending-style:scale-100",
              )}
              initialFocus
            >
              <div
                className={cn(
                  "flex shrink-0 flex-wrap items-start justify-between gap-2 border-b border-border bg-card",
                  "max-sm:sticky max-sm:top-0 max-sm:z-20 max-sm:px-2 max-sm:pb-1.5 max-sm:pt-[max(0.25rem,env(safe-area-inset-top))]",
                  "sm:static sm:gap-2 sm:px-4 sm:py-2",
                )}
              >
                <div className="min-w-0 flex-1 space-y-0.5 pr-2 sm:pr-2">
                  <Dialog.Title className="text-sm font-semibold tracking-tight sm:text-base">
                    Unemployment by state — expanded
                  </Dialog.Title>
                  <Dialog.Description
                    className="max-sm:sr-only text-xs text-muted-foreground sm:block sm:text-sm"
                    id={modalSummaryId}
                  >
                    2024 annual averages · Use controls to change sort, filter, or view ·
                    Close or Escape to exit
                  </Dialog.Description>
                </div>
                <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                  {isNarrow ? (
                    <Button
                      aria-controls={
                        showFullExpandedModalControls
                          ? modalControlsId
                          : `${modalControlsId}-quick`
                      }
                      aria-expanded={showFullExpandedModalControls}
                      className="h-8 shrink-0 px-2.5 text-xs"
                      size="sm"
                      type="button"
                      variant="ghost"
                      onClick={() => setMobileModalFullControls((v) => !v)}
                    >
                      {showFullExpandedModalControls ? "Hide controls" : "Show controls"}
                    </Button>
                  ) : null}
                  <Dialog.Close
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "h-8 shrink-0 px-2.5 text-xs sm:h-9 sm:px-3 sm:text-sm",
                    )}
                    title="Close (Escape)"
                    type="button"
                  >
                    Close
                  </Dialog.Close>
                </div>
              </div>

              <div
                ref={expandedShellRef}
                className={cn(
                  "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-card px-2 pb-2 pt-1 sm:gap-3 sm:px-3 sm:pb-3 sm:pt-3",
                  "max-sm:gap-1",
                  "[&:fullscreen]:h-screen [&:fullscreen]:max-h-none [&:fullscreen]:w-screen [&:fullscreen]:gap-3 [&:fullscreen]:overflow-auto [&:fullscreen]:p-3",
                )}
              >
                {showFullExpandedModalControls ? (
                  <LaborExpandedDialogControls
                    dataset={dataset}
                    densityGroupId={densityGroupId}
                    expandedDensity={expandedDensity}
                    filterId={modalFilterId}
                    fsActive={fsActive}
                    headingId={headingId}
                    idPrefix={modalControlsId}
                    nameFilter={nameFilter}
                    setExpandedDensity={setExpandedDensity}
                    setNameFilter={setNameFilter}
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    onDatasetChange={onDatasetChange}
                    onResetView={resetLaborChartView}
                    onToggleFullscreen={toggleFullscreen}
                  />
                ) : null}

                {isNarrow && !showFullExpandedModalControls ? (
                  <LaborExpandedModalMobileQuickRow
                    dataset={dataset}
                    densityGroupId={densityGroupId}
                    fsActive={fsActive}
                    headingId={headingId}
                    nameFilter={nameFilter}
                    quickControlsId={`${modalControlsId}-quick`}
                    setNameFilter={setNameFilter}
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    onDatasetChange={onDatasetChange}
                    onToggleFullscreen={toggleFullscreen}
                  />
                ) : null}

                {!hasChartData ? (
                  <p className="text-sm text-muted-foreground" role="status">
                    No states match this filter.
                  </p>
                ) : (
                  <>
                    <LaborExpandedStatusStrip
                      compact={isNarrow && !showFullExpandedModalControls}
                      insight={expandedInsight}
                      sortLabel={expandedSortLabel}
                      stateCount={visualTopToBottom.length}
                    />
                    <span className="sr-only">
                      Scroll the chart region vertically to see all states in the current
                      sort order.
                    </span>
                    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                      <LaborUnemploymentBarChartRegion
                        barData={barData}
                        density={expandedDensity}
                        maxRate={maxRate}
                        summaryId={`${modalSummaryId} ${summaryId} ${densityGroupId}`}
                        variant="expanded"
                        isNarrow={isNarrow}
                        isTablet={isTablet}
                      />
                    </div>
                    <StateLaborUnemploymentByStateA11yTable
                      data={visualTopToBottom}
                      describedBy={`${headingId}-labor-chart-sr ${summaryId} ${modalControlsId} ${modalSummaryId} ${densityGroupId}`}
                      labelledBy={headingId}
                    />
                  </>
                )}
              </div>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

/** Inline charts tab: same control structure as expanded dialog, scaled slightly tighter. */
function LaborChartsPageControlBar({
  idPrefix,
  headingId,
  dataset,
  onDatasetChange,
  sortMode,
  setSortMode,
  nameFilter,
  setNameFilter,
  filterId,
  onExpandChart,
  expandDisabled,
  onResetView,
}: {
  idPrefix: string;
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
  sortMode: LaborChartSortMode;
  setSortMode: (m: LaborChartSortMode) => void;
  nameFilter: string;
  setNameFilter: (v: string) => void;
  filterId: string;
  onExpandChart: () => void;
  expandDisabled: boolean;
  onResetView: () => void;
}) {
  const datasetPrefix = `${headingId}-labor-chart-dataset`;
  const sortSelectId = `${headingId}-labor-chart-sort`;

  return (
    <div className="mt-3 w-full" id={idPrefix}>
      <div className="rounded-lg border border-border/80 bg-muted/10 p-1.5 sm:p-2">
        <div className="flex flex-wrap items-end gap-x-2 gap-y-2 sm:gap-x-2.5 sm:gap-y-2.5">
          <ExpandedControlSection title="Data">
            <DashboardDatasetToggle
              className="shrink-0"
              idPrefix={datasetPrefix}
              value={dataset}
              variant="bar"
              onChange={onDatasetChange}
            />
          </ExpandedControlSection>

          <ExpandedControlSection className="max-w-full sm:max-w-none" title="Sort by">
            <label className="sr-only" htmlFor={sortSelectId}>
              Sort order
            </label>
            <select
              className={expandedSelectClass}
              id={sortSelectId}
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as LaborChartSortMode)}
            >
              <option value="high-low">High → Low (unemployment)</option>
              <option value="low-high">Low → High (unemployment)</option>
              <option value="alphabetical">A–Z (state name)</option>
            </select>
          </ExpandedControlSection>

          <ExpandedControlSection
            className="w-full max-w-[min(100%,220px)] sm:w-auto"
            title="Filter"
          >
            <div className="flex flex-wrap items-end gap-1.5">
              <div className="min-w-0 flex-1">
                <label className="sr-only" htmlFor={filterId}>
                  Search states by name
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
          </ExpandedControlSection>

          <ExpandedControlSection title="View">
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
          </ExpandedControlSection>

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

const expandedSelectClass = cn(
  "h-8 w-full min-w-[10.25rem] max-w-[13rem] rounded-md border border-input bg-background px-2 py-1 text-sm shadow-sm ring-offset-background",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
);

function ExpandedControlSection({
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

function ExpandedDensityPill({
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

function LaborExpandedStatusStrip({
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
      <span aria-hidden className="hidden text-border sm:inline">
        |
      </span>
      <span>
        Sorted: <span className="text-foreground">{sortLabel}</span>
      </span>
      {insight && !compact ? (
        <>
          <span aria-hidden className="hidden text-border sm:inline">
            |
          </span>
          <span className="max-w-[min(100%,24rem)] text-foreground/90">{insight}</span>
        </>
      ) : null}
    </div>
  );
}

const mobileModalQuickSelectClass = cn(
  "h-8 min-w-[6.5rem] max-w-[11rem] shrink rounded-md border border-input bg-background px-1.5 text-xs shadow-sm ring-offset-background",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
);

/** One compact row: data, sort, filter (details), full screen — keeps the chart in view on phones. */
function LaborExpandedModalMobileQuickRow({
  quickControlsId,
  headingId,
  dataset,
  onDatasetChange,
  sortMode,
  setSortMode,
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
  sortMode: LaborChartSortMode;
  setSortMode: (m: LaborChartSortMode) => void;
  nameFilter: string;
  setNameFilter: (v: string) => void;
  densityGroupId: string;
  onToggleFullscreen: () => void;
  fsActive: boolean;
}) {
  const sortSelectId = `${headingId}-labor-modal-mobile-sort`;
  const filterId = `${headingId}-labor-modal-mobile-filter`;
  const datasetPrefix = `${headingId}-labor-modal-mobile-dataset`;

  return (
    <div
      aria-label="Quick chart controls"
      className="flex shrink-0 flex-wrap items-center gap-1.5 border-b border-border/50 pb-1.5 max-sm:-mx-2 max-sm:border-border/40 max-sm:px-2"
      id={quickControlsId}
      role="group"
    >
      <DashboardDatasetToggle
        className="min-w-0 shrink-0"
        idPrefix={datasetPrefix}
        value={dataset}
        variant="bar"
        onChange={onDatasetChange}
      />
      <div className="flex min-w-0 items-center gap-1">
        <label className="sr-only" htmlFor={sortSelectId}>
          Sort order
        </label>
        <select
          className={mobileModalQuickSelectClass}
          id={sortSelectId}
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as LaborChartSortMode)}
        >
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
          <option value="alphabetical">A–Z</option>
        </select>
      </div>
      <details className="group relative min-w-0">
        <summary
          aria-label={nameFilter.trim() ? "Filter states, filter active" : "Filter states"}
          className={cn(
            "flex h-8 cursor-pointer list-none items-center gap-1 rounded-md border border-input bg-background px-2 text-xs font-medium text-foreground shadow-sm",
            "outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <span aria-hidden>Filter</span>
          {nameFilter.trim() ? (
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          ) : null}
        </summary>
        <div className="absolute left-0 top-full z-30 mt-1 w-[min(calc(100vw-2rem),16rem)] rounded-md border border-border bg-popover p-2 shadow-md">
          <label className="sr-only" htmlFor={filterId}>
            Search states by name
          </label>
          <div className="flex items-center gap-1">
            <input
              autoComplete="off"
              className={cn(
                "h-8 w-full min-w-0 flex-1 rounded-md border border-input bg-background px-2 text-xs shadow-sm ring-offset-background placeholder:text-muted-foreground",
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
        className="ml-auto h-8 shrink-0 px-2 text-xs sm:ml-0"
        size="sm"
        type="button"
        variant="outline"
        onClick={onToggleFullscreen}
      >
        {fsActive ? "Exit" : "Full"}
      </Button>
    </div>
  );
}

/** Expanded dialog: compact dashboard-style control bar (Data → Sort → Filter → View + reset). */
function LaborExpandedDialogControls({
  idPrefix,
  headingId,
  dataset,
  onDatasetChange,
  sortMode,
  setSortMode,
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
  sortMode: LaborChartSortMode;
  setSortMode: (m: LaborChartSortMode) => void;
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
  const sortSelectId = `${headingId}-labor-expanded-sort`;
  const datasetPrefix = `${headingId}-labor-expanded-dataset`;

  return (
    <div className="flex shrink-0 flex-col gap-2" id={idPrefix}>
      <div className="rounded-lg border border-border/80 bg-muted/10 p-2 sm:p-2.5">
        <div className="flex flex-wrap items-end gap-x-3 gap-y-3">
          <ExpandedControlSection title="Data">
            <DashboardDatasetToggle
              className="shrink-0"
              idPrefix={datasetPrefix}
              value={dataset}
              variant="bar"
              onChange={onDatasetChange}
            />
          </ExpandedControlSection>

          <ExpandedControlSection className="max-w-full sm:max-w-none" title="Sort by">
            <label className="sr-only" htmlFor={sortSelectId}>
              Sort order
            </label>
            <select
              className={expandedSelectClass}
              id={sortSelectId}
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as LaborChartSortMode)}
            >
              <option value="high-low">High → Low (unemployment)</option>
              <option value="low-high">Low → High (unemployment)</option>
              <option value="alphabetical">A–Z (state name)</option>
            </select>
          </ExpandedControlSection>

          <ExpandedControlSection className="w-full max-w-[min(100%,240px)] sm:w-auto" title="Filter">
            <div className="flex flex-wrap items-end gap-1.5">
              <div className="min-w-0 flex-1">
                <label
                  className="sr-only"
                  htmlFor={filterId}
                >
                  Search states by name
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
          </ExpandedControlSection>

          <ExpandedControlSection title="View">
            <div className="flex flex-wrap items-center gap-2">
              <div
                aria-label="Chart density"
                className="inline-flex items-center gap-0.5 rounded-md border border-border/80 bg-background p-0.5"
                role="radiogroup"
              >
                <ExpandedDensityPill
                  active={expandedDensity === "comfortable"}
                  label="Comfortable"
                  onSelect={() => setExpandedDensity("comfortable")}
                />
                <ExpandedDensityPill
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
          </ExpandedControlSection>

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

type LaborUnemploymentBarChartRegionProps = {
  variant: "inline" | "expanded";
  density?: ExpandedChartDensity;
  barData: Array<{ stateName: string; value: number; year: number }>;
  maxRate: number;
  isNarrow: boolean;
  isTablet: boolean;
  summaryId: string;
};

function LaborUnemploymentBarChartRegion({
  variant,
  density = "comfortable",
  barData,
  maxRate,
  isNarrow,
  isTablet,
  summaryId,
}: LaborUnemploymentBarChartRegionProps) {
  const expanded = variant === "expanded";
  const compact = expanded && density === "compact";

  const barMargins = useMemo(() => {
    if (expanded && compact) {
      return { top: 14, right: 24, bottom: 64, left: 168 } as const;
    }
    if (expanded) {
      return { top: 18, right: 36, bottom: 72, left: 236 } as const;
    }
    if (isNarrow) {
      return { top: 14, right: 14, bottom: 92, left: 128 } as const;
    }
    if (isTablet) {
      return { top: 16, right: 22, bottom: 76, left: 164 } as const;
    }
    return { top: 18, right: 30, bottom: 76, left: 200 } as const;
  }, [expanded, compact, isNarrow, isTablet]);

  const tickFontSize = expanded
    ? compact
      ? 11
      : 13
    : isNarrow
      ? 10
      : isTablet
        ? 11
        : 12;

  const rowPitch = expanded ? (compact ? 30 : 46) : 36;

  const chartHeight = Math.min(
    2400,
    Math.max(
      expanded ? 440 : 380,
      barData.length * rowPitch + (expanded ? (compact ? 160 : 208) : 176),
    ),
  );

  const scrollClass = expanded
    ? "min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden rounded-md border bg-muted/20 shadow-[inset_0_0_0_1px_hsl(var(--border)_/_0.6)]"
    : "max-h-[min(72dvh,52rem)] overflow-y-auto overflow-x-hidden rounded-md border bg-muted/20 shadow-[inset_0_0_0_1px_hsl(var(--border)_/_0.6)] sm:max-h-[min(70vh,52rem)]";

  const barPadding = expanded ? (compact ? 0.34 : 0.48) : isNarrow ? 0.42 : 0.46;

  const legendFont = expanded
    ? compact
      ? 11
      : 13
    : isNarrow && !expanded
      ? 11
      : 12;

  const axisLeftTickPad =
    expanded && compact ? 5 : isNarrow && !expanded ? 6 : expanded ? 12 : 10;

  return (
    <div
      aria-describedby={summaryId}
      className="relative flex min-h-0 min-w-0 flex-1 flex-col"
    >
      <div aria-hidden="true" className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className={scrollClass}>
          <div
            className={cn(
              "w-full",
              expanded ? "min-h-[280px] sm:min-h-[360px]" : "min-h-[280px] sm:min-h-[360px]",
            )}
            style={{ height: chartHeight }}
          >
            <ResponsiveBar
              animate
              axisBottom={{
                format: (v) => `${Number(v).toFixed(1)}%`,
                legend: "Unemployment Rate (%)",
                legendOffset: expanded && compact ? 40 : isNarrow && !expanded ? 52 : 46,
                tickPadding: compact ? 4 : 8,
                tickRotation: isNarrow && !expanded ? -24 : 0,
                tickValues: 5,
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: axisLeftTickPad,
              }}
              axisRight={null}
              axisTop={null}
              borderColor={{ from: "color", modifiers: [["darker", 0.55]] }}
              borderRadius={2}
              borderWidth={1}
              colors={() => "#15803d"}
              data={barData}
              enableGridX
              enableGridY={false}
              enableLabel={false}
              indexBy="stateName"
              isFocusable={false}
              keys={["value"]}
              layout="horizontal"
              margin={barMargins}
              padding={barPadding}
              valueScale={{
                type: "linear",
                min: 0,
                max: maxRate * 1.08,
              }}
              theme={{
                text: { fill: "var(--foreground)" },
                axis: {
                  ticks: {
                    text: {
                      fill: "var(--muted-foreground)",
                      fontSize: tickFontSize,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: legendFont,
                      fill: "var(--foreground)",
                    },
                  },
                },
                grid: { line: { stroke: "var(--border)" } },
              }}
              tooltip={({ data: row, value }) => (
                <div className="rounded border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md">
                  <div className="font-medium">{row.stateName}</div>
                  <div className="mt-1 tabular-nums">
                    {formatUnemploymentRate(Number(value))}
                  </div>
                </div>
              )}
              valueFormat={(v) => formatUnemploymentRate(Number(v))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

