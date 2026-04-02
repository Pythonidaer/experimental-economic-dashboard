export const SUPABASE_ENV = {
  urlVar: "NEXT_PUBLIC_SUPABASE_URL",
  anonKeyVar: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
} as const;

const { urlVar, anonKeyVar } = SUPABASE_ENV;

function isLocalHostname(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".local")
  );
}

/** True when `url` is https, or http on localhost (local Supabase CLI). */
export function isValidPublicSupabaseUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:") return true;
    if (parsed.protocol === "http:" && isLocalHostname(parsed.hostname)) return true;
    return false;
  } catch {
    return false;
  }
}

/**
 * Fast check for browser and server: both vars set and URL shape is acceptable.
 * Does not throw (use for UI banners and query preflight).
 */
export function isSupabasePublicConfigReady(): boolean {
  const url = process.env[urlVar]?.trim();
  const key = process.env[anonKeyVar]?.trim();
  if (!url || !key) return false;
  if (!isValidPublicSupabaseUrl(url)) return false;
  if (key.length < 32) return false;
  return true;
}

export function getSupabaseUrl(): string {
  const url = process.env[urlVar]?.trim();
  if (!url) {
    throw new Error(
      `${urlVar} is not set. Copy .env.example to .env.local and add your Supabase project URL.`,
    );
  }
  if (!isValidPublicSupabaseUrl(url)) {
    throw new Error(
      `${urlVar} must be a valid https URL, or http://127.0.0.1 / http://localhost for local Supabase.`,
    );
  }
  return url;
}

export function getSupabaseAnonKey(): string {
  const key = process.env[anonKeyVar]?.trim();
  if (!key) {
    throw new Error(
      `${anonKeyVar} is not set. Copy .env.example to .env.local and add the anon (publishable) key from Supabase → Settings → API.`,
    );
  }
  if (key.length < 32) {
    throw new Error(
      `${anonKeyVar} looks too short to be a real Supabase anon key. Check your environment value.`,
    );
  }
  return key;
}
