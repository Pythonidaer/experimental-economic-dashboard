/**
 * Supabase browser config. Use direct `process.env.NEXT_PUBLIC_*` reads only —
 * Next.js inlines these at build time; dynamic keys like `process.env[name]` are not
 * replaced and break in production client bundles.
 */

export const SUPABASE_ENV = {
  urlVar: "NEXT_PUBLIC_SUPABASE_URL",
  anonKeyVar: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
} as const;

/** Publishable key prefix from Supabase Dashboard → Settings → API (new API keys). */
const SUPABASE_PUBLISHABLE_KEY_PREFIX = "sb_publishable_" as const;

function isLocalHostname(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".local")
  );
}

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

export function isSupabasePublishableKey(key: string): boolean {
  return key.startsWith(SUPABASE_PUBLISHABLE_KEY_PREFIX);
}

export function isSupabasePublicConfigReady(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !key) return false;
  if (!isValidPublicSupabaseUrl(url)) return false;
  if (!isSupabasePublishableKey(key)) return false;
  return true;
}

export function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();

  if (!url) {
    throw new Error(
      `${SUPABASE_ENV.urlVar} is not set. Copy .env.example to .env.local and add your Supabase project URL.`,
    );
  }

  if (!isValidPublicSupabaseUrl(url)) {
    throw new Error(
      `${SUPABASE_ENV.urlVar} must be a valid https URL, or http://127.0.0.1 / http://localhost for local Supabase.`,
    );
  }

  return url;
}

export function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!key) {
    throw new Error(
      `${SUPABASE_ENV.anonKeyVar} is not set. Copy .env.example to .env.local and add the publishable key from Supabase → Settings → API.`,
    );
  }

  if (!isSupabasePublishableKey(key)) {
    throw new Error(
      `${SUPABASE_ENV.anonKeyVar} must be a Supabase publishable key (starts with ${SUPABASE_PUBLISHABLE_KEY_PREFIX}).`,
    );
  }

  return key;
}
