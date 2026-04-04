"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import {
  selectStateLaborMetrics,
  type StateLaborMetricsFilter,
} from "@/features/economic-data/queries/state-labor-metrics";
import { economicDataQueryKeys } from "@/features/economic-data/utils/query-keys";
import type { StateLaborMetricRow } from "@/features/economic-data/types/database";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { isSupabasePublicConfigReady } from "@/lib/supabase/env";

export function useStateLaborMetrics(
  filter?: StateLaborMetricsFilter,
  options?: Pick<UseQueryOptions<StateLaborMetricRow[]>, "enabled">,
) {
  return useQuery({
    queryKey: economicDataQueryKeys.stateLaborMetrics.list(filter),
    enabled: options?.enabled !== false,
    queryFn: async () => {
      if (!isSupabasePublicConfigReady()) {
        throw new Error(
          "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (see README and .env.example).",
        );
      }
      const client = getSupabaseBrowserClient();
      const { data, error } = await selectStateLaborMetrics(client, filter);
      if (error) {
        throw new Error(error.message);
      }
      return data ?? [];
    },
  });
}
