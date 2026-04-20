"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import {
  selectStateIndustryDetails,
  type StateIndustryDetailsFilter,
} from "@/features/economic-data/queries/state-industry-details";
import type { StateIndustryDetailRow } from "@/features/economic-data/types/database";
import { economicDataQueryKeys } from "@/features/economic-data/utils/query-keys";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { isSupabasePublicConfigReady } from "@/lib/supabase/env";

export function useStateIndustryDetails(
  filter?: StateIndustryDetailsFilter,
  options?: Pick<UseQueryOptions<StateIndustryDetailRow[]>, "enabled">,
) {
  return useQuery({
    queryKey: economicDataQueryKeys.stateIndustryDetails.list(filter),
    enabled: options?.enabled !== false,
    queryFn: async () => {
      if (!isSupabasePublicConfigReady()) {
        throw new Error(
          "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (see README and .env.example).",
        );
      }
      const client = getSupabaseBrowserClient();
      const { data, error } = await selectStateIndustryDetails(client, filter);
      if (error) {
        throw new Error(error.message);
      }
      return data ?? [];
    },
  });
}
