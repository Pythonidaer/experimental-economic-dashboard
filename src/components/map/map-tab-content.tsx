"use client";

import { useMemo, useState } from "react";

import { ViewError } from "@/components/data-view/view-error";
import { ViewLoading } from "@/components/data-view/view-loading";
import { DashboardRelatedConcepts } from "@/components/knowledge/dashboard-related-concepts";
import { useStateTradeMetrics } from "@/features/economic-data/hooks/use-state-trade-metrics";
import { useUsStatesGeoJson } from "@/features/economic-data/hooks/use-us-states-geojson";
import type { UsStateSelection } from "@/lib/map/types";

import { StateDetailsPanel } from "./state-details-panel";
import { UsStatesMap } from "./us-states-map";

export function MapTabContent() {
  const [selected, setSelected] = useState<UsStateSelection | null>(null);
  const {
    data: geojson,
    isPending: geoPending,
    isError: geoError,
    error: geoErr,
  } = useUsStatesGeoJson();
  const {
    data: metrics = [],
    isPending: metricsPending,
    error: metricsErr,
  } = useStateTradeMetrics();

  const metricsForSelection = useMemo(() => {
    if (!selected) {
      return [];
    }
    return metrics.filter(
      (r) =>
        r.state_code.toUpperCase() === selected.postalCode.toUpperCase() ||
        r.state_name.toLowerCase() === selected.name.toLowerCase()
    );
  }, [metrics, selected]);

  const onSelectByPostal = (postal: string, name: string) => {
    setSelected({ name, postalCode: postal });
  };

  return (
    <section
      aria-labelledby="map-heading"
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight" id="map-heading">
        Map
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Click a state on the map or use the <strong className="font-medium text-foreground">State</strong>{" "}
        menu in the details panel. The same metrics appear in the Table tab.
      </p>
      <DashboardRelatedConcepts tab="map" />

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
            geojson={geojson}
            onSelectState={setSelected}
            selectedPostal={selected?.postalCode ?? null}
          />
          <StateDetailsPanel
            features={geojson.features}
            metrics={metricsForSelection}
            metricsError={metricsErr instanceof Error ? metricsErr : null}
            metricsLoading={metricsPending}
            onSelectByPostal={onSelectByPostal}
            selected={selected}
          />
        </div>
      ) : null}
    </section>
  );
}
