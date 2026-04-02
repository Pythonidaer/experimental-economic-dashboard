import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import "server-only";

import type { Database } from "@/features/economic-data/types/database";

import { getSupabaseAnonKey, getSupabaseUrl } from "./env";

/**
 * Server Components, Route Handlers, and Server Actions.
 * Reserved for future server-side Supabase usage; the MVP reads metrics from the browser client only.
 * Do not import this module from client components.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          /* ignore when called from a Server Component that cannot set cookies */
        }
      },
    },
  });
}
