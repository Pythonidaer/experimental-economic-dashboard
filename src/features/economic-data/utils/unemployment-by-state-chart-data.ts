import type { StateLaborMetricRow } from "@/features/economic-data/types/database";

export type UnemploymentByStateBarDatum = {
  stateName: string;
  stateCode: string;
  value: number;
  year: number;
};

/**
 * One bar per state: uses the latest `year` row per `state_code` for unemployment_rate.
 * Sorted high → low for a horizontal bar chart.
 */
export function buildLatestUnemploymentByStateBarData(
  rows: StateLaborMetricRow[],
): UnemploymentByStateBarDatum[] {
  const byCode = new Map<string, UnemploymentByStateBarDatum>();

  for (const row of rows) {
    const prev = byCode.get(row.state_code);
    if (!prev || row.year > prev.year) {
      byCode.set(row.state_code, {
        stateName: row.state_name,
        stateCode: row.state_code,
        value: Number(row.unemployment_rate),
        year: row.year,
      });
    }
  }

  return Array.from(byCode.values()).sort((a, b) => b.value - a.value);
}
