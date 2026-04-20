"use client";

import { ResponsiveBar } from "@nivo/bar";

import { ViewEmpty } from "@/components/data-view/view-empty";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateIndustries } from "@/features/economic-data/hooks/use-state-industries";
import type { StateIndustryRow } from "@/features/economic-data/types/database";

type StateIndustriesBarDatum = {
  industry: string;
  [region: string]: string | number;
};

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

function toDisplayIndustryLabel(industry: string): string {
  const normalized = industry.trim().toLowerCase();
  if (normalized === "professional and technical services") return "Professional Services";
  if (normalized === "health care and social assistance") return "Health Care";
  if (normalized === "finance and insurance") return "Finance";
  if (normalized === "retail trade") return "Retail";
  return industry;
}

type GroupedIndustryChartData = {
  data: StateIndustriesBarDatum[];
  regionKeys: string[];
  fullIndustryByLabel: Record<string, string>;
};

function toGroupedChartData(rows: StateIndustryRow[] | undefined): GroupedIndustryChartData {
  const groupedByIndustry = new Map<string, StateIndustriesBarDatum>();
  const regionSet = new Set<string>();
  const fullIndustryByLabel: Record<string, string> = {};

  for (const row of rows ?? []) {
    const fullIndustry = row.industry.trim();
    if (!fullIndustry) continue;
    const label = toDisplayIndustryLabel(fullIndustry);
    const region = row.region.trim();
    if (!region) continue;

    fullIndustryByLabel[label] = fullIndustry;
    regionSet.add(region);

    if (!groupedByIndustry.has(label)) {
      groupedByIndustry.set(label, { industry: label });
    }

    const grouped = groupedByIndustry.get(label);
    if (grouped) {
      grouped[region] = row.avg_monthly_employment ?? 0;
    }
  }

  const regionKeys = Array.from(regionSet).sort((a, b) => a.localeCompare(b));
  const data = Array.from(groupedByIndustry.values())
    .map((row) => {
      for (const region of regionKeys) {
        if (row[region] === undefined) {
          row[region] = 0;
        }
      }
      return row;
    })
    .sort((a, b) => {
      const totalA = regionKeys.reduce((sum, region) => sum + Number(a[region] ?? 0), 0);
      const totalB = regionKeys.reduce((sum, region) => sum + Number(b[region] ?? 0), 0);
      return totalB - totalA;
    });

  return { data, regionKeys, fullIndustryByLabel };
}

export function StateIndustriesBarChart() {
  const { data, error, isPending, isError, isSuccess } = useStateIndustries({ year: 2024 });
  const grouped = toGroupedChartData(data);
  const chartData = grouped.data;
  const regionKeys = grouped.regionKeys;
  const fullIndustryByLabel = grouped.fullIndustryByLabel;

  if (isPending) {
    return <ViewLoading message="Loading industry employment chart…" />;
  }

  if (isError) {
    return (
      <ViewError
        title="Could not load state industries"
        description={error instanceof Error ? error.message : undefined}
      />
    );
  }

  if (isSuccess && chartData.length === 0) {
    return <ViewEmpty description="No state industries rows to chart yet." />;
  }

  return (
    <section aria-label="Average monthly employment by industry and region for 2024">
      <div className="h-[340px] w-full">
        <ResponsiveBar
          data={chartData}
          indexBy="industry"
          keys={regionKeys}
          margin={{ top: 20, right: 20, bottom: 112, left: 84 }}
          padding={0.3}
          groupMode="grouped"
          axisBottom={{
            tickRotation: -35,
            legend: "Industry",
            legendOffset: 90,
            legendPosition: "middle",
          }}
          axisLeft={{
            legend: "Avg Monthly Employees (2024)",
            legendOffset: -66,
            legendPosition: "middle",
            format: (value) => formatNumber(Number(value)),
          }}
          enableLabel={false}
          valueFormat={(value) => formatNumber(Number(value))}
          tooltip={({ id, data, value }) => (
            <div className="min-w-64 max-w-[min(34rem,85vw)] rounded border border-border bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md">
              <div className="font-medium">
                {fullIndustryByLabel[String(data.industry)] ?? String(data.industry)}
              </div>
              <div className="mt-1 tabular-nums">
                {String(id)}: {formatNumber(Number(value))}
              </div>
            </div>
          )}
          legends={[
            {
              dataFrom: "keys",
              anchor: "top-right",
              direction: "column",
              justify: false,
              translateX: 0,
              translateY: 0,
              itemsSpacing: 4,
              itemWidth: 140,
              itemHeight: 16,
              itemDirection: "left-to-right",
              symbolSize: 10,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </section>
  );
}
