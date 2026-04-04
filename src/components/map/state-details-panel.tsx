"use client";

import type { FeatureCollection } from "geojson";
import { useMemo } from "react";

import type { DashboardDataset } from "@/components/layout/dashboard/dashboard-dataset-toggle";
import type { StateExportProfileRow } from "@/features/economic-data/types/database";
import type { StateLaborMetricRow } from "@/features/economic-data/types/database";
import { formatExportMillionsUsdCompact } from "@/features/economic-data/utils/format-export-profile-value";
import { formatExportPeriodLabelForDisplay } from "@/features/economic-data/utils/format-export-period-label";
import { formatUnemploymentRate } from "@/features/economic-data/utils/format-labor-metrics";
import {
  EXPORT_PROFILE_METRIC_LABELS,
  NON_MANUFACTURED_EXPORTS_SCOPED_NOTE,
  type ExportProfileMetricKey,
} from "@/features/economic-data/utils/export-profiles-chart-data";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import type { UsStateSelection } from "@/lib/map/types";

import { cn } from "@/lib/utils";

const EXPORT_METRIC_OPTIONS: ExportProfileMetricKey[] = [
  "manufactured_exports",
  "non_manufactured_exports",
  "re_exports",
  "total_exports",
];

type StateDetailsPanelProps = {
  features: FeatureCollection["features"];
  selected: UsStateSelection | null;
  onSelectByPostal: (postal: string, name: string) => void;
  dataset: DashboardDataset;
  exportMetric: ExportProfileMetricKey;
  onExportMetricChange: (metric: ExportProfileMetricKey) => void;
  laborRows: StateLaborMetricRow[];
  exportRows: StateExportProfileRow[];
  metricsLoading: boolean;
  metricsError: Error | null;
};

export function StateDetailsPanel({
  features,
  selected,
  onSelectByPostal,
  dataset,
  exportMetric,
  onExportMetricChange,
  laborRows,
  exportRows,
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

  const contextLine =
    dataset === "labor"
      ? "Unemployment matches the Table tab (Labor)."
      : "Census origin-of-movement export buckets (broad, not industry detail). Map shading = bucket you select, latest loaded row per state. Millions of U.S. dollars.";

  return (
    <aside
      aria-labelledby="state-details-heading"
      className="flex flex-col gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight" id="state-details-heading">
          State details
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{contextLine}</p>
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

      {dataset === "exports" ? (
        <div>
          <p className="text-xs font-medium text-foreground" id="map-export-metric-label">
            Map shading (choropleth)
          </p>
          <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">
            Choose which export bucket drives state colors. Uses each state’s latest loaded
            row in this dataset for that comparison.
          </p>
          <div
            aria-labelledby="map-export-metric-label"
            className="mt-1.5 flex flex-wrap gap-1.5"
            role="radiogroup"
          >
            {EXPORT_METRIC_OPTIONS.map((key) => (
              <button
                key={key}
                aria-checked={exportMetric === key}
                className={cn(
                  "rounded-md border px-2 py-1 text-[0.65rem] font-medium sm:text-xs",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  exportMetric === key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:bg-muted/80",
                  key === "re_exports" && exportMetric !== key && "opacity-90",
                )}
                role="radio"
                type="button"
                onClick={() => onExportMetricChange(key)}
              >
                {EXPORT_PROFILE_METRIC_LABELS[key]}
              </button>
            ))}
          </div>
          {exportMetric === "non_manufactured_exports" ? (
            <p
              aria-live="polite"
              className="mt-2 border-l-2 border-primary/30 pl-2 text-[0.7rem] leading-snug text-muted-foreground"
            >
              {NON_MANUFACTURED_EXPORTS_SCOPED_NOTE}
            </p>
          ) : null}
        </div>
      ) : null}

      {!selected ? (
        <p className="text-sm text-muted-foreground">
          Pick a state to see metrics for the selected data source.
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
          ) : dataset === "labor" ? (
            laborRows.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No labor figures for this state yet.
              </p>
            ) : (
              <ul className="max-h-64 space-y-2 overflow-y-auto text-sm sm:max-h-48">
                {laborRows.map((row) => (
                  <li className="rounded-md border border-border/80 bg-muted/20 px-3 py-2" key={row.id}>
                    <div className="font-medium tabular-nums">{row.year}</div>
                    <div className="text-xs text-muted-foreground">
                      Unemployment{" "}
                      {row.unemployment_rate == null
                        ? "—"
                        : formatUnemploymentRate(Number(row.unemployment_rate))}
                    </div>
                  </li>
                ))}
              </ul>
            )
          ) : exportRows.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No export profile rows for this state yet.
            </p>
          ) : (
            <>
              <p className="text-[0.7rem] leading-snug text-muted-foreground">
                Each card is one loaded period for this state. Amounts are{" "}
                <strong className="font-medium text-foreground">millions of U.S. dollars</strong>{" "}
                (origin of movement, not proof of where goods were made).
              </p>
              <ul className="max-h-72 space-y-2 overflow-y-auto text-sm sm:max-h-56">
              {exportRows.map((row) => (
                <li className="rounded-md border border-border/80 bg-muted/20 px-3 py-2" key={row.id}>
                  <div className="font-medium tabular-nums">
                    {formatExportPeriodLabelForDisplay(row.period_label)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Mfg{" "}
                    {row.manufactured_exports == null
                      ? "—"
                      : formatExportMillionsUsdCompact(Number(row.manufactured_exports))}
                    {" · "}
                    Non-mfg{" "}
                    {row.non_manufactured_exports == null
                      ? "—"
                      : formatExportMillionsUsdCompact(Number(row.non_manufactured_exports))}
                  </div>
                  <div className="text-xs text-muted-foreground/90">
                    Re-exports{" "}
                    {row.re_exports == null
                      ? "—"
                      : formatExportMillionsUsdCompact(Number(row.re_exports))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total{" "}
                    {row.total_exports == null
                      ? "—"
                      : formatExportMillionsUsdCompact(Number(row.total_exports))}
                  </div>
                </li>
              ))}
              </ul>
            </>
          )}
        </div>
      )}
    </aside>
  );
}
