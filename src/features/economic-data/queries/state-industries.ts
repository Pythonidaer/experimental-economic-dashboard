import type { EconomicDataSupabaseClient } from "@/features/economic-data/types/supabase-client";

const TABLE = "state_industries" as const;

export type StateIndustriesFilter = {
  year?: number;
};

export function selectStateIndustries(
  client: EconomicDataSupabaseClient,
  filter?: StateIndustriesFilter,
) {
  let query = client.from(TABLE).select("*");

  if (filter?.year !== undefined) {
    query = query.eq("year", filter.year);
  }

  return query.order("industry");
}

export { TABLE as STATE_INDUSTRIES_TABLE };
