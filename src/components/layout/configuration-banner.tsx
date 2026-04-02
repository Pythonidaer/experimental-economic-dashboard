import { SUPABASE_ENV, isSupabasePublicConfigReady } from "@/lib/supabase/env";

/**
 * Shown when public Supabase env is missing or invalid so production misconfiguration is obvious.
 */
export function ConfigurationBanner() {
  if (isSupabasePublicConfigReady()) {
    return null;
  }

  return (
    <div
      className="border-b border-amber-500/40 bg-amber-500/15 px-3 py-2.5 text-center text-sm text-amber-950 dark:border-amber-400/35 dark:bg-amber-400/10 dark:text-amber-100"
      role="alert"
    >
      <p className="font-medium">Supabase is not configured for this build</p>
      <p className="mt-1 text-xs leading-relaxed opacity-95">
        Set <code className="rounded bg-black/10 px-1 py-px text-[0.7rem] dark:bg-white/10">
          {SUPABASE_ENV.urlVar}
        </code>{" "}
        and{" "}
        <code className="rounded bg-black/10 px-1 py-px text-[0.7rem] dark:bg-white/10">
          {SUPABASE_ENV.anonKeyVar}
        </code>{" "}
        (see <span className="font-medium">README</span> and{" "}
        <span className="font-medium">.env.example</span>). Map and static GeoJSON still
        load; table and charts need a valid database connection.
      </p>
    </div>
  );
}
