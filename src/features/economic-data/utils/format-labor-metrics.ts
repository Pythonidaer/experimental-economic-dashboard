const pct1 = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/** One decimal + %, e.g. 4 → "4.0%" */
export function formatUnemploymentRate(value: number): string {
  return `${pct1.format(value)}%`;
}
