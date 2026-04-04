import type { EconomicDataSupabaseClient } from "@/features/economic-data/types/supabase-client";

const TABLE = "state_labor_metrics" as const;

export type StateLaborMetricsFilter = {
  year?: number;
  stateCode?: string;
};

export function selectStateLaborMetrics(
  client: EconomicDataSupabaseClient,
  filter?: StateLaborMetricsFilter,
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

export function selectStateLaborMetricById(
  client: EconomicDataSupabaseClient,
  id: string,
) {
  return client.from(TABLE).select("*").eq("id", id).maybeSingle();
}

export { TABLE as STATE_LABOR_METRICS_TABLE };
