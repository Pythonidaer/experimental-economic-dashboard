"use client";

import type { FeatureCollection } from "geojson";
import { useMemo } from "react";

import type { StateTradeMetricRow } from "@/features/economic-data/types/database";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import type { UsStateSelection } from "@/lib/map/types";

import { cn } from "@/lib/utils";

const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type StateDetailsPanelProps = {
  features: FeatureCollection["features"];
  selected: UsStateSelection | null;
  onSelectByPostal: (postal: string, name: string) => void;
  metrics: StateTradeMetricRow[];
  metricsLoading: boolean;
  metricsError: Error | null;
};

export function StateDetailsPanel({
  features,
  selected,
  onSelectByPostal,
  metrics,
  metricsLoading,
  metricsError,
}: StateDetailsPanelProps) {
  const options = useMemo(() => {
    return [...features]
      .map((f) => ({
        postal: String((f.properties as Record<string, unknown>)?.postal ?? ""),
        name: String((f.properties as Record<string, unknown>)?.name ?? ""),
      }))
      .filter((o) => o.postal && o.name)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [features]);

  const liveMessage = selected
    ? `Selected ${selected.name}, ${selected.postalCode}`
    : "No state selected";

  return (
    <aside
      aria-labelledby="state-details-heading"
      className="flex flex-col gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight" id="state-details-heading">
          State details
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          Choose a state here or on the map. Metrics mirror the Table tab dataset.
        </p>
      </div>

      <div aria-live="polite" className="sr-only">
        {liveMessage}
      </div>

      <div>
        <label className="text-sm font-medium" htmlFor="state-select">
          State
        </label>
        <select
          className={cn(
            "mt-1 flex h-11 min-h-11 w-full rounded-md border border-input bg-background px-3 text-base sm:h-10 sm:min-h-10 sm:text-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          id="state-select"
          onChange={(e) => {
            const postal = e.target.value;
            const opt = options.find((o) => o.postal === postal);
            if (opt) {
              onSelectByPostal(opt.postal, opt.name);
            }
          }}
          value={selected?.postalCode ?? ""}
        >
          <option value="">Select a state…</option>
          {options.map((o) => (
            <option key={o.postal} value={o.postal}>
              {o.name} ({o.postal})
            </option>
          ))}
        </select>
      </div>

      {!selected ? (
        <p className="text-sm text-muted-foreground">
          Pick a state to see its trade metrics from Supabase.
        </p>
      ) : (
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-medium text-foreground">{selected.name}</span>{" "}
            <span className="text-muted-foreground">({selected.postalCode})</span>
          </p>
          {metricsLoading ? (
            <ViewLoading message="Loading metrics…" />
          ) : metricsError ? (
            <ViewError
              description={metricsError.message}
              title="Could not load metrics"
            />
          ) : metrics.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No trade rows for this state in <code className="text-xs">state_trade_metrics</code>
              . Seed data or check codes match.
            </p>
          ) : (
            <ul className="max-h-64 space-y-2 overflow-y-auto text-sm sm:max-h-48">
              {metrics.map((row) => (
                <li className="rounded-md border border-border/80 bg-muted/20 px-3 py-2" key={row.id}>
                  <div className="font-medium tabular-nums">{row.year}</div>
                  <div className="text-xs text-muted-foreground">
                    Imports {currency.format(row.import_value)} · Exports{" "}
                    {currency.format(row.export_value)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total {currency.format(row.total_trade_value)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </aside>
  );
}
