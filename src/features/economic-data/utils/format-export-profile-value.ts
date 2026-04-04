/**
 * Stored values are **millions of U.S. dollars** (Census-style monthly state export tables).
 * Format as full-dollar compact currency for readable tooltips and axes.
 */
const compactFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
  compactDisplay: "short",
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});

export function formatExportMillionsUsdCompact(valueMillions: number): string {
  return compactFormatter.format(valueMillions * 1_000_000);
}
