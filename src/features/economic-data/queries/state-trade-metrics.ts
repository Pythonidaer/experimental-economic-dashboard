import type { EconomicDataSupabaseClient } from "@/features/economic-data/types/supabase-client";

const TABLE = "state_trade_metrics" as const;

export type StateTradeMetricsFilter = {
  year?: number;
  stateCode?: string;
};

/**
 * Read all rows (apply filters in-app or extend with `.range` for pagination later).
 * UI and hooks should call this (or similar) — not `client.from(...)` directly.
 */
export function selectStateTradeMetrics(
  client: EconomicDataSupabaseClient,
  filter?: StateTradeMetricsFilter
) {
  let query = client.from(TABLE).select("*");

  if (filter?.year !== undefined) {
    query = query.eq("year", filter.year);
  }
  if (filter?.stateCode) {
    query = query.eq("state_code", filter.stateCode);
  }

  return query.order("year", { ascending: false }).order("state_code");
}

/**
 * Single row by primary key.
 */
export function selectStateTradeMetricById(
  client: EconomicDataSupabaseClient,
  id: string
) {
  return client.from(TABLE).select("*").eq("id", id).maybeSingle();
}

export { TABLE as STATE_TRADE_METRICS_TABLE };
