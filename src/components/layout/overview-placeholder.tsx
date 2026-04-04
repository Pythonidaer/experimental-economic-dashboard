export function OverviewPlaceholder() {
  return (
    <section
      aria-labelledby="overview-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="overview-heading">
        Overview
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Browse state-level economic data on a map, in sortable tables, and in simple
        charts. Everything you see on the map is also available outside it so you can
        explore without relying on geography alone.
      </p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
        <li>
          <strong className="font-medium text-foreground">Map</strong> — click states
          or pick from a list
        </li>
        <li>
          <strong className="font-medium text-foreground">Table</strong> — sort and
          filter; switch between Census export buckets and labor (unemployment)
        </li>
        <li>
          <strong className="font-medium text-foreground">Charts</strong> — quick
          state comparisons for the same categories (export charts pick one bucket at a time)
        </li>
        <li>
          <strong className="font-medium text-foreground">Notes</strong> — sources and
          how to interpret unemployment and export structure
        </li>
      </ul>
    </section>
  );
}
