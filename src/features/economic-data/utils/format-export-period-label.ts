const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/**
 * Display helper: `2026-01` → `Jan 2026`. Unknown shapes fall back to the raw label.
 */
export function formatExportPeriodLabelForDisplay(
  periodLabel: string | null | undefined,
): string {
  if (periodLabel == null || String(periodLabel).trim() === "") {
    return "—";
  }
  const raw = String(periodLabel).trim();
  const m = /^(\d{4})-(\d{1,2})$/.exec(raw);
  if (!m) {
    return raw;
  }
  const year = m[1];
  const monthNum = parseInt(m[2], 10);
  if (monthNum < 1 || monthNum > 12) {
    return raw;
  }
  return `${MONTH_SHORT[monthNum - 1]} ${year}`;
}
