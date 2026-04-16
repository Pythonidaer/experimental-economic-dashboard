"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import {
  selectStateIndustries,
  type StateIndustriesFilter,
} from "@/features/economic-data/queries/state-industries";
import type { StateIndustryRow } from "@/features/economic-data/types/database";
import { economicDataQueryKeys } from "@/features/economic-data/utils/query-keys";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { isSupabasePublicConfigReady } from "@/lib/supabase/env";

export function useStateIndustries(
  filter?: StateIndustriesFilter,
  options?: Pick<UseQueryOptions<StateIndustryRow[]>, "enabled">,
) {
  return useQuery({
    queryKey: economicDataQueryKeys.stateIndustries.list(filter),
    enabled: options?.enabled !== false,
    queryFn: async () => {
      if (!isSupabasePublicConfigReady()) {
        throw new Error(
          "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (see README and .env.example).",
        );
      }
      const client = getSupabaseBrowserClient();
      const { data, error } = await selectStateIndustries(client, filter);
      if (error) {
        throw new Error(error.message);
      }
      return data ?? [];
    },
  });
}
