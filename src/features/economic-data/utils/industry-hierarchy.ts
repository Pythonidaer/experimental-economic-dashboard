import type { StateIndustryDetailRow } from "@/features/economic-data/types/database";

export type NaicsDigitLevel = "2" | "3" | "4";

export type IndustryDetailDisplayRow = StateIndustryDetailRow & {
  naics_digit_level: NaicsDigitLevel;
  parent_naics_code: string | null;
  parent_industry: string | null;
};

function normalizeNaicsCode(value: string): string {
  return value.replace(/\s+/g, "").trim();
}

function parseTwoDigitPrefix(value: string): number | null {
  const match = value.match(/^(\d{2})/);
  if (!match) return null;
  const parsed = Number(match[1]);
  return Number.isFinite(parsed) ? parsed : null;
}

function topLevelCodeMatchesChild(topLevelCode: string, childCode: string): boolean {
  const normalizedTop = normalizeNaicsCode(topLevelCode);
  const normalizedChild = normalizeNaicsCode(childCode);
  const childPrefix = parseTwoDigitPrefix(normalizedChild);
  if (childPrefix === null) return false;

  const rangeMatch = normalizedTop.match(/^(\d{2})-(\d{2})$/);
  if (rangeMatch) {
    const start = Number(rangeMatch[1]);
    const end = Number(rangeMatch[2]);
    return childPrefix >= start && childPrefix <= end;
  }

  if (/^\d{2}$/.test(normalizedTop)) {
    return normalizedTop === String(childPrefix).padStart(2, "0");
  }

  return false;
}

export function toNaicsDigitLevel(naicsCode: string): NaicsDigitLevel | null {
  const value = normalizeNaicsCode(naicsCode);
  if (/^\d{2}$/.test(value) || /^\d{2}-\d{2}$/.test(value)) return "2";
  if (/^\d{3}$/.test(value)) return "3";
  if (/^\d{4}$/.test(value)) return "4";
  return null;
}

export function shapeIndustryDetailsWithParents(
  rows: StateIndustryDetailRow[],
): IndustryDetailDisplayRow[] {
  const topLevelByRegion = new Map<
    string,
    Array<{ naics_code: string; industry: string }>
  >();

  for (const row of rows) {
    const digitLevel = toNaicsDigitLevel(row.naics_level);
    if (digitLevel !== "2") continue;
    const region = row.region.trim();
    if (!topLevelByRegion.has(region)) {
      topLevelByRegion.set(region, []);
    }
    topLevelByRegion.get(region)?.push({
      naics_code: normalizeNaicsCode(row.naics_code),
      industry: row.industry.trim(),
    });
  }

  return rows
    .map((row) => {
      const digitLevel = toNaicsDigitLevel(row.naics_level);
      if (!digitLevel) return null;

      const region = row.region.trim();
      const naicsCode = normalizeNaicsCode(row.naics_code);
      const topRows = topLevelByRegion.get(region) ?? [];

      let parent: { naics_code: string; industry: string } | null = null;
      if (digitLevel === "2") {
        parent = topRows.find((candidate) => candidate.naics_code === naicsCode) ?? null;
      } else {
        parent =
          topRows.find((candidate) => topLevelCodeMatchesChild(candidate.naics_code, naicsCode)) ??
          null;
      }

      return {
        ...row,
        naics_code: naicsCode,
        naics_level: normalizeNaicsCode(row.naics_level),
        naics_digit_level: digitLevel,
        parent_naics_code: parent?.naics_code ?? null,
        parent_industry: parent?.industry ?? null,
      };
    })
    .filter((row): row is IndustryDetailDisplayRow => row !== null);
}
