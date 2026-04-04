import type { EconomicDataSupabaseClient } from "@/features/economic-data/types/supabase-client";

const TABLE = "state_export_profiles" as const;

export type StateExportProfilesFilter = {
  year?: number;
  stateCode?: string;
  periodLabel?: string;
};

export function selectStateExportProfiles(
  client: EconomicDataSupabaseClient,
  filter?: StateExportProfilesFilter,
) {
  let query = client.from(TABLE).select("*");

  if (filter?.year !== undefined) {
    query = query.eq("year", filter.year);
  }
  if (filter?.stateCode) {
    query = query.eq("state_code", filter.stateCode);
  }
  if (filter?.periodLabel) {
    query = query.eq("period_label", filter.periodLabel);
  }

  return query
    .order("year", { ascending: false })
    .order("month", { ascending: false, nullsFirst: false })
    .order("state_code");
}

export function selectStateExportProfileById(
  client: EconomicDataSupabaseClient,
  id: string,
) {
  return client.from(TABLE).select("*").eq("id", id).maybeSingle();
}

export { TABLE as STATE_EXPORT_PROFILES_TABLE };
