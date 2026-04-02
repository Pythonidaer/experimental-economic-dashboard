import type { Metadata } from "next";
import Link from "next/link";

import { AlphabetLetterNav } from "@/components/knowledge/alphabet-letter-nav";
import { getAllGlossaryEntries } from "@/lib/content/access";
import { glossaryEntryPath, ROUTES } from "@/lib/constants/routes";
import {
  alphabetSectionId,
  getAlphabetRailLetters,
  groupByAlphabetBucket,
} from "@/lib/knowledge/alphabet-buckets";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Definitions and context for economic terms from the project content plan (The Economist’s Hour) and dashboard datasets.",
};

const GLOSSARY_INDEX_PREFIX = "glossary-index";

export default function GlossaryIndexPage() {
  const entries = getAllGlossaryEntries();
  const buckets = groupByAlphabetBucket(entries);
  const presentLetters = buckets.map((b) => b.letter);
  const railLetters = getAlphabetRailLetters(presentLetters.includes("#"));

  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto flex w-full max-w-[72rem] flex-col lg:flex-row lg:items-stretch lg:justify-center lg:gap-6">
        <div className="min-w-0 w-full lg:max-w-3xl lg:shrink-0">
          <div className="w-full">
            <header className="mb-4 space-y-2 sm:mb-8 sm:space-y-3">
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                <Link
                  className="underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href={ROUTES.home}
                >
                  Home
                </Link>
                <span aria-hidden="true" className="px-1.5 text-muted-foreground/70">
                  /
                </span>
                <span className="text-foreground">Glossary</span>
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Glossary
              </h1>
              <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:max-w-prose">
                Concise entries for ideas that show up in public debates about trade, growth, and
                policy—especially those highlighted in readings like{" "}
                <span className="text-foreground">“The Economist’s Hour.”</span> Use these pages to
                orient yourself before exploring state-level data in the dashboard. Topic pages offer
                longer reads that link back to these terms.
              </p>
            </header>

            <AlphabetLetterNav
              label="Glossary entries"
              presentLetters={presentLetters}
              railLetters={railLetters}
              pagePrefix={GLOSSARY_INDEX_PREFIX}
              variant="compact"
              className="lg:hidden -mx-3 mb-1 px-3 sm:-mx-6 sm:mb-2 sm:px-6"
            />

            <div className="border-t border-border pt-4 sm:pt-6 lg:pt-8">
              {buckets.map((bucket, index) => {
                const sectionId = alphabetSectionId(GLOSSARY_INDEX_PREFIX, bucket.letter);
                const titleId = `${sectionId}-title`;
                const srLetterLabel =
                  bucket.letter === "#"
                    ? "numerals or non-Latin characters"
                    : `the letter ${bucket.letter}`;
                return (
                  <section
                    key={bucket.letter}
                    aria-labelledby={titleId}
                    className={cn(
                      "scroll-mt-32 sm:scroll-mt-36 lg:scroll-mt-24",
                      index > 0 && "mt-8 border-t border-border/60 pt-8 sm:mt-10 sm:pt-10 lg:mt-12 lg:pt-12",
                    )}
                    id={sectionId}
                  >
                    <h2 id={titleId} className="sr-only">
                      Glossary entries starting with {srLetterLabel}
                    </h2>
                    <ul className="flex flex-col gap-3 lg:gap-0 lg:divide-y lg:divide-border">
                      {bucket.items.map((entry) => (
                        <li key={entry.slug}>
                          <article
                            className={cn(
                              "rounded-lg border border-border/80 bg-muted/25 px-3.5 py-3.5 sm:px-4 sm:py-4",
                              "lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-6",
                              "xl:py-7",
                            )}
                          >
                            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl">
                              <Link
                                className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                href={glossaryEntryPath(entry.slug)}
                              >
                                {entry.title}
                              </Link>
                            </h3>
                            <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:text-base lg:max-w-prose">
                              {entry.summary}
                            </p>
                            <p className="mt-2.5 sm:mt-3">
                              <Link
                                className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                href={glossaryEntryPath(entry.slug)}
                              >
                                Read entry
                                <span className="sr-only">: {entry.title}</span>
                              </Link>
                            </p>
                          </article>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="hidden w-11 shrink-0 lg:flex lg:justify-start lg:pt-0">
          <AlphabetLetterNav
            label="Glossary entries"
            presentLetters={presentLetters}
            railLetters={railLetters}
            pagePrefix={GLOSSARY_INDEX_PREFIX}
            variant="rail"
          />
        </aside>
      </div>
    </div>
  );
}
