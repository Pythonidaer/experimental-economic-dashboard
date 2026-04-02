const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
  compactDisplay: "short",
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});

export function formatTradeCurrency(value: number): string {
  return formatter.format(value);
}

/** Shorter tick labels for chart axes */
export function formatTradeCurrencyCompact(value: number): string {
  return compactFormatter.format(value);
}
