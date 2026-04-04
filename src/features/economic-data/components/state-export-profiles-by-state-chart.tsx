"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ResponsiveBar } from "@nivo/bar";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { StateExportProfilesByStateA11yTable } from "@/features/economic-data/components/state-export-profiles-by-state-a11y-table";
import { useStateExportProfiles } from "@/features/economic-data/hooks/use-state-export-profiles";
import {
  buildLatestExportMetricByStateBarData,
  EXPORT_PROFILE_METRIC_LABELS,
  NON_MANUFACTURED_EXPORTS_SCOPED_NOTE,
  type ExportProfileBarDatum,
  type ExportProfileMetricKey,
} from "@/features/economic-data/utils/export-profiles-chart-data";
import { formatExportMillionsUsdCompact } from "@/features/economic-data/utils/format-export-profile-value";
import { formatExportPeriodLabelForDisplay } from "@/features/economic-data/utils/format-export-period-label";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";

function barColorForMetric(metric: ExportProfileMetricKey): string {
  switch (metric) {
    case "manufactured_exports":
      return "#2563eb";
    case "non_manufactured_exports":
      return "#64748b";
    case "re_exports":
      return "#cbd5e1";
    case "total_exports":
      return "#1d4ed8";
    default:
      return "#2563eb";
  }
}

const METRIC_OPTIONS: ExportProfileMetricKey[] = [
  "manufactured_exports",
  "non_manufactured_exports",
  "re_exports",
  "total_exports",
];

type ExportChartSummaryProps = {
  summaryId: string;
  headingId: string;
  dataset: DashboardDataset;
  onDatasetChange: (value: DashboardDataset) => void;
  showDatasetToggle?: boolean;
};

type ExportProfilesBarChartRegionProps = {
  variant: "inline" | "expanded";
  density?: ExpandedChartDensity;
  barData: ExportProfileBarDatum[];
  maxValue: number;
  metric: ExportProfileMetricKey;
  isNarrow: boolean;
  isTablet: boolean;
  summaryId: string;
  expandedMobileLayout?: boolean;
};

