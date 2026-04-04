export function NotesPlaceholder() {
  return (
    <section
      aria-labelledby="notes-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="notes-heading">
        Notes
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Checklist for growing the data behind this dashboard.
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
        <li>Identify reliable public sources for trade, labor, banking, and macro data.</li>
        <li>Verify update frequency and licensing for each source.</li>
        <li>Decide which datasets belong in the dashboard first.</li>
        <li>Define cleaning and normalization rules before import.</li>
        <li>Document reliability checks and source caveats for users.</li>
        <li>
          Plan scripted collection only where public releases truly fall short—prefer
          official feeds first.
        </li>
      </ol>
    </section>
  );
}
