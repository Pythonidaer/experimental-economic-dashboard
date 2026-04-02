"use client";

import { useQuery } from "@tanstack/react-query";

import {
  selectStateTradeMetrics,
  type StateTradeMetricsFilter,
} from "@/features/economic-data/queries/state-trade-metrics";
import { economicDataQueryKeys } from "@/features/economic-data/utils/query-keys";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { isSupabasePublicConfigReady } from "@/lib/supabase/env";

export function useStateTradeMetrics(filter?: StateTradeMetricsFilter) {
  return useQuery({
    queryKey: economicDataQueryKeys.stateTradeMetrics.list(filter),
    queryFn: async () => {
      if (!isSupabasePublicConfigReady()) {
        throw new Error(
          "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (see README and .env.example).",
        );
      }
      const client = getSupabaseBrowserClient();
      const { data, error } = await selectStateTradeMetrics(client, filter);
      if (error) {
        throw new Error(error.message);
      }
      return data ?? [];
    },
  });
}
