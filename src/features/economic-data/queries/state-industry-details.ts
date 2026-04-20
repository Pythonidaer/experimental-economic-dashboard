import type { EconomicDataSupabaseClient } from "@/features/economic-data/types/supabase-client";

const TABLE = "state_industry_details" as const;

export type StateIndustryDetailsFilter = {
  year?: number;
  region?: string;
  naicsLevel?: string;
};

export function selectStateIndustryDetails(
  client: EconomicDataSupabaseClient,
  filter?: StateIndustryDetailsFilter,
) {
  let query = client.from(TABLE).select("*");

  if (filter?.year !== undefined) {
    query = query.eq("year", filter.year);
  }
  if (filter?.region) {
    query = query.eq("region", filter.region);
  }
  if (filter?.naicsLevel) {
    query = query.eq("naics_level", filter.naicsLevel);
  }

  return query.order("industry").order("naics_code");
}

export { TABLE as STATE_INDUSTRY_DETAILS_TABLE };
