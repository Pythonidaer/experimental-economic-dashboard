const blsLau2024Url = "https://www.bls.gov/lau/lastrk24.htm";

export function NotesPlaceholder() {
  return (
    <section
      aria-labelledby="notes-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="notes-heading">
        Notes
      </h2>
      <p className="mt-2 max-w-prose text-sm text-muted-foreground">
        Context for the dashboard charts, starting with unemployment by state (2024
        annual averages).
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        <section aria-labelledby="notes-data-source">
          <h3 className="text-base font-semibold text-foreground" id="notes-data-source">
            Data source
          </h3>
          <p className="mt-2 text-muted-foreground">
            Unemployment data (2024 annual averages) is sourced from the U.S. Bureau of
            Labor Statistics (BLS):{" "}
            <a
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
              href={blsLau2024Url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {blsLau2024Url}
            </a>
          </p>
          <p className="mt-2 text-muted-foreground">
            This dataset comes from the{" "}
            <strong className="font-medium text-foreground">
              Local Area Unemployment Statistics (LAU)
            </strong>{" "}
            program.
          </p>
        </section>

        <section aria-labelledby="notes-what-is-lau">
          <h3 className="text-base font-semibold text-foreground" id="notes-what-is-lau">
            What is LAU?
          </h3>
          <p className="mt-2 text-muted-foreground">
            The Local Area Unemployment Statistics (LAU) program provides:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Employment</li>
            <li>Unemployment</li>
            <li>Labor force participation</li>
          </ul>
          <p className="mt-2 text-muted-foreground">
            …at the <strong className="font-medium text-foreground">state</strong>,{" "}
            <strong className="font-medium text-foreground">metropolitan</strong>, and{" "}
            <strong className="font-medium text-foreground">county</strong> levels.
          </p>
          <p className="mt-3 font-medium text-foreground">Key points</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              Data is based on <strong className="font-medium text-foreground">place of residence</strong>
              , not where jobs are located.
            </li>
            <li>
              Estimates are derived from surveys and statistical models (not a direct
              census count).
            </li>
          </ul>
        </section>

        <section aria-labelledby="notes-interpret">
          <h3
            className="text-base font-semibold text-foreground"
            id="notes-interpret"
          >
            How to interpret unemployment rate
          </h3>
          <p className="mt-2 text-muted-foreground">
            Unemployment rate ={" "}
            <strong className="font-medium text-foreground">
              % of people in the labor force actively looking for work but unable to
              find it
            </strong>
            .
          </p>
          <p className="mt-3 font-medium text-foreground">Important</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              It does <strong className="font-medium text-foreground">not</strong>{" "}
              include people who stopped looking for work.
            </li>
            <li>
              It does <strong className="font-medium text-foreground">not</strong>{" "}
              reflect total population.
            </li>
            <li>
              It is a <strong className="font-medium text-foreground">relative measure</strong>
              , not an absolute count.
            </li>
          </ul>
        </section>

        <section aria-labelledby="notes-high-low">
          <h3 className="text-base font-semibold text-foreground" id="notes-high-low">
            What counts as &quot;high&quot; or &quot;low&quot;?
          </h3>
          <p className="mt-2 text-muted-foreground">
            There is no strict universal scale, but generally:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              <strong className="font-medium text-foreground">~2–3%</strong> → very low
              unemployment (tight labor market)
            </li>
            <li>
              <strong className="font-medium text-foreground">~3–5%</strong> → typical /
              healthy range
            </li>
            <li>
              <strong className="font-medium text-foreground">~5–7%</strong> → elevated
              unemployment
            </li>
            <li>
              <strong className="font-medium text-foreground">7%+</strong> → high
              unemployment (often recession-related)
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Example: Massachusetts at ~4% is often considered{" "}
            <strong className="font-medium text-foreground">normal</strong>, not
            necessarily concerning.
          </p>
        </section>

        <section aria-labelledby="notes-limitations">
          <h3
            className="text-base font-semibold text-foreground"
            id="notes-limitations"
          >
            Limitations of this dataset
          </h3>
          <p className="mt-2 text-muted-foreground">
            Unemployment rate alone does not tell the full story. It does not account
            for:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Population size</li>
            <li>Number of available jobs</li>
            <li>Wage levels</li>
            <li>Underemployment (people working less than desired)</li>
            <li>Labor force participation differences</li>
          </ul>
        </section>

        <section aria-labelledby="notes-future">
          <h3 className="text-base font-semibold text-foreground" id="notes-future">
            Future improvements (planned)
          </h3>
          <p className="mt-2 text-muted-foreground">
            To make this data more meaningful, the dashboard could combine unemployment
            with:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              <strong className="font-medium text-foreground">Population data</strong>{" "}
              (Census)
            </li>
            <li>
              <strong className="font-medium text-foreground">
                Job openings / demand data
              </strong>
            </li>
            <li>
              <strong className="font-medium text-foreground">
                Labor force participation rate
              </strong>
            </li>
            <li>
              <strong className="font-medium text-foreground">Median wages</strong>
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            That would support better comparison across states and deeper insight into
            labor market health.
          </p>
        </section>
      </div>
    </section>
  );
}
