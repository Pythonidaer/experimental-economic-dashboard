"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type DumbbellRow = {
  id: string;
  label: string;
  values: Record<string, number>;
  naicsCode?: string;
  parentIndustry?: string;
};

type StateIndustryDetailsDumbbellChartExperimentalProps = {
  rows: DumbbellRow[];
  regions: string[];
  className?: string;
  style?: CSSProperties;
};

/** Exact counts for tooltips and screen readers. */
function formatExactCount(value: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
    Math.round(value),
  );
}

/**
 * Axis tick labels: exact integers for smaller magnitudes; compact k/M only when large
 * so we do not imply the data is in thousands.
 */
function formatAxisTickValue(value: number): string {
  const v = Math.round(value);
  if (v === 0) return "0";
  const abs = Math.abs(v);
  if (abs < 10_000) return formatExactCount(v);
  if (abs >= 1_000_000) {
    const m = v / 1_000_000;
    return `${Number.isInteger(m) ? m : m.toFixed(1)}M`;
  }
  const k = v / 1_000;
  return `${Number.isInteger(k) ? k : k.toFixed(1)}k`;
}

function toPlotPositionPercent(value: number, maxValue: number): number {
  const bounded = Math.max(0, Math.min(value, maxValue));
  // Reserve right-side breathing room so the max point does not touch the chart edge.
  return (bounded / maxValue) * 97;
}

/** When compare dots are this close on the scale (% of plot width), separate vertically. */
const DOT_OVERLAP_THRESHOLD_PCT = 2.5;

type ActiveTooltipState = {
  x: number;
  y: number;
  label: string;
  naicsCode?: string;
  parentIndustry?: string;
  /** One entry per region in `regions` prop order; exact raw counts. */
  series: { region: string; value: number }[];
};

