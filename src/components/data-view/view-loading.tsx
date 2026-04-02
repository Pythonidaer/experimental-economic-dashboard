type ViewLoadingProps = {
  message?: string;
};

export function ViewLoading({ message = "Loading…" }: ViewLoadingProps) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="flex min-h-[10rem] items-center justify-center rounded-md border border-muted bg-muted/30 px-3 py-6 text-sm text-muted-foreground sm:min-h-[12rem] sm:px-4 sm:py-8"
      role="status"
    >
      {message}
    </div>
  );
}