function ExportProfilesBarChartRegion({
  variant,
  density = "comfortable",
  barData,
  maxValue,
  metric,
  isNarrow,
  isTablet,
  summaryId,
  expandedMobileLayout = false,
}: ExportProfilesBarChartRegionProps) {
  const expanded = variant === "expanded";
  const compact = expanded && density === "compact";
  const useTopValueAxis = expanded && expandedMobileLayout;
  const fill = barColorForMetric(metric);

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
      return { top: 14, right: 14, bottom: 88, left: 128 } as const;
    }
    if (isTablet) {
      return { top: 16, right: 22, bottom: 60, left: 164 } as const;
    }
    return { top: 18, right: 28, bottom: 56, left: 200 } as const;
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
        ? 0.38
        : 0.42;

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
        ? 4
        : expanded
          ? 12
          : 10;

  const axisLegend = `${EXPORT_PROFILE_METRIC_LABELS[metric]} (millions of U.S. dollars)`;

  const valueAxisFormat = (v: string | number) =>
    formatExportMillionsUsdCompact(Number(v));

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
                      format: (v) => formatExportMillionsUsdCompact(Number(v)),
                      legend: axisLegend,
                      legendOffset: isNarrow && !expanded ? 52 : 44,
                      tickPadding: compact ? 4 : 8,
                      tickRotation: isNarrow && !expanded ? -28 : 0,
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
                      legend: axisLegend,
                      legendOffset: -40,
                      tickPadding: 5,
                      tickRotation: 0,
                    }
                  : null
              }
              borderColor={metric === "re_exports" ? "#94a3b8" : "#1e3a8a"}
              borderRadius={metric === "re_exports" ? 1 : 2}
              borderWidth={1}
              colors={() => fill}
              data={barData}
              enableGridX
              enableGridY={false}
              enableLabel={useTopValueAxis}
              indexBy="stateName"
              labelTextColor="#1e40af"
              isFocusable={false}
              keys={["value"]}
              labelSkipWidth={useTopValueAxis ? 10 : 0}
              layout="horizontal"
              margin={barMargins}
              padding={barPadding}
              valueScale={{
                type: "linear",
                min: 0,
                max: maxValue * 1.08 || 1,
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
                  <strong className="font-medium">{row.stateName}</strong>{" "}
                  <span className="text-muted-foreground">({row.stateCode})</span>
                  <div className="mt-0.5 text-[0.65rem] text-muted-foreground">
                    {formatExportPeriodLabelForDisplay(row.periodLabel || null)}
                  </div>
                  <div className="mt-1 tabular-nums">
                    {formatExportMillionsUsdCompact(Number(value))}
                  </div>
                </div>
              )}
              valueFormat={(v) => formatExportMillionsUsdCompact(Number(v))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Horizontal bars: one export bucket at a time with the same sort / filter / expand pattern as labor.
 */
export function StateExportProfilesByStateChartBody({
  summaryId,
  headingId,
  dataset,
  onDatasetChange,
  showDatasetToggle = true,
}: ExportChartSummaryProps) {
  const [metric, setMetric] = useState<ExportProfileMetricKey>("manufactured_exports");
  const [sortMode, setSortMode] = useState<ChartSortMode>("high-low");
  const [nameFilter, setNameFilter] = useState("");
  const [expandedOpen, setExpandedOpen] = useState(false);
  const [expandedDensity, setExpandedDensity] = useState<ExpandedChartDensity>("comfortable");
  const [mobileModalFullControls, setMobileModalFullControls] = useState(false);

  const expandedShellRef = useRef<HTMLDivElement>(null);
  const { fsActive, toggleFullscreen } = usePanelFullscreenState(expandedShellRef);

  const { data, error, isPending, isError, isSuccess } = useStateExportProfiles();
  const isNarrow = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const exportSortOptions = useMemo((): ChartSortOption[] => {
    const short = EXPORT_PROFILE_METRIC_LABELS[metric];
    return [
      { value: "high-low", label: `High → Low (${short})` },
      { value: "low-high", label: `Low → High (${short})` },
      { value: "alphabetical", label: "A–Z (state name)" },
    ];
  }, [metric]);

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
    () => (data?.length ? buildLatestExportMetricByStateBarData(data, metric) : []),
    [data, metric],
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
    () => [...visualTopToBottom].reverse(),
    [visualTopToBottom],
  );

  const maxValue = useMemo(() => {
    if (!visualTopToBottom.length) return 1;
    return Math.max(...visualTopToBottom.map((d) => d.value), 1);
  }, [visualTopToBottom]);

  const inlineControlsId = `${headingId}-export-chart-controls`;
  const inlineFilterId = `${headingId}-export-chart-filter`;
  const modalControlsId = `${headingId}-export-chart-modal-controls`;
  const modalFilterId = `${headingId}-export-chart-modal-filter`;
  const modalSummaryId = `${headingId}-export-chart-modal-desc`;
  const densityGroupId = `${headingId}-export-chart-density`;
  const metricGroupId = `${headingId}-export-metric`;
  const metricLegendId = `${metricGroupId}-legend`;

  const hasChartData = baseRows.length > 0 && filteredRows.length > 0;

  const expandedSortLabel = useMemo(
    () => chartSortExpandedSummaryLabel(sortMode),
    [sortMode],
  );

  const expandedInsight = useMemo(() => {
    if (!visualTopToBottom.length) return null;
    const first = visualTopToBottom[0];
    if (sortMode === "high-low") {
      return `${first.stateName}: ${formatExportMillionsUsdCompact(first.value)} (highest)`;
    }
    if (sortMode === "low-high") {
      return `${first.stateName}: ${formatExportMillionsUsdCompact(first.value)} (lowest)`;
    }
    return `${first.stateName} first (A–Z)`;
  }, [visualTopToBottom, sortMode]);

  const resetExportChartView = useCallback(() => {
    setNameFilter("");
    setSortMode("high-low");
    setExpandedDensity("comfortable");
  }, []);

  return (
    <>
      <div className="mt-3 space-y-2 rounded-lg border border-border/80 bg-muted/10 p-3 sm:p-3.5">
        <p className="text-xs font-medium text-foreground" id={metricLegendId}>
          One bucket at a time. Census origin-of-movement data (shipped-from state), not
          detailed industries. Values are{" "}
          <strong className="font-medium text-foreground">millions of U.S. dollars</strong>.
        </p>
        <div
          aria-labelledby={metricLegendId}
          className="flex flex-wrap gap-2"
          id={metricGroupId}
          role="radiogroup"
        >
          {METRIC_OPTIONS.map((key) => (
            <button
              key={key}
              aria-checked={metric === key}
              className={cn(
                "inline-flex min-h-9 items-center justify-center rounded-lg border px-2.5 text-xs font-medium transition-colors sm:text-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                key === "re_exports" && metric !== key ? "opacity-85" : "",
                metric === key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-muted/80",
              )}
              role="radio"
              type="button"
              onClick={() => setMetric(key)}
            >
              {EXPORT_PROFILE_METRIC_LABELS[key]}
            </button>
          ))}
        </div>
        {metric === "non_manufactured_exports" ? (
          <p
            aria-live="polite"
            className="border-l-2 border-primary/30 pl-2 text-[0.7rem] leading-snug text-muted-foreground"
          >
            {NON_MANUFACTURED_EXPORTS_SCOPED_NOTE}
          </p>
        ) : null}
      </div>

      <p className="sr-only" id={`${headingId}-export-chart-sr`}>
        Horizontal bar chart of {EXPORT_PROFILE_METRIC_LABELS[metric]} by state, latest loaded
        period per state. Use sort, filter, and expand controls to change the view. Values are
        millions of U.S. dollars. Origin of movement, not production-by-state. A data table below
        matches the current chart order for screen readers.
        {metric === "non_manufactured_exports"
          ? ` Non-manufactured: ${NON_MANUFACTURED_EXPORTS_SCOPED_NOTE}`
          : ""}
      </p>

      {isPending ? <ViewLoading message="Loading export profiles…" /> : null}
      {isError ? (
        <ViewError
          description={error instanceof Error ? error.message : undefined}
          title="Could not load data"
        />
      ) : null}
      {isSuccess && data.length === 0 ? (
        <ViewEmpty description="No export profile rows yet. Add Census origin-of-movement data to state_export_profiles." />
      ) : null}
      {isSuccess && data.length > 0 && baseRows.length === 0 ? (
        <ViewEmpty description="No numeric values for this metric in the current rows." />
      ) : null}
      {isSuccess && baseRows.length > 0 ? (
        <div
          aria-describedby={`${headingId}-export-chart-sr ${summaryId} ${inlineControlsId}`}
          className="not-prose mt-4"
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
            sortOptions={exportSortOptions}
            onDatasetChange={onDatasetChange}
            onExpandChart={() => setExpandedOpen(true)}
            onResetView={resetExportChartView}
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
                Scroll the chart region vertically to see all states in the current sort order.
              </span>
              <ExportProfilesBarChartRegion
                barData={barData}
                maxValue={maxValue}
                metric={metric}
                density="comfortable"
                summaryId={summaryId}
                variant="inline"
                isNarrow={isNarrow}
                isTablet={isTablet}
              />
              <StateExportProfilesByStateA11yTable
                data={visualTopToBottom}
                describedBy={`${headingId}-export-chart-sr ${summaryId} ${inlineControlsId}`}
                labelledBy={headingId}
                metric={metric}
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
                    Exports by state — expanded
                  </Dialog.Title>
                  <Dialog.Description
                    className="mt-0.5 max-sm:sr-only text-xs text-muted-foreground sm:mt-0 sm:block sm:text-sm"
                    id={modalSummaryId}
                  >
                    {EXPORT_PROFILE_METRIC_LABELS[metric]} · Use controls to change sort, filter, or
                    view · Close or Escape to exit
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
                    sortOptions={exportSortOptions}
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
                    sortOptions={exportSortOptions}
                    onDatasetChange={onDatasetChange}
                    onResetView={resetExportChartView}
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
                      Scroll the chart region vertically to see all states in the current sort
                      order.
                    </span>
                    <div
                      className={cn(
                        "flex min-h-0 min-w-0 flex-1 flex-col",
                        isNarrow &&
                          "rounded-xl border border-border/70 bg-card p-1.5 shadow-sm",
                      )}
                    >
                      <ExportProfilesBarChartRegion
                        barData={barData}
                        maxValue={maxValue}
                        metric={metric}
                        density={expandedDensity}
                        expandedMobileLayout={isNarrow}
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
                    <StateExportProfilesByStateA11yTable
                      data={visualTopToBottom}
                      describedBy={`${headingId}-export-chart-sr ${summaryId} ${modalControlsId} ${modalSummaryId} ${densityGroupId}`}
                      labelledBy={headingId}
                      metric={metric}
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
