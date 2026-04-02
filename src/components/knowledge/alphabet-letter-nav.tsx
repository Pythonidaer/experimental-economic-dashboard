"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { alphabetSectionId } from "@/lib/knowledge/alphabet-buckets";
import { cn } from "@/lib/utils";

type Variant = "compact" | "rail";

type Props = {
  /** Full sequence shown in the rail (e.g. A–Z and optional “Other”) */
  railLetters: string[];
  /** Letters that have a matching `<section id="…">` on this page (links + scroll spy) */
  presentLetters: string[];
  pagePrefix: string;
  label: string;
  variant: Variant;
  className?: string;
};

function linkText(letter: string): string {
  return letter === "#" ? "Other" : letter;
}

function linkAriaLabel(letter: string): string {
  if (letter === "#") {
    return "Jump to entries starting with a number or other characters";
  }
  return `Jump to entries starting with ${letter}`;
}

function readingColumnSentinelY(): number {
  const header = document.querySelector("body > header");
  const main = document.getElementById("main-content");

  const headerBottom = header instanceof HTMLElement ? header.getBoundingClientRect().bottom : 72;
  const mainTop = main instanceof HTMLElement ? main.getBoundingClientRect().top : 0;
  const chromeTop = Math.max(headerBottom, mainTop, 0);

  const compactStrip =
    typeof window.matchMedia !== "undefined" &&
    window.matchMedia("(max-width: 1023.98px)").matches
      ? 56
      : 0;

  const lineFromChrome = chromeTop + compactStrip + 10;
  const vh = typeof window !== "undefined" ? window.innerHeight : 600;
  const lineFloor = Math.round(Math.min(Math.max(vh * 0.14, 96), 168));

  return Math.max(lineFromChrome, lineFloor);
}

function letterFromGeometry(presentLetters: string[], pagePrefix: string): string | null {
  if (presentLetters.length === 0) return null;

  const sections: HTMLElement[] = [];
  for (const l of presentLetters) {
    const el = document.getElementById(alphabetSectionId(pagePrefix, l));
    if (el instanceof HTMLElement) sections.push(el);
  }
  if (sections.length === 0) return presentLetters[0] ?? null;

  const y = readingColumnSentinelY();
  let current = presentLetters[0]!;

  for (let i = 0; i < sections.length && i < presentLetters.length; i++) {
    if (sections[i].getBoundingClientRect().top <= y) current = presentLetters[i]!;
  }

  const lastLetter = presentLetters[presentLetters.length - 1]!;
  const lastSection = document.getElementById(alphabetSectionId(pagePrefix, lastLetter));

  if (lastSection instanceof HTMLElement) {
    const doc = document.documentElement;
    const vh = window.innerHeight;
    const maxScrollY = doc.scrollHeight - vh;
    const hasScrollRoom = maxScrollY > 16;
    const scrolledToEnd = hasScrollRoom && window.scrollY >= maxScrollY - 8;
    const viewBottom = window.scrollY + vh;
    const tightBelowFold = hasScrollRoom && doc.scrollHeight - viewBottom <= 24;
    const lastRect = lastSection.getBoundingClientRect();
    const lastSectionVisibleInView = lastRect.bottom > 0 && lastRect.top < vh + 1;

    if (lastSectionVisibleInView && (scrolledToEnd || tightBelowFold)) {
      return lastLetter;
    }
  }

  return current;
}

