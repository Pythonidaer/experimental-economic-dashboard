"use client";

import { useMemo, useState } from "react";

import {
  DashboardDatasetToggle,
  type DashboardDataset,
} from "@/components/layout/dashboard/dashboard-dataset-toggle";
import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { useStateExportProfiles } from "@/features/economic-data/hooks/use-state-export-profiles";
import { useStateLaborMetrics } from "@/features/economic-data/hooks/use-state-labor-metrics";
import { useUsStatesGeoJson } from "@/features/economic-data/hooks/use-us-states-geojson";
import {
  buildExportMetricChoroplethNormalized,
  NON_MANUFACTURED_EXPORTS_SCOPED_NOTE,
  type ExportProfileMetricKey,
} from "@/features/economic-data/utils/export-profiles-chart-data";
import type { UsStateSelection } from "@/lib/map/types";

import { StateDetailsPanel } from "./state-details-panel";
import { UsStatesMap } from "./us-states-map";

/** Scannable copy for Exports map view — complements the Notes tab. */
function ExportsMapInterpretationNote({
  shadingMetric,
}: {
  shadingMetric: ExportProfileMetricKey;
}) {
  const showNonMfgNote = shadingMetric === "non_manufactured_exports";

  return (
    <div
      className="mt-3 max-w-2xl space-y-1 rounded-md border border-border/60 bg-muted/15 px-3 py-2 text-xs leading-snug text-muted-foreground"
      id="map-exports-interpretation"
    >
      <p>
        <strong className="font-medium text-foreground">
          This map uses Census origin-of-movement export data.
        </strong>
      </p>
      <p>
        Values reflect where goods were <strong className="font-medium text-foreground">shipped from</strong>, not necessarily where
        they were produced.
      </p>
      {showNonMfgNote ? (
        <p className="border-l-2 border-primary/25 pl-2 text-foreground/90">
          <strong className="font-medium text-foreground">Non-manufactured bucket:</strong>{" "}
          {NON_MANUFACTURED_EXPORTS_SCOPED_NOTE}
        </p>
      ) : null}
    </div>
  );
}

function matchesState(
  postal: string,
  name: string,
  stateCode: string,
  stateName: string,
) {
  return (
    stateCode.toUpperCase() === postal.toUpperCase() ||
    stateName.toLowerCase() === name.toLowerCase()
  );
}

export function MapTabContent() {
  const [selected, setSelected] = useState<UsStateSelection | null>(null);
  const [dataset, setDataset] = useState<DashboardDataset>("exports");
  const [exportMetric, setExportMetric] = useState<ExportProfileMetricKey>(
    "manufactured_exports",
  );

  const {
    data: geojson,
    isPending: geoPending,
    isError: geoError,
    error: geoErr,
  } = useUsStatesGeoJson();

  const laborQuery = useStateLaborMetrics(undefined, {
    enabled: dataset === "labor",
  });
  const exportQuery = useStateExportProfiles(undefined, {
    enabled: dataset === "exports",
  });

  const activeMetrics = useMemo(() => {
    if (dataset === "labor") return laborQuery;
    return exportQuery;
  }, [dataset, laborQuery, exportQuery]);

  const laborMetrics = laborQuery.data ?? [];
  const exportMetrics = exportQuery.data ?? [];

  const laborForSelection = useMemo(() => {
    if (!selected) return [];
    return laborMetrics.filter((r) =>
      matchesState(selected.postalCode, selected.name, r.state_code, r.state_name),
    );
  }, [laborMetrics, selected]);

  const exportForSelection = useMemo(() => {
    if (!selected) return [];
    return exportMetrics.filter((r) =>
      matchesState(selected.postalCode, selected.name, r.state_code, r.state_name),
    );
  }, [exportMetrics, selected]);

  const choroplethByPostal = useMemo(() => {
    if (dataset !== "exports" || exportMetrics.length === 0) return null;
    const norm = buildExportMetricChoroplethNormalized(exportMetrics, exportMetric);
    return Object.keys(norm).length > 0 ? norm : null;
  }, [dataset, exportMetrics, exportMetric]);

  const onSelectByPostal = (postal: string, name: string) => {
    setSelected({ name, postalCode: postal });
  };

  const metricsError =
    activeMetrics.error instanceof Error ? activeMetrics.error : null;

  const intro =
    dataset === "labor"
      ? "Click a state or choose from the menu. Unemployment details match the Labor table. Switch to Exports for map shading by export bucket."
      : "Shading compares states using the latest loaded period per state for the bucket you select — see the callout below.";

  return (
    <section
      aria-labelledby="map-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="map-heading">
        Map
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{intro}</p>

      <DashboardDatasetToggle
        className="mt-3"
        idPrefix="map"
        value={dataset}
        onChange={setDataset}
      />

      {dataset === "exports" ? (
        <ExportsMapInterpretationNote shadingMetric={exportMetric} />
      ) : null}

      {geoPending ? (
        <div className="mt-4">
          <ViewLoading message="Loading state boundaries…" />
        </div>
      ) : geoError ? (
        <div className="mt-4">
          <ViewError
            description={geoErr instanceof Error ? geoErr.message : undefined}
            title="Could not load map data"
          />
        </div>
      ) : geojson ? (
        <div className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-[1fr_min(100%,18rem)] md:items-start lg:grid-cols-[1fr_min(100%,20rem)]">
          <UsStatesMap
            choroplethByPostal={choroplethByPostal}
            geojson={geojson}
            selectedPostal={selected?.postalCode ?? null}
            onSelectState={setSelected}
          />
          <StateDetailsPanel
            dataset={dataset}
            exportMetric={exportMetric}
            exportRows={exportForSelection}
            features={geojson.features}
            laborRows={laborForSelection}
            metricsError={metricsError}
            metricsLoading={activeMetrics.isPending}
            selected={selected}
            onExportMetricChange={setExportMetric}
            onSelectByPostal={onSelectByPostal}
          />
        </div>
      ) : null}
    </section>
  );
}
