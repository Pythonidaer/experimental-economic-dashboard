import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "@/features/economic-data/types/database";
import type { EconomicDataSupabaseClient } from "@/features/economic-data/types/supabase-client";

import { getSupabaseAnonKey, getSupabaseUrl } from "./env";

let browserClient: EconomicDataSupabaseClient | null = null;

/**
 * Single browser client for the tab. Use only in `"use client"` trees.
 * Hooks call this; UI components should not construct clients directly.
 */
export function getSupabaseBrowserClient(): EconomicDataSupabaseClient {
  if (!browserClient) {
    browserClient = createBrowserClient<Database>(
      getSupabaseUrl(),
      getSupabaseAnonKey()
    );
  }
  return browserClient;
}

/**
 * Prefer {@link getSupabaseBrowserClient} so the app shares one instance.
 */
export function createSupabaseBrowserClient(): EconomicDataSupabaseClient {
  return getSupabaseBrowserClient();
}
