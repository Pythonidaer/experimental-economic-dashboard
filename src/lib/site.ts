/**
 * Canonical site URL for metadata, Open Graph, and absolute links.
 * Set NEXT_PUBLIC_SITE_URL on production (e.g. https://your-app.vercel.app).
 */
export function getSiteUrlString(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  try {
    return new URL(getSiteUrlString());
  } catch {
    return new URL("http://localhost:3000");
  }
}
