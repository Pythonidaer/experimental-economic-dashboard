const wage = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const pct1 = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export function formatUnemploymentRate(value: number): string {
  return `${pct1.format(value)}%`;
}

export function formatLaborForceParticipation(value: number): string {
  return `${pct1.format(value)}%`;
}

export function formatAvgWage(value: number): string {
  return wage.format(value);
}
