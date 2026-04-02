import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "./database";

/** Typed Supabase client for the economic-data feature and shared lib factories. */
export type EconomicDataSupabaseClient = SupabaseClient<Database>;
