import type { ContentSection } from "@/content/types";

type Props = {
  sections: ContentSection[];
};

export function ContentSections({ sections }: Props) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <section
          key={index}
          aria-labelledby={section.heading ? `section-${index}-heading` : undefined}
        >
          {section.heading ? (
            <h2
              className="text-xl font-semibold tracking-tight text-foreground"
              id={`section-${index}-heading`}
            >
              {section.heading}
            </h2>
          ) : null}
          <div
            className={
              section.heading
                ? "mt-3 space-y-4 break-words text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
                : "space-y-4 break-words text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
            }
          >
            {section.paragraphs.map((p, pi) => (
              <p key={pi}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
