"use client";

import { ResponsiveBar } from "@nivo/bar";
import { useMemo } from "react";

import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { StateLaborUnemploymentByStateA11yTable } from "@/features/economic-data/components/state-labor-unemployment-by-state-a11y-table";
import { useStateLaborMetrics } from "@/features/economic-data/hooks/use-state-labor-metrics";
import { formatUnemploymentRate } from "@/features/economic-data/utils/format-labor-metrics";
import { buildLatestUnemploymentByStateBarData } from "@/features/economic-data/utils/unemployment-by-state-chart-data";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

type LaborChartSummaryProps = {
  summaryId: string;
  headingId: string;
};

/**
 * Labor: horizontal bars of unemployment rate (latest year per state) + SR table.
 */
export function LaborUnemploymentByStateChartBody({
  summaryId,
  headingId,
}: LaborChartSummaryProps) {
  const { data, error, isPending, isError, isSuccess } = useStateLaborMetrics();
  const isNarrow = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const nivoData = useMemo(
    () => (data?.length ? buildLatestUnemploymentByStateBarData(data) : []),
    [data],
  );

  const chartHeight = Math.min(
    2400,
    Math.max(360, nivoData.length * 26 + 140),
  );

  const barMargins = useMemo(() => {
    if (isNarrow) {
      return { top: 12, right: 8, bottom: 88, left: 84 } as const;
    }
    if (isTablet) {
      return { top: 14, right: 20, bottom: 60, left: 112 } as const;
    }
    return { top: 16, right: 28, bottom: 56, left: 128 } as const;
  }, [isNarrow, isTablet]);

  const tickFontSize = isNarrow ? 10 : isTablet ? 11 : 12;

  const datumList = useMemo(
    () => nivoData.map((d) => ({ ...d, rateLabel: d.value })),
    [nivoData],
  );

  return (
    <>
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
      {isSuccess && data.length > 0 && nivoData.length === 0 ? (
        <ViewEmpty description="Labor rows are present but unemployment values are missing." />
      ) : null}
      {isSuccess && nivoData.length > 0 ? (
        <div className="not-prose">
          <div aria-hidden="true">
            <div className="max-h-[min(72dvh,52rem)] overflow-y-auto overflow-x-hidden rounded-md border bg-muted/20 sm:max-h-[min(70vh,52rem)]">
              <div className="min-h-[280px] w-full sm:min-h-[360px]" style={{ height: chartHeight }}>
                <ResponsiveBar
                  animate
                  axisBottom={{
                    format: (v) => `${Number(v).toFixed(1)}%`,
                    legend: "Unemployment rate",
                    legendOffset: isNarrow ? 48 : 40,
                    tickRotation: isNarrow ? -28 : 0,
                  }}
                  axisLeft={{
                    tickSize: 0,
                    tickPadding: isNarrow ? 4 : 8,
                  }}
                  axisRight={null}
                  axisTop={null}
                  borderRadius={2}
                  borderColor="#14532d"
                  borderWidth={1}
                  colors={() => "#15803d"}
                  data={datumList}
                  enableGridY
                  enableLabel={false}
                  indexBy="stateName"
                  isFocusable={false}
                  keys={["rateLabel"]}
                  layout="horizontal"
                  margin={barMargins}
                  padding={isNarrow ? 0.38 : 0.42}
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
                        text: { fontSize: isNarrow ? 11 : 12 },
                      },
                    },
                    grid: { line: { stroke: "var(--border)" } },
                  }}
                  tooltip={({ data: row, value }) => (
                    <div className="rounded border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md">
                      <strong className="font-medium">{row.stateName}</strong>{" "}
                      <span className="text-muted-foreground">({row.stateCode})</span>
                      <div className="mt-0.5 text-muted-foreground">Year {row.year}</div>
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
          <StateLaborUnemploymentByStateA11yTable
            data={nivoData}
            describedBy={summaryId}
            labelledBy={headingId}
          />
        </div>
      ) : null}
    </>
  );
}
