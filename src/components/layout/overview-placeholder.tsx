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
        This dashboard will surface state-level economic data through an interactive
        map, a sortable table, and charts. Use the tabs to move between views; map data
        will also be available outside the map, per accessibility goals.
      </p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
        <li>
          <strong className="font-medium text-foreground">Map</strong> — state-level
          geography (MapLibre) with an accessible state picker
        </li>
        <li>
          <strong className="font-medium text-foreground">Table</strong> — sortable,
          filterable metrics (TanStack Table)
        </li>
        <li>
          <strong className="font-medium text-foreground">Charts</strong> — summary
          bar chart (Nivo) on the same dataset
        </li>
        <li>
          <strong className="font-medium text-foreground">Notes</strong> — context and
          methodology
        </li>
      </ul>
    </section>
  );
}