export function StateIndustryDetailsDumbbellChartExperimental({
  rows,
  regions,
  className,
  style,
}: StateIndustryDetailsDumbbellChartExperimentalProps) {
  const [activeTooltip, setActiveTooltip] = useState<ActiveTooltipState | null>(null);
  const leftRegion = regions[0] ?? "Region A";
  const rightRegion = regions[1] ?? null;

  const sortedRows = [...rows].sort(
    (a, b) => (b.values[leftRegion] ?? 0) - (a.values[leftRegion] ?? 0),
  );

  const maxValue =
    sortedRows.reduce((max, row) => {
      const left = row.values[leftRegion] ?? 0;
      const right = rightRegion ? row.values[rightRegion] ?? 0 : 0;
      return Math.max(max, left, right);
    }, 0) || 1;

  const tickFractions = [0, 0.25, 0.5, 0.75, 1];

  function buildTooltipState(
    clientX: number,
    clientY: number,
    row: DumbbellRow,
  ): ActiveTooltipState {
    const series: { region: string; value: number }[] = [
      { region: leftRegion, value: row.values[leftRegion] ?? 0 },
    ];
    if (rightRegion) {
      series.push({ region: rightRegion, value: row.values[rightRegion] ?? 0 });
    }
    return {
      x: clientX,
      y: clientY,
      label: row.label,
      naicsCode: row.naicsCode,
      parentIndustry: row.parentIndustry,
      series,
    };
  }

  return (
    <section
      aria-label="Dumbbell chart comparing employment by subcategory"
      className={className}
      style={style}
    >
      <div className="relative">
        <p className="absolute left-0 top-1/2 hidden -translate-y-1/2 rotate-180 text-sm font-medium text-foreground/90 sm:block [writing-mode:vertical-lr]">
          Sector subcategories
        </p>

        <div className="sm:pl-9">
          <div className="space-y-1.5">
            {sortedRows.map((row) => {
              const leftValue = row.values[leftRegion] ?? 0;
              const rightValue = rightRegion ? row.values[rightRegion] ?? 0 : 0;
              const leftPos = toPlotPositionPercent(leftValue, maxValue);
              const rightPos = toPlotPositionPercent(rightValue, maxValue);
              const lineLeft = Math.min(leftPos, rightPos);
              const lineWidth = Math.max(2, Math.abs(leftPos - rightPos));
              const positionsTooClose =
                Boolean(rightRegion) && Math.abs(leftPos - rightPos) < DOT_OVERLAP_THRESHOLD_PCT;

              return (
                <div
                  className="grid grid-cols-[minmax(8rem,9.5rem)_1fr] items-center gap-1 sm:grid-cols-[minmax(9.25rem,12rem)_1fr] sm:gap-1"
                  key={row.id}
                >
                  <div className="text-[11px] leading-tight text-foreground sm:text-xs">{row.label}</div>
                  <div className="relative h-8">
                    <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border/60" />
                    {rightRegion ? (
                      <div
                        aria-hidden
                        className="absolute top-1/2 h-px -translate-y-1/2 bg-muted-foreground/50"
                        style={{ left: `${lineLeft}%`, width: `${lineWidth}%` }}
                      />
                    ) : null}
                    <button
                      aria-label={`${row.label}, ${leftRegion}: ${formatExactCount(leftValue)} average monthly employees`}
                      className="absolute top-1/2 h-5 w-5 rounded-full bg-teal-700 ring-2 ring-background transition-shadow hover:shadow-[0_0_0_3px_rgba(15,118,110,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
                      style={{
                        left: `${leftPos}%`,
                        transform: positionsTooClose
                          ? "translate(-50%, calc(-50% - 6px))"
                          : "translate(-50%, -50%)",
                      }}
                      type="button"
                      onBlur={() => setActiveTooltip(null)}
                      onFocus={(event) =>
                        setActiveTooltip(
                          buildTooltipState(
                            event.currentTarget.getBoundingClientRect().left,
                            event.currentTarget.getBoundingClientRect().top,
                            row,
                          ),
                        )
                      }
                      onMouseEnter={(event) =>
                        setActiveTooltip(
                          buildTooltipState(event.clientX, event.clientY, row),
                        )
                      }
                      onMouseLeave={() => setActiveTooltip(null)}
                    />
                    {rightRegion ? (
                      <button
                        aria-label={`${row.label}, ${rightRegion}: ${formatExactCount(rightValue)} average monthly employees`}
                        className="absolute top-1/2 h-5 w-5 rounded-full bg-orange-500 ring-2 ring-background transition-shadow hover:shadow-[0_0_0_3px_rgba(249,115,22,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                        style={{
                          left: `${rightPos}%`,
                          transform: positionsTooClose
                            ? "translate(-50%, calc(-50% + 6px))"
                            : "translate(-50%, -50%)",
                        }}
                        type="button"
                        onBlur={() => setActiveTooltip(null)}
                        onFocus={(event) =>
                          setActiveTooltip(
                            buildTooltipState(
                              event.currentTarget.getBoundingClientRect().left,
                              event.currentTarget.getBoundingClientRect().top,
                              row,
                            ),
                          )
                        }
                        onMouseEnter={(event) =>
                          setActiveTooltip(
                            buildTooltipState(event.clientX, event.clientY, row),
                          )
                        }
                        onMouseLeave={() => setActiveTooltip(null)}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-2 grid grid-cols-[minmax(8rem,9.5rem)_1fr] items-center gap-1 sm:grid-cols-[minmax(9.25rem,12rem)_1fr] sm:gap-1">
            <div />
            <div className="relative h-5 text-[11px] text-muted-foreground">
              {tickFractions.map((fraction) => (
                <div
                  className="absolute -translate-x-1/2"
                  key={fraction}
                  style={{ left: `${fraction * 97}%` }}
                >
                  {formatAxisTickValue(maxValue * fraction)}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[minmax(8rem,9.5rem)_1fr] sm:grid-cols-[minmax(9.25rem,12rem)_1fr]">
            <div />
            <p className="mt-1 text-center text-sm font-medium text-foreground/90">
              Average monthly employment
            </p>
          </div>
        </div>
      </div>
      {activeTooltip ? (
        <div
          aria-live="polite"
          className="pointer-events-none fixed z-50 w-72 max-w-[min(32rem,85vw)] rounded border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg"
          role="tooltip"
          style={{ left: activeTooltip.x + 14, top: activeTooltip.y - 8 }}
        >
          <div className="font-medium">{activeTooltip.label}</div>
          {activeTooltip.naicsCode ? (
            <div className="text-muted-foreground">NAICS: {activeTooltip.naicsCode}</div>
          ) : null}
          <div className="mt-2 space-y-1">
            {activeTooltip.series.map((s) => (
              <div className="tabular-nums" key={s.region}>
                <span className="text-muted-foreground">{s.region}: </span>
                <span className="font-medium text-foreground">{formatExactCount(s.value)}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
