"use client";

import { ResponsiveBar } from "@nivo/bar";
import { useMemo, useState } from "react";

import { StateIndustryDetailsDumbbellChartExperimental } from "@/components/charts/StateIndustryDetailsDumbbellChart.experimental";
import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateIndustryDetails } from "@/features/economic-data/hooks/use-state-industry-details";
import {
  shapeIndustryDetailsWithParents,
  toNaicsDigitLevel,
} from "@/features/economic-data/utils/industry-hierarchy";

type ComparisonDatum = {
  category_id: string;
  label: string;
  naics_code: string;
  parent_industry: string;
  [region: string]: string | number;
};

const DISPLAY_LIMITS = [
  { value: "all", label: "All" },
  { value: "10", label: "Top 10" },
  { value: "20", label: "Top 20" },
] as const;

/** Minimum block height for the compare-mode dumbbell chart (content can grow past this). */
function getDumbbellChartMinHeight(rowCount: number) {
  const estimated = rowCount * 34 + 130;
  return Math.max(400, estimated);
}

function getSingleRegionChartHeight(rowCount: number) {
  // Keep single-region mode visually consistent with compare mode sizing.
  const estimated = rowCount * 32 + 170;
  return Math.max(440, estimated);
}

type StateIndustryDetailsBarChartProps = {
  filtersOpen: boolean;
};

