/**
 * Group titled content for A–Z index UIs. Non-Latin or leading digits → "#".
 */

export type AlphabetBucket<T extends { title: string }> = {
  letter: string;
  items: T[];
};

function firstLetterBucket(title: string): string {
  const trimmed = title.trim();
  if (trimmed.length === 0) return "#";
  const base = trimmed.normalize("NFKC");
  const upper = base[0]!.toUpperCase();
  if (upper >= "A" && upper <= "Z") return upper;
  return "#";
}

export function groupByAlphabetBucket<T extends { title: string }>(
  items: T[],
): AlphabetBucket<T>[] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const letter = firstLetterBucket(item.title);
    const list = map.get(letter);
    if (list) list.push(item);
    else map.set(letter, [item]);
  }

  const letters = [...map.keys()].sort((a, b) => {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a.localeCompare(b, "en");
  });

  return letters.map((letter) => {
    const chunk = map.get(letter) ?? [];
    chunk.sort((x, y) => x.title.localeCompare(y.title, "en"));
    return { letter, items: chunk };
  });
}

/** Stable id segment for in-page anchors (lowercase, hyphenated prefix). */
export function alphabetSectionId(pagePrefix: string, letter: string): string {
  if (letter === "#") return `${pagePrefix}-other`;
  return `${pagePrefix}-${letter.toLowerCase()}`;
}

const A_THROUGH_Z = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

/**
 * Full Latin A–Z rail order plus optional “Other” (#) when that bucket exists on the page.
 */
export function getAlphabetRailLetters(includeOtherSlot: boolean): string[] {
  return includeOtherSlot ? [...A_THROUGH_Z, "#"] : [...A_THROUGH_Z];
}
