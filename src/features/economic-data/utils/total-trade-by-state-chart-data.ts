import type { StateTradeMetricRow } from "@/features/economic-data/types/database";

export type TotalTradeByStateBarDatum = {
  stateName: string;
  stateCode: string;
  value: number;
};

/**
 * One bar per state: sums `total_trade_value` across all rows for that `state_code`
 * (multiple years aggregate). Sorted high → low for a horizontal bar chart.
 */
export function buildTotalTradeByStateBarData(
  rows: StateTradeMetricRow[],
): TotalTradeByStateBarDatum[] {
  const byCode = new Map<
    string,
    { stateName: string; stateCode: string; value: number }
  >();

  for (const row of rows) {
    const prev = byCode.get(row.state_code);
    if (prev) {
      prev.value += row.total_trade_value;
    } else {
      byCode.set(row.state_code, {
        stateName: row.state_name,
        stateCode: row.state_code,
        value: row.total_trade_value,
      });
    }
  }

  return Array.from(byCode.values()).sort((a, b) => b.value - a.value);
}