export function AlphabetLetterNav({
  railLetters,
  presentLetters,
  pagePrefix,
  label,
  variant,
  className,
}: Props) {
  const presentSet = useMemo(() => new Set(presentLetters), [presentLetters]);

  const [activeLetter, setActiveLetter] = useState<string | null>(() =>
    presentLetters.length > 0 ? presentLetters[0]! : null,
  );

  const suppressGeometryUntilRef = useRef(0);

  useEffect(() => {
    if (presentLetters.length === 0) {
      setActiveLetter(null);
      return;
    }

    let rafId = 0;

    const applyGeometry = () => {
      if (performance.now() < suppressGeometryUntilRef.current) return;
      const next = letterFromGeometry(presentLetters, pagePrefix);
      if (next != null) setActiveLetter(next);
    };

    const schedule = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        applyGeometry();
      });
    };

    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) return;
      const letter = presentLetters.find((l) => alphabetSectionId(pagePrefix, l) === hash);
      if (letter) {
        setActiveLetter(letter);
        suppressGeometryUntilRef.current = performance.now() + 320;
      }
    };

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) {
      const letter = presentLetters.find((l) => alphabetSectionId(pagePrefix, l) === hash);
      if (letter) {
        setActiveLetter(letter);
        suppressGeometryUntilRef.current = performance.now() + 320;
      } else {
        setActiveLetter(presentLetters[0] ?? null);
      }
    } else {
      setActiveLetter(presentLetters[0] ?? null);
    }

    const sectionEls = presentLetters
      .map((l) => document.getElementById(alphabetSectionId(pagePrefix, l)))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    const observer =
      sectionEls.length > 0
        ? new IntersectionObserver(() => schedule(), {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: [0, 0.01, 1],
          })
        : null;
    sectionEls.forEach((el) => observer?.observe(el));

    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    schedule();

    return () => {
      observer?.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pagePrefix, presentLetters]);

  const onLetterActivate = (letter: string) => {
    setActiveLetter(letter);
    suppressGeometryUntilRef.current = performance.now() + 280;
  };

  if (railLetters.length === 0) return null;

  const hintId = `${pagePrefix}-letter-nav-hint-${variant}`;

  return (
    <nav
      aria-label={`${label} by letter`}
      className={cn(
        variant === "compact" &&
          "sticky top-0 z-10 border-b border-border/70 bg-background/90 py-1.5 backdrop-blur-sm supports-[backdrop-filter]:bg-background/75",
        variant === "rail" &&
          "border-border lg:sticky lg:top-24 lg:max-h-[calc(100vh-6.5rem)] lg:overflow-y-auto lg:border-l lg:border-border/40 lg:pl-3 lg:pt-1",
        className,
      )}
    >
      <p id={hintId} className="sr-only">
        Select a letter to jump to that section. Unused letters are grayed out. The current section
        updates as you scroll.
      </p>
      {variant === "compact" ? (
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
          Jump to letter
        </p>
      ) : null}
      <ul
        className={cn(
          variant === "compact" &&
            "flex flex-wrap gap-x-0.5 gap-y-0.5 sm:gap-x-1",
          variant === "rail" && "flex flex-col gap-0.5",
        )}
      >
        {railLetters.map((letter) => {
          const hasContent = presentSet.has(letter);
          const id = alphabetSectionId(pagePrefix, letter);
          const isActive = hasContent && letter === activeLetter;

          if (!hasContent) {
            return (
              <li key={letter} className="shrink-0">
                <span
                  aria-disabled="true"
                  className={cn(
                    "block cursor-not-allowed font-medium text-muted-foreground/30",
                    variant === "compact" &&
                      "flex min-h-7 min-w-[1.625rem] items-center justify-center rounded px-0.5 text-center text-[11px] tabular-nums sm:min-w-7 sm:text-xs",
                    variant === "rail" &&
                      "border-l border-transparent py-1 pl-2.5 pr-1 text-left text-xs leading-none tabular-nums tracking-tight",
                  )}
                  title="No entries for this letter"
                >
                  {linkText(letter)}
                  <span className="sr-only"> — no entries on this page</span>
                </span>
              </li>
            );
          }

          return (
            <li key={letter} className="shrink-0">
              <Link
                aria-current={isActive ? "location" : undefined}
                aria-describedby={hintId}
                aria-label={linkAriaLabel(letter)}
                className={cn(
                  "block font-medium transition-[color,font-weight,background-color]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  variant === "compact" &&
                    "min-h-7 min-w-[1.625rem] rounded px-0.5 py-0.5 text-center text-xs tabular-nums ring-offset-background focus-visible:ring-offset-2 sm:min-h-8 sm:min-w-8 sm:text-[13px]",
                  variant === "rail" &&
                    "border-l border-transparent py-1 pl-2.5 pr-1 text-left text-xs leading-none tabular-nums tracking-tight focus-visible:ring-offset-0",
                  variant === "compact" && isActive && "bg-muted text-foreground",
                  variant === "compact" && !isActive && "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                  variant === "rail" &&
                    (isActive
                      ? "border-foreground/80 font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground/90"),
                )}
                href={`#${id}`}
                onClick={() => onLetterActivate(letter)}
              >
                {linkText(letter)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
