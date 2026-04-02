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
        Space for methodology, data sources, and disclaimers as the project grows.
      </p>
      <div
        className="mt-4 rounded-md border border-muted bg-muted/20 p-4 text-sm text-muted-foreground"
        role="status"
      >
        Notes content will go here.
      </div>
    </section>
  );
}
