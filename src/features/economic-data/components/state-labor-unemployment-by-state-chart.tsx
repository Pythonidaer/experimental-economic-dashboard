"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ResponsiveBar } from "@nivo/bar";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  type ChartSortMode,
  ChartToolbarExpandedDialogControls,
  ChartToolbarExpandedModalMobileQuickRow,
  ChartToolbarExpandedStatusStrip,
  ChartToolbarPageControlBar,
  type ChartSortOption,
  type ExpandedChartDensity,
  chartSortExpandedSummaryLabel,
  exitPanelFullscreen,
  getPanelFullscreenElement,
  orderRowsForBarChartDisplay,
  usePanelFullscreenState,
} from "@/features/economic-data/components/chart-controls-shared";
import {
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
  /** When false, hide Labor/Exports toggles (parent supplies dataset control). */
  showDatasetToggle?: boolean;
};

const LABOR_CHART_SORT_OPTIONS: ChartSortOption[] = [
  { value: "high-low", label: "High → Low (unemployment)" },
  { value: "low-high", label: "Low → High (unemployment)" },
  { value: "alphabetical", label: "A–Z (state name)" },
];

/**
 * All states: horizontal bars of unemployment (latest year per state), scrollable, with sort + filter + expanded dialog.
 */
export function LaborUnemploymentByStateChartBody({
  summaryId,
  headingId,
  dataset,
  onDatasetChange,
  showDatasetToggle = true,
}: LaborChartSummaryProps) {
  const { data, error, isPending, isError, isSuccess } = useStateLaborMetrics();
  const isNarrow = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const [sortMode, setSortMode] = useState<ChartSortMode>("high-low");
  const [nameFilter, setNameFilter] = useState("");
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [expandedDensity, setExpandedDensity] = useState<ExpandedChartDensity>("comfortable");
  /** Full control panel in expanded modal; always on for sm+; on mobile defaults collapsed for chart-first layout. */
  const [mobileModalFullControls, setMobileModalFullControls] = useState(false);
  const expandedShellRef = useRef<HTMLDivElement>(null);
  const { fsActive, toggleFullscreen } = usePanelFullscreenState(expandedShellRef);

  const onExpandedOpenChange = useCallback((open: boolean) => {
    setExpandedOpen(open);
    if (!open) {
      const fsEl = getPanelFullscreenElement();
      if (fsEl && expandedShellRef.current?.contains(fsEl)) {
        void exitPanelFullscreen();
      }
    }
  }, []);

  useEffect(() => {
    if (expandedOpen && isNarrow) {
      setMobileModalFullControls(false);
    }
  }, [expandedOpen, isNarrow]);

  const showFullExpandedModalControls = !isNarrow || mobileModalFullControls;

  const baseRows = useMemo(
    () => (data?.length ? buildLatestUnemploymentByStateBarData(data) : []),
    [data],
  );

  const filteredRows = useMemo(() => {
    const q = nameFilter.trim().toLowerCase();
    if (!q) return baseRows;
    return baseRows.filter(
      (r) =>
        r.stateName.toLowerCase().includes(q) ||
        r.stateCode.toLowerCase().includes(q),
    );
  }, [baseRows, nameFilter]);

  const visualTopToBottom = useMemo(
    () => orderRowsForBarChartDisplay(filteredRows, sortMode),
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
    () => chartSortExpandedSummaryLabel(sortMode),
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
          <ChartToolbarPageControlBar
            dataset={dataset}
            expandDisabled={filteredRows.length === 0}
            filterId={inlineFilterId}
            headingId={headingId}
            idPrefix={inlineControlsId}
            isNarrow={isNarrow}
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
            showDatasetToggle={showDatasetToggle}
            sortMode={sortMode}
            setSortMode={setSortMode}
            sortOptions={LABOR_CHART_SORT_OPTIONS}
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
              <div className={cn("mt-3", isNarrow && "mt-2")}>
                <ChartToolbarExpandedStatusStrip
                  compact={isNarrow}
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
                  "flex shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-border bg-card",
                  "max-sm:sticky max-sm:top-0 max-sm:z-20 max-sm:px-2 max-sm:py-1 max-sm:pt-[max(0.125rem,env(safe-area-inset-top))]",
                  "sm:items-start sm:gap-2 sm:px-4 sm:py-2",
                )}
              >
                <div className="min-w-0 flex-1 pr-1 sm:space-y-0.5 sm:pr-2">
                  <Dialog.Title className="text-xs font-semibold leading-tight tracking-tight sm:text-base sm:leading-snug">
                    Unemployment by state — expanded
                  </Dialog.Title>
                  <Dialog.Description
                    className="mt-0.5 max-sm:sr-only text-xs text-muted-foreground sm:mt-0 sm:block sm:text-sm"
                    id={modalSummaryId}
                  >
                    2024 annual averages · Use controls to change sort, filter, or view ·
                    Close or Escape to exit
                  </Dialog.Description>
                </div>
                <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
                  {isNarrow ? (
                    <Button
                      aria-controls={
                        showFullExpandedModalControls
                          ? modalControlsId
                          : `${modalControlsId}-quick`
                      }
                      aria-expanded={showFullExpandedModalControls}
                      className="h-8 shrink-0 gap-0.5 px-2 text-xs text-muted-foreground hover:text-foreground"
                      size="sm"
                      type="button"
                      variant="ghost"
                      onClick={() => setMobileModalFullControls((v) => !v)}
                    >
                      {showFullExpandedModalControls ? "Hide controls" : "Show controls"}
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "size-3.5 opacity-70 transition-transform duration-200",
                          showFullExpandedModalControls && "rotate-180",
                        )}
                      />
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
                  "max-sm:gap-1.5 max-sm:px-2 max-sm:pt-1 max-sm:pb-2",
                  "[&:fullscreen]:h-screen [&:fullscreen]:max-h-none [&:fullscreen]:w-screen [&:fullscreen]:gap-3 [&:fullscreen]:overflow-auto [&:fullscreen]:p-3",
                )}
              >
                {isNarrow && !showFullExpandedModalControls ? (
                  <ChartToolbarExpandedModalMobileQuickRow
                    dataset={dataset}
                    densityGroupId={densityGroupId}
                    fsActive={fsActive}
                    headingId={headingId}
                    nameFilter={nameFilter}
                    quickControlsId={`${modalControlsId}-quick`}
                    setNameFilter={setNameFilter}
                    showDatasetToggle={showDatasetToggle}
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    sortOptions={LABOR_CHART_SORT_OPTIONS}
                    onDatasetChange={onDatasetChange}
                    onToggleFullscreen={toggleFullscreen}
                  />
                ) : null}

                {showFullExpandedModalControls ? (
                  <ChartToolbarExpandedDialogControls
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
                    showDatasetToggle={showDatasetToggle}
                    sortMode={sortMode}
                    setSortMode={setSortMode}
                    sortOptions={LABOR_CHART_SORT_OPTIONS}
                    onDatasetChange={onDatasetChange}
                    onResetView={resetLaborChartView}
                    onToggleFullscreen={toggleFullscreen}
                  />
                ) : null}

                {!hasChartData ? (
                  <p className="text-sm text-muted-foreground" role="status">
                    No states match this filter.
                  </p>
                ) : (
                  <>
                    <ChartToolbarExpandedStatusStrip
                      compact={isNarrow}
                      insight={expandedInsight}
                      sortLabel={expandedSortLabel}
                      stateCount={visualTopToBottom.length}
                    />
                    <span className="sr-only">
                      Scroll the chart region vertically to see all states in the current
                      sort order.
                    </span>
                    <div
                      className={cn(
                        "flex min-h-0 min-w-0 flex-1 flex-col",
                        isNarrow &&
                          "rounded-xl border border-border/70 bg-card p-1.5 shadow-sm",
                      )}
                    >
                      <LaborUnemploymentBarChartRegion
                        barData={barData}
                        density={expandedDensity}
                        expandedMobileLayout={isNarrow}
                        maxRate={maxRate}
                        summaryId={`${modalSummaryId} ${summaryId} ${densityGroupId}`}
                        variant="expanded"
                        isNarrow={isNarrow}
                        isTablet={isTablet}
                      />
                      {isNarrow ? (
                        <p
                          aria-hidden
                          className="mt-1.5 shrink-0 text-center text-[11px] leading-tight text-muted-foreground"
                        >
                          Scroll to see all states.
                        </p>
                      ) : null}
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


type LaborUnemploymentBarChartRegionProps = {
  variant: "inline" | "expanded";
  density?: ExpandedChartDensity;
  barData: Array<{ stateName: string; value: number; year: number }>;
  maxRate: number;
  isNarrow: boolean;
  isTablet: boolean;
  summaryId: string;
  /** Expanded modal on small screens: tighter margins, value scale on top, end labels. */
  expandedMobileLayout?: boolean;
};

function LaborUnemploymentBarChartRegion({
  variant,
  density = "comfortable",
  barData,
  maxRate,
  isNarrow,
  isTablet,
  summaryId,
  expandedMobileLayout = false,
}: LaborUnemploymentBarChartRegionProps) {
  const expanded = variant === "expanded";
  const compact = expanded && density === "compact";
  const useTopValueAxis = expanded && expandedMobileLayout;

  const barMargins = useMemo(() => {
    if (useTopValueAxis) {
      return compact
        ? ({ top: 46, right: 12, bottom: 20, left: 96 } as const)
        : ({ top: 54, right: 14, bottom: 24, left: 108 } as const);
    }
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
  }, [useTopValueAxis, expanded, compact, isNarrow, isTablet]);

  const tickFontSize = expanded
    ? compact
      ? 11
      : 13
    : isNarrow
      ? 10
      : isTablet
        ? 11
        : 12;

  const rowPitch = useMemo(() => {
    if (useTopValueAxis) {
      return compact ? 32 : 40;
    }
    if (expanded) {
      return compact ? 30 : 46;
    }
    return 36;
  }, [useTopValueAxis, expanded, compact]);

  const chartHeight = Math.min(
    2400,
    Math.max(
      expanded ? (useTopValueAxis ? 360 : 440) : 380,
      barData.length * rowPitch + (expanded ? (compact ? 160 : useTopValueAxis ? 188 : 208) : 176),
    ),
  );

  const scrollClass = expanded
    ? useTopValueAxis
      ? "min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden rounded-md bg-muted/15"
      : "min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden rounded-md border bg-muted/20 shadow-[inset_0_0_0_1px_hsl(var(--border)_/_0.6)]"
    : "max-h-[min(72dvh,52rem)] overflow-y-auto overflow-x-hidden rounded-md border bg-muted/20 shadow-[inset_0_0_0_1px_hsl(var(--border)_/_0.6)] sm:max-h-[min(70vh,52rem)]";

  const barPadding = useTopValueAxis
    ? compact
      ? 0.36
      : 0.42
    : expanded
      ? compact
        ? 0.34
        : 0.48
      : isNarrow
        ? 0.42
        : 0.46;

  const legendFont = expanded
    ? compact
      ? 11
      : 13
    : isNarrow && !expanded
      ? 11
      : 12;

  const axisLeftTickPad = useTopValueAxis
    ? 5
    : expanded && compact
      ? 5
      : isNarrow && !expanded
        ? 6
        : expanded
          ? 12
          : 10;

  const valueAxisFormat = (v: string | number) => `${Math.round(Number(v))}%`;

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
              expanded
                ? useTopValueAxis
                  ? "min-h-[220px] sm:min-h-[360px]"
                  : "min-h-[280px] sm:min-h-[360px]"
                : "min-h-[280px] sm:min-h-[360px]",
            )}
            style={{ height: chartHeight }}
          >
            <ResponsiveBar
              animate
              axisBottom={
                useTopValueAxis
                  ? null
                  : {
                      format: (v) => `${Number(v).toFixed(1)}%`,
                      legend: "Unemployment Rate (%)",
                      legendOffset:
                        expanded && compact ? 40 : isNarrow && !expanded ? 52 : 46,
                      tickPadding: compact ? 4 : 8,
                      tickRotation: isNarrow && !expanded ? -24 : 0,
                      tickValues: 5,
                    }
              }
              axisLeft={{
                tickSize: 0,
                tickPadding: axisLeftTickPad,
              }}
              axisRight={null}
              axisTop={
                useTopValueAxis
                  ? {
                      format: valueAxisFormat,
                      legend: "Unemployment Rate (%)",
                      legendOffset: -40,
                      tickPadding: 5,
                      tickRotation: 0,
                      tickValues: 5,
                    }
                  : null
              }
              borderColor={{ from: "color", modifiers: [["darker", 0.55]] }}
              borderRadius={2}
              borderWidth={1}
              colors={() => "#15803d"}
              data={barData}
              enableGridX
              enableGridY={false}
              enableLabel={useTopValueAxis}
              indexBy="stateName"
              labelSkipWidth={useTopValueAxis ? 10 : 0}
              isFocusable={false}
              keys={["value"]}
              labelTextColor="#15803d"
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