export function StateIndustryDetailsBarChart({ filtersOpen }: StateIndustryDetailsBarChartProps) {
  const { data, error, isPending, isError, isSuccess } = useStateIndustryDetails({
    year: 2024,
  });
  const [regionSelection, setRegionSelection] = useState("compare");
  const [naicsDigitFilter, setNaicsDigitFilter] = useState("all");
  const [parentFilter, setParentFilter] = useState("all");
  const [displayLimit, setDisplayLimit] = useState<(typeof DISPLAY_LIMITS)[number]["value"]>(
    "all",
  );
  const isSingleRegionMode = regionSelection !== "compare";
  const filtersDrawerId = "industry-detail-filters";

  const shapedRows = useMemo(() => shapeIndustryDetailsWithParents(data ?? []), [data]);

  const regions = useMemo(() => {
    const values = new Set<string>();
    for (const row of shapedRows) {
      if (row.region.trim()) values.add(row.region.trim());
    }
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [shapedRows]);

  const parentIndustries = useMemo(() => {
    const values = new Set<string>();
    for (const row of shapedRows) {
      values.add(row.parent_industry ?? "Unmapped");
    }
    return ["all", ...Array.from(values).sort((a, b) => a.localeCompare(b))];
  }, [shapedRows]);

  const filteredRows = useMemo(() => {
    return shapedRows.filter((row) => {
      if (regionSelection !== "compare" && row.region !== regionSelection) return false;
      if (naicsDigitFilter !== "all") {
        const digitLevel = toNaicsDigitLevel(row.naics_level);
        if (digitLevel !== naicsDigitFilter) return false;
      }
      if (parentFilter !== "all") {
        const parentIndustry = row.parent_industry ?? "Unmapped";
        if (parentIndustry !== parentFilter) return false;
      }
      return true;
    });
  }, [naicsDigitFilter, parentFilter, regionSelection, shapedRows]);

  const chartRegions = useMemo(() => {
    if (regionSelection !== "compare") return [regionSelection];
    const values = new Set<string>();
    for (const row of filteredRows) values.add(row.region);
    return Array.from(values).sort((a, b) => a.localeCompare(b));
  }, [filteredRows, regionSelection]);

  const chartData = useMemo<ComparisonDatum[]>(() => {
    const grouped = new Map<string, ComparisonDatum>();

    for (const row of filteredRows) {
      const key = `${row.parent_naics_code ?? "unknown"}|${row.naics_code}|${row.naics_level}|${row.industry}`;
      if (!grouped.has(key)) {
        grouped.set(key, {
          category_id: key,
          label: row.industry,
          naics_code: row.naics_code,
          parent_industry: row.parent_industry ?? "Unmapped",
        });
      }
      const existing = grouped.get(key);
      if (!existing) continue;
      existing[row.region] = row.avg_monthly_employment ?? 0;
    }

    const rows = Array.from(grouped.values()).map((row) => {
      for (const region of chartRegions) {
        if (row[region] === undefined) row[region] = 0;
      }
      return row;
    });

    const sorted = rows.sort((a, b) => {
      const totalA = chartRegions.reduce((sum, region) => sum + Number(a[region] ?? 0), 0);
      const totalB = chartRegions.reduce((sum, region) => sum + Number(b[region] ?? 0), 0);
      return totalB - totalA;
    });

    const limit =
      displayLimit === "all"
        ? sorted.length
        : Math.min(sorted.length, Number.parseInt(displayLimit, 10));

    return sorted.slice(0, limit);
  }, [chartRegions, displayLimit, filteredRows]);

  if (isPending) {
    return <ViewLoading message="Loading detailed industry employment chart…" />;
  }
  if (isError) {
    return (
      <ViewError
        title="Could not load detailed industry rows"
        description={error instanceof Error ? error.message : undefined}
      />
    );
  }
  if (isSuccess && shapedRows.length === 0) {
    return <ViewEmpty description="No detailed industry rows to chart yet." />;
  }
  if (chartData.length === 0) {
    return <ViewEmpty description="No detailed rows match the current chart filters." />;
  }

  const dumbbellMinHeightPx = getDumbbellChartMinHeight(chartData.length);
  const singleRegionHeightPx = getSingleRegionChartHeight(chartData.length);
  const singleRegionKey = chartRegions[0] ?? "value";
  return (
    <>
      <section aria-label="Detailed industry average monthly employment for 2024">
        {filtersOpen ? (
          <div
            className="grid grid-cols-1 gap-x-2.5 gap-y-2 pb-2.5 sm:grid-cols-2 lg:grid-cols-4"
            id={filtersDrawerId}
          >
            <label className="flex flex-col gap-1 text-sm">
              <span className="text-xs text-muted-foreground">Region</span>
              <select
                className="h-8 w-full rounded-md border bg-background px-2.5 text-sm"
                value={regionSelection}
                onChange={(event) => setRegionSelection(event.target.value)}
              >
                <option value="compare">Compare both regions</option>
                {regions.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span className="text-xs text-muted-foreground">Industry</span>
              <select
                className="h-8 w-full rounded-md border bg-background px-2.5 text-sm"
                value={parentFilter}
                onChange={(event) => setParentFilter(event.target.value)}
              >
                {parentIndustries.map((value) => (
                  <option key={value} value={value}>
                    {value === "all" ? "All parent industries" : value}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span className="text-xs text-muted-foreground">NAICS level</span>
              <select
                className="h-8 w-full rounded-md border bg-background px-2.5 text-sm"
                value={naicsDigitFilter}
                onChange={(event) => setNaicsDigitFilter(event.target.value)}
              >
                <option value="all">All levels</option>
                <option value="2">2-digit</option>
                <option value="3">3-digit</option>
                <option value="4">4-digit</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span className="text-xs text-muted-foreground">Display</span>
              <select
                className="h-8 w-full rounded-md border bg-background px-2.5 text-sm"
                value={displayLimit}
                onChange={(event) =>
                  setDisplayLimit(event.target.value as (typeof DISPLAY_LIMITS)[number]["value"])
                }
              >
                {DISPLAY_LIMITS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : null}

        {isSingleRegionMode ? (
          <div
            className="relative mt-2 flex w-full flex-col rounded-md border border-border/70 bg-muted/10 p-2 pb-1"
            style={{ minHeight: `${singleRegionHeightPx}px` }}
          >
            <section
              aria-label="Chart legend"
              className="absolute right-3 top-3 z-10 hidden sm:block"
            >
              <div className="flex flex-wrap items-center justify-end gap-3 text-xs text-foreground">
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-teal-700" />
                  {chartRegions[0] ?? "Region A"}
                </span>
                {chartRegions[1] ? (
                  <span className="inline-flex items-center gap-1">
                    <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                    {chartRegions[1]}
                  </span>
                ) : null}
              </div>
            </section>
          <h4 className="mb-1 text-center text-lg font-semibold tracking-tight text-foreground">
            Employment by Industry (2024)
          </h4>
          <p className="mb-1 text-sm font-medium text-foreground/90">Sector subcategories</p>
          <div className="min-h-0 flex-1 w-full">
            <ResponsiveBar
              data={chartData}
              indexBy="category_id"
              keys={[singleRegionKey]}
              layout="horizontal"
              margin={{ top: 10, right: 24, bottom: 40, left: 16 }}
              padding={0.16}
              groupMode="grouped"
              colors={["#0F766E"]}
              valueScale={{ type: "symlog" }}
              axisBottom={{
                tickRotation: 0,
                legend: undefined,
                tickValues: 6,
                format: (value) => {
                  const numberValue = Number(value);
                  if (numberValue >= 1_000_000) return `${(numberValue / 1_000_000).toFixed(1)}M`;
                  if (numberValue >= 1_000) return `${Math.round(numberValue / 1_000)}k`;
                  return String(Math.round(numberValue));
                },
              }}
              axisLeft={null}
              enableLabel
              label={(datum) => String((datum.data as { label?: string }).label ?? datum.indexValue)}
              labelPosition="middle"
              labelTextColor="#FFFFFF"
              labelSkipWidth={20}
              labelSkipHeight={0}
              valueFormat={(value) => new Intl.NumberFormat("en-US").format(Number(value))}
              indexScale={{ type: "band", round: true }}
              borderRadius={2}
              ariaLabel="Detailed NAICS employment single-region chart"
              barAriaLabel={(datum) =>
                `${singleRegionKey}, ${String(datum.id)}: ${new Intl.NumberFormat("en-US").format(Number(datum.value))} average monthly employees`
              }
              tooltip={({ data, value }) => (
                <div className="min-w-64 max-w-[min(34rem,85vw)] rounded border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md">
                  <div className="font-medium">{String(data.label)}</div>
                  <div className="text-muted-foreground">NAICS: {String(data.naics_code)}</div>
                  <div className="mt-1 tabular-nums">
                    {new Intl.NumberFormat("en-US").format(Number(value))}
                  </div>
                </div>
              )}
            />
          </div>
          <p className="mt-0.5 text-center text-sm font-medium leading-none text-foreground/90">
            Average monthly employment
          </p>
          </div>
        ) : (
          <div className="relative mt-2 w-full rounded-md border border-border/70 bg-muted/10 p-3">
            <section
              aria-label="Chart legend"
              className="absolute right-3 top-3 z-10 hidden sm:block"
            >
              <div className="flex flex-wrap items-center justify-end gap-3 text-xs text-foreground">
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-teal-700" />
                  {chartRegions[0] ?? "Region A"}
                </span>
                {chartRegions[1] ? (
                  <span className="inline-flex items-center gap-1">
                    <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                    {chartRegions[1]}
                  </span>
                ) : null}
              </div>
            </section>
          <h4 className="mb-1 text-center text-lg font-semibold tracking-tight text-foreground">
            Employment by Industry (2024)
          </h4>
          <StateIndustryDetailsDumbbellChartExperimental
            regions={chartRegions}
            rows={chartData.map((row) => ({
              id: row.category_id,
              label: String(row.label),
              naicsCode: String(row.naics_code),
              parentIndustry: String(row.parent_industry),
              values: Object.fromEntries(
                chartRegions.map((region) => [region, Number(row[region] ?? 0)]),
              ),
            }))}
            style={{ minHeight: `${dumbbellMinHeightPx}px` }}
          />
          </div>
        )}
      </section>

      <div className="mt-5 w-full">
        <div className="w-fit max-w-[30rem] rounded-md border border-border/70 bg-muted/30 px-3 py-3">
          <section aria-label="Chart notes">
            <p className="text-xs font-semibold text-foreground">Notes</p>
            <div className="mt-1 space-y-1 text-[11px] text-muted-foreground">
              <p>Shows total employment, not current hiring demand.</p>
              <p>NAICS = North American Industry Classification System.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
