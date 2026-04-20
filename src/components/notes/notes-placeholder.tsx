import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blsLau2024Url = "https://www.bls.gov/lau/lastrk24.htm";
const censusOriginOfMovementUrl =
  "https://www.census.gov/foreign-trade/statistics/state/origin_movement/index.html";
const censusStateTradeUrl =
  "https://www.census.gov/foreign-trade/statistics/state/data/";
const massQcewUrl = "https://lmi.dua.eol.mass.gov/lmi/EmploymentAndWages#";

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

      <Tabs className="mt-6" defaultValue="exports">
        <TabsList aria-label="Notes dataset sections" variant="line">
          <TabsTrigger value="exports">Exports</TabsTrigger>
          <TabsTrigger value="labor">Labor</TabsTrigger>
          <TabsTrigger value="industry">Industry</TabsTrigger>
        </TabsList>

        <TabsContent className="mt-6 space-y-8 text-sm leading-relaxed" value="exports">
          <section aria-labelledby="notes-export-what">
            <h3 className="text-base font-semibold text-foreground" id="notes-export-what">
              What this data shows
            </h3>
            <p className="mt-2 text-muted-foreground">
              <strong className="font-medium text-foreground">Exports</strong> uses{" "}
              <code className="text-xs">state_export_profiles</code>: coarse buckets that follow the
              same idea as Census <strong className="font-medium text-foreground">Exhibit 2</strong>{" "}
              (“Origin of Movement of U.S. Exports of Goods by State by NAICS-Based Product Code
              Groupings”).
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
          </section>

          <section aria-labelledby="notes-export-interpret">
            <h3 className="text-base font-semibold text-foreground" id="notes-export-interpret">
              How to interpret it
            </h3>
            <p className="mt-2 text-muted-foreground">
              “Origin of movement” is <strong className="font-medium text-foreground">where goods are shipped from</strong>{" "}
              when they leave the country. It is <strong className="font-medium text-foreground">not</strong>{" "}
              where goods were produced and not a value-added-by-state measure.
            </p>
            <p className="mt-2 text-muted-foreground">
              Example: goods can be produced in one state and exported through a port in another.
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">Coarse buckets in this view</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li><strong className="font-medium text-foreground">Manufactured</strong> — closer to a production-linked signal, but still imperfect.</li>
              <li><strong className="font-medium text-foreground">Non-manufactured</strong> — agriculture, raw materials, scrap/waste, second-hand goods.</li>
              <li><strong className="font-medium text-foreground">Re-exports</strong> — imported into the U.S. and exported again, not domestic production.</li>
              <li><strong className="font-medium text-foreground">Total</strong> — combined measure across these buckets.</li>
            </ul>
          </section>

          <section aria-labelledby="notes-export-limits">
            <h3 className="text-base font-semibold text-foreground" id="notes-export-limits">
              Limitations and practical notes
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Useful for directional comparison, not industry-level truth.</li>
              <li>Not production location and not job distribution.</li>
              <li>All dollar values are <strong className="font-medium text-foreground">millions USD</strong>.</li>
              <li>FTZ flows are included where Census includes them.</li>
              <li>Parts may not sum to totals exactly due to rounding.</li>
              <li>A dash in source tables usually means near-zero; we display <strong className="font-medium text-foreground">—</strong> similarly.</li>
            </ul>
          </section>
        </TabsContent>

        <TabsContent className="mt-6 space-y-8 text-sm leading-relaxed" value="labor">
          <section aria-labelledby="notes-labor-what">
            <h3 className="text-base font-semibold text-foreground" id="notes-labor-what">
              What this data shows
            </h3>
            <p className="mt-2 text-muted-foreground">
              Unemployment data (2024 annual averages) is sourced from BLS LAU:{" "}
              <a
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
                href={blsLau2024Url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {blsLau2024Url}
              </a>
              .
            </p>
            <p className="mt-2 text-muted-foreground">
              LAU provides employment, unemployment, and labor force participation estimates at
              state, metropolitan, and county levels.
            </p>
          </section>

          <section aria-labelledby="notes-labor-interpret">
            <h3 className="text-base font-semibold text-foreground" id="notes-labor-interpret">
              How to interpret it
            </h3>
            <p className="mt-2 text-muted-foreground">
              Unemployment rate is the share of people in the labor force who are actively
              looking for work but do not have a job.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>It does not include people who stopped looking for work.</li>
              <li>It does not represent total population.</li>
              <li>It is a relative measure, not an absolute count.</li>
            </ul>
            <p className="mt-3 text-sm font-medium text-foreground">High vs low (general ranges)</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li><strong className="font-medium text-foreground">~2–3%</strong>: very low unemployment.</li>
              <li><strong className="font-medium text-foreground">~3–5%</strong>: typical/healthy range.</li>
              <li><strong className="font-medium text-foreground">~5–7%</strong>: elevated unemployment.</li>
              <li><strong className="font-medium text-foreground">7%+</strong>: high unemployment.</li>
            </ul>
          </section>

          <section aria-labelledby="notes-labor-limits">
            <h3 className="text-base font-semibold text-foreground" id="notes-labor-limits">
              Limitations and future improvements
            </h3>
            <p className="mt-2 text-muted-foreground">
              Unemployment alone does not capture population size, job availability, wage levels,
              underemployment, or participation differences.
            </p>
            <p className="mt-2 text-muted-foreground">
              Future improvements could combine unemployment with population, job demand, labor
              force participation, and wage data for deeper labor-market context.
            </p>
          </section>
        </TabsContent>

        <TabsContent className="mt-6 space-y-8 text-sm leading-relaxed" value="industry">
          <section aria-labelledby="notes-industry-what">
            <h3 className="text-base font-semibold text-foreground" id="notes-industry-what">
              What this data shows
            </h3>
            <p className="mt-2 text-muted-foreground">
              Industry data comes from Massachusetts DUA{" "}
              <strong className="font-medium text-foreground">QCEW (ES-202)</strong>, based on
              employer-reported payroll records.
            </p>
            <p className="mt-2 text-muted-foreground">
              It covers most wage and salary employment, but not most self-employed workers.
            </p>
          </section>

          <section aria-labelledby="notes-industry-interpret">
            <h3 className="text-base font-semibold text-foreground" id="notes-industry-interpret">
              How to interpret it
            </h3>
            <p className="mt-2 text-muted-foreground">
              <strong className="font-medium text-foreground">Average monthly employees</strong>{" "}
              means the average number of people employed each month.
            </p>
            <p className="mt-2 text-muted-foreground">
              It does <strong className="font-medium text-foreground">not</strong> represent
              current hiring activity or job openings.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong className="font-medium text-foreground">NAICS</strong> stands for{" "}
              <strong className="font-medium text-foreground">
                North American Industry Classification System
              </strong>
              , the standard industry coding framework used in U.S. economic datasets.
            </p>
            <p className="mt-2 text-muted-foreground">
              Depending on the selected level, the chart can show broader industry groupings or
              narrower subcategory detail.
            </p>
          </section>

          <section aria-labelledby="notes-industry-limits">
            <h3 className="text-base font-semibold text-foreground" id="notes-industry-limits">
              Limitations and source
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Current view is an annual snapshot for 2024.</li>
              <li>Only a limited set of industries is shown in this version.</li>
              <li>Values are aggregated at the regional (MSA) level.</li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              Official Massachusetts source:{" "}
              <a
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
                href={massQcewUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {massQcewUrl}
              </a>
              .
            </p>
          </section>
        </TabsContent>
      </Tabs>
    </section>
  );
}
