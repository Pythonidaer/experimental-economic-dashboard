"use client";

type StateTradeMetricsTableFilterProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
};

export function StateTradeMetricsTableFilter({
  id = "state-trade-metrics-filter",
  value,
  onChange,
}: StateTradeMetricsTableFilterProps) {
  return (
    <div className="mb-4 min-w-0">
      <label
        className="mb-1.5 block text-sm font-medium text-foreground"
        htmlFor={id}
      >
        Filter by state name or code
      </label>
      <input
        aria-describedby={`${id}-hint`}
        autoComplete="off"
        className="h-11 min-h-11 w-full max-w-md rounded-md border border-input bg-background px-3 py-2 text-base shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-9 sm:min-h-9 sm:py-1 sm:text-sm"
        id={id}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. California or CA"
        role="searchbox"
        type="search"
        value={value}
      />
      <p className="mt-1.5 text-xs text-muted-foreground" id={`${id}-hint`}>
        Client-side filter; all rows are already loaded from Supabase.
      </p>
    </div>
  );
}
