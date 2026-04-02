"use client";

import { ResponsiveBar } from "@nivo/bar";
import { useMemo } from "react";

import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateTradeMetrics } from "@/features/economic-data/hooks/use-state-trade-metrics";
import {
  formatTradeCurrency,
  formatTradeCurrencyCompact,
} from "@/features/economic-data/utils/format-trade-currency";
import { buildTotalTradeByStateBarData } from "@/features/economic-data/utils/total-trade-by-state-chart-data";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

export function StateTradeTotalByStateChart() {
  const { data, error, isPending, isError, isSuccess } = useStateTradeMetrics();
  const isNarrow = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const nivoData = useMemo(
    () => (data?.length ? buildTotalTradeByStateBarData(data) : []),
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

  return (
    <section
      aria-labelledby="chart-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="chart-heading">
        Charts
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground" id="chart-summary">
        Total trade value by state (summed across all years in the dataset). Same source
        as the map and table: <code className="text-xs">state_trade_metrics</code>.
      </p>

      <div className="mt-4">
        {isPending ? <ViewLoading message="Loading chart data…" /> : null}
        {isError ? (
          <ViewError
            description={error instanceof Error ? error.message : undefined}
            title="Could not load data"
          />
        ) : null}
        {isSuccess && data.length === 0 ? (
          <ViewEmpty description="Add rows to state_trade_metrics to see the chart." />
        ) : null}
        {isSuccess && data.length > 0 ? (
          <figure
            aria-label="Horizontal bar chart of total trade value by state, highest values at the top"
            className="not-prose"
          >
            <figcaption className="sr-only">
              Bar chart comparing total trade value for each US state. Values are summed
              across every year in the database for that state.
            </figcaption>
            <div className="max-h-[min(72dvh,52rem)] overflow-y-auto overflow-x-hidden rounded-md border bg-muted/20 sm:max-h-[min(70vh,52rem)]">
              <div className="min-h-[280px] w-full sm:min-h-[360px]" style={{ height: chartHeight }}>
                <ResponsiveBar
                  animate
                  axisBottom={{
                    format: (v) => formatTradeCurrencyCompact(Number(v)),
                    legend: "Total trade (USD)",
                    legendOffset: isNarrow ? 48 : 40,
                    tickRotation: isNarrow ? -28 : 0,
                  }}
                  axisLeft={{
                    tickSize: 0,
                    tickPadding: isNarrow ? 4 : 8,
                  }}
                  axisRight={null}
                  axisTop={null}
                  barAriaLabel={(d) =>
                    `${d.indexValue}, ${formatTradeCurrency(Number(d.value))} total trade`
                  }
                  borderRadius={2}
                  borderColor="#1e3a8a"
                  borderWidth={1}
                  // Ordinal schemes like "blues" start from near-white — poor contrast on light UI.
                  colors={() => "#2563eb"}
                  data={nivoData}
                  enableGridY
                  enableLabel={false}
                  indexBy="stateName"
                  isFocusable
                  keys={["value"]}
                  layout="horizontal"
                  margin={barMargins}
                  padding={isNarrow ? 0.38 : 0.42}
                  role="img"
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
                      <div className="mt-1 tabular-nums">
                        {formatTradeCurrency(Number(value))}
                      </div>
                    </div>
                  )}
                  valueFormat={(v) => formatTradeCurrency(Number(v))}
                />
              </div>
            </div>
          </figure>
        ) : null}
      </div>
    </section>
  );
}
