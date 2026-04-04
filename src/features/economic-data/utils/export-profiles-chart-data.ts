import type { StateExportProfileRow } from "@/features/economic-data/types/database";

export type ExportProfileMetricKey =
  | "manufactured_exports"
  | "non_manufactured_exports"
  | "re_exports"
  | "total_exports";

export type ExportProfileBarDatum = {
  stateName: string;
  stateCode: string;
  value: number;
  /** Display / SR label; empty when the row has no period_label. */
  periodLabel: string;
  year: number;
  /** 0 when the source month is null (chart tooling expects a number). */
  month: number;
};

export const EXPORT_PROFILE_METRIC_LABELS: Record<ExportProfileMetricKey, string> = {
  manufactured_exports: "Manufactured exports",
  non_manufactured_exports: "Non-manufactured exports",
  re_exports: "Re-exports",
  total_exports: "Total exports",
};

/**
 * Census-style scope for the **non_manufactured_exports** bucket only — do not reuse for
 * manufactured or totals. Shown inline when that metric is selected (map, chart) and
 * summarized in the table footer.
 */
export const NON_MANUFACTURED_EXPORTS_SCOPED_NOTE =
  "Includes agriculture, raw materials, scrap, and similar goods. Values may reflect the export port location rather than production origin.";

/** Table footer line; applies only to the non-manufactured column (not manufactured). */
export const NON_MANUFACTURED_EXPORTS_TABLE_FOOTNOTE =
  "Agriculture, raw materials, scrap, and similar goods — often tied to export port location, not only production origin. Does not describe manufactured exports.";

function recencyKey(row: StateExportProfileRow): number {
  return row.year * 100 + (row.month ?? 0);
}

export function getExportProfileMetricValue(
  row: StateExportProfileRow,
  metric: ExportProfileMetricKey,
): number | null {
  const v = row[metric];
  if (v == null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

/** Latest row per `state_code` by year + month; then one bar per state for the chosen metric. */
export function buildLatestExportMetricByStateBarData(
  rows: StateExportProfileRow[],
  metric: ExportProfileMetricKey,
): ExportProfileBarDatum[] {
  const byCode = new Map<string, StateExportProfileRow>();

  for (const row of rows) {
    const prev = byCode.get(row.state_code);
    if (!prev || recencyKey(row) > recencyKey(prev)) {
      byCode.set(row.state_code, row);
    }
  }

  const out: ExportProfileBarDatum[] = [];
  for (const row of byCode.values()) {
    const value = getExportProfileMetricValue(row, metric);
    if (value == null) continue;
    out.push({
      stateName: row.state_name,
      stateCode: row.state_code,
      value,
      periodLabel: row.period_label ?? "",
      year: row.year,
      month: row.month ?? 0,
    });
  }

  return out.sort((a, b) => a.stateName.localeCompare(b.stateName, undefined, { sensitivity: "base" }));
}

/** Normalize metric values to 0–1 for map choropleth (latest row per state). */
export function buildExportMetricChoroplethNormalized(
  rows: StateExportProfileRow[],
  metric: ExportProfileMetricKey,
): Record<string, number> {
  const barData = buildLatestExportMetricByStateBarData(rows, metric);
  if (barData.length === 0) return {};
  const values = barData.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const result: Record<string, number> = {};
  for (const d of barData) {
    result[d.stateCode.toUpperCase()] = (d.value - min) / span;
  }
  return result;
}
