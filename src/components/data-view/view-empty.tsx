type ViewEmptyProps = {
  title?: string;
  description?: string;
};

export function ViewEmpty({
  title = "No data yet",
  description = "There are no rows to show. Add seed data in Supabase or check your filters.",
}: ViewEmptyProps) {
  return (
    <div
      aria-live="polite"
      className="flex min-h-[10rem] flex-col items-center justify-center gap-1 rounded-md border border-dashed border-muted-foreground/25 bg-muted/20 px-3 py-6 text-center text-sm text-muted-foreground sm:min-h-[12rem] sm:px-4 sm:py-8"
      role="status"
    >
      <p className="font-medium text-foreground">{title}</p>
      {description ? <p className="max-w-md">{description}</p> : null}
    </div>
  );
}
