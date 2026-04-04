const blsLau2024Url = "https://www.bls.gov/lau/lastrk24.htm";
const censusOriginOfMovementUrl =
  "https://www.census.gov/foreign-trade/statistics/state/origin_movement/index.html";
const censusStateTradeUrl =
  "https://www.census.gov/foreign-trade/statistics/state/data/";

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
        This dashboard pairs Census{" "}
        <strong className="font-medium text-foreground">origin-of-movement</strong> exports (
        <code className="text-xs">state_export_profiles</code>) with state unemployment from BLS LAU (
        <code className="text-xs">state_labor_metrics</code>). The Map and Table tabs include short
        export reminders.
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        <section aria-labelledby="notes-export-profiles">
          <h3 className="text-base font-semibold text-foreground" id="notes-export-profiles">
            State export profiles (Census origin of movement)
          </h3>
          <p className="mt-2 text-muted-foreground">
            <strong className="font-medium text-foreground">Exports</strong> uses{" "}
            <code className="text-xs">state_export_profiles</code>: coarse buckets that follow the same
            idea as Census{" "}
            <strong className="font-medium text-foreground">Exhibit 2</strong> (“Origin of Movement of
            U.S. Exports of Goods by State by NAICS-Based Product Code Groupings”). This is a summary
            for comparison — <strong className="font-medium text-foreground">not</strong> a substitute
            for the full tables.
          </p>
          <p className="mt-2 text-muted-foreground">
            Origin of movement overview:{" "}
            <a
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
              href={censusOriginOfMovementUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {censusOriginOfMovementUrl}
            </a>
            . State data downloads:{" "}
            <a
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
              href={censusStateTradeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {censusStateTradeUrl}
            </a>
            .
          </p>

          <h4 className="mt-4 text-sm font-semibold text-foreground">
            What “origin of movement” means
          </h4>
          <p className="mt-2 text-muted-foreground">
            It is <strong className="font-medium text-foreground">where goods are shipped from</strong>{" "}
            on the way out of the country — <strong className="font-medium text-foreground">not</strong>{" "}
            where they were produced and <strong className="font-medium text-foreground">not</strong>{" "}
            a value-added-by-state measure.
          </p>
          <p className="mt-2 text-muted-foreground">
            <strong className="font-medium text-foreground">Example:</strong> something can be produced
            in one state but exported through a port or zone in another; the exporting state may carry
            the value even though production was elsewhere.
          </p>

          <h4 className="mt-4 text-sm font-semibold text-foreground">Why it helps — and limits</h4>
          <p className="mt-2 font-medium text-foreground">Useful</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Quick comparison of export activity across states.</li>
            <li>A high-level read on how much is moving in broad export buckets.</li>
          </ul>
          <p className="mt-3 font-medium text-foreground">Limitations</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Not industry-level truth — coarse buckets only.</li>
            <li>Not production location — origin of movement is shipping, not “made in.”</li>
            <li>Not job distribution or labor-market structure.</li>
          </ul>

          <h4 className="mt-4 text-sm font-semibold text-foreground">
            Non-manufactured (this bucket only)
          </h4>
          <p className="mt-2 text-muted-foreground">
            Everything below applies only to the{" "}
            <strong className="font-medium text-foreground">non-manufactured</strong> bucket —{" "}
            <strong className="font-medium text-foreground">not</strong> manufactured exports.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              Typically includes <strong className="font-medium text-foreground">agriculture</strong>,{" "}
              <strong className="font-medium text-foreground">raw materials</strong> (for example
              minerals), <strong className="font-medium text-foreground">scrap</strong> /{" "}
              <strong className="font-medium text-foreground">waste</strong>, and{" "}
              <strong className="font-medium text-foreground">second-hand</strong> goods — still a
              coarse mix, not a full commodity map.
            </li>
            <li>
              Totals here are often tied to{" "}
              <strong className="font-medium text-foreground">port / export location</strong> (where
              the shipment leaves), which can dominate the state you see.
            </li>
          </ul>

          <h4 className="mt-4 text-sm font-semibold text-foreground">Re-exports</h4>
          <p className="mt-2 text-muted-foreground">
            <strong className="font-medium text-foreground">Re-exports</strong> are imported into the
            U.S., then exported again. They are <strong className="font-medium text-foreground">not</strong>{" "}
            domestic production. The UI keeps them visible but de-emphasizes them on purpose so they
            are not read as output “made here.”
          </p>

          <h4 className="mt-4 text-sm font-semibold text-foreground">Practical data notes</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>All dollar values are <strong className="font-medium text-foreground">millions USD</strong>.</li>
            <li>
              <strong className="font-medium text-foreground">FTZ</strong> (foreign-trade zone)
              flows are included where Census includes them in these figures.
            </li>
            <li>
              <strong className="font-medium text-foreground">Rounding</strong> — parts may not sum to
              reported totals exactly.
            </li>
            <li>
              A dash in source tables usually means near-zero; we display{" "}
              <strong className="font-medium text-foreground">—</strong> the same way.
            </li>
          </ul>

          <h4 className="mt-4 text-sm font-semibold text-foreground">How this app uses the data</h4>
          <p className="mt-2 text-muted-foreground">
            This layer is a <strong className="font-medium text-foreground">directional, comparative</strong>{" "}
            view — good for orientation and state-to-state contrast. It is{" "}
            <strong className="font-medium text-foreground">not</strong> a definitive read on industry
            composition, production location, or where value was added.
          </p>

          <p className="mt-3 text-sm font-medium text-foreground">Coarse buckets in the UI</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>
              <strong className="font-medium text-foreground">Manufactured</strong> — closer to a
              production-linked signal than the other buckets, but still imperfect (shipping and
              logistics still matter).
            </li>
            <li>
              <strong className="font-medium text-foreground">Non-manufactured</strong> — agriculture,
              raw materials, scrap / waste, second-hand goods; often distorted by port and export
              location (see above — this bucket only).
            </li>
            <li>
              <strong className="font-medium text-foreground">Re-exports</strong> — not domestic
              production (imported, then shipped out again).
            </li>
            <li>
              <strong className="font-medium text-foreground">Total</strong> — combined measure across
              the buckets in this extract; compare other sources only when definitions match.
            </li>
          </ul>
        </section>

        <section aria-labelledby="notes-data-source">
          <h3 className="text-base font-semibold text-foreground" id="notes-data-source">
            Unemployment data source
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
              Based on <strong className="font-medium text-foreground">place of residence</strong>, not
              where jobs are located.
            </li>
            <li>
              Estimates come from surveys and models, not a full head count.
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
              It is a <strong className="font-medium text-foreground">relative measure</strong>, not an
              absolute count.
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
