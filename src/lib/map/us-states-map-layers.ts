import type { FeatureCollection } from "geojson";
import type { Map as MapLibreMap } from "maplibre-gl";

export const US_STATES_SOURCE = "us-states";
export const US_STATES_FILL_LAYER = "us-states-fill";

/** Selection highlight only (default). */
export const US_STATES_FILL_COLOR_SELECTION: unknown[] = [
  "case",
  ["boolean", ["feature-state", "selected"], false],
  "#2563eb",
  "rgba(148, 163, 184, 0.45)",
];

/** Grayscale ramp by normalized `feature-state.t` when `feature-state.chroma` is true. */
export const US_STATES_FILL_COLOR_CHOROPLETH: unknown[] = [
  "case",
  ["boolean", ["feature-state", "selected"], false],
  "#2563eb",
  ["boolean", ["feature-state", "chroma"], false],
  ["interpolate", ["linear"], ["feature-state", "t"], 0, "#e2e8f0", 1, "#1e293b"],
  "rgba(148, 163, 184, 0.45)",
];

type OnLayersReady = (map: MapLibreMap) => void;

/**
 * Adds the US-states GeoJSON source + fill layer exactly once.
 * Does not call `setData` (avoids churn and duplicate worker messages).
 */
export function addUsStatesGeoJsonLayersOnce(
  map: MapLibreMap,
  geojson: FeatureCollection,
  options?: { onLayersReady?: OnLayersReady }
) {
  if (map.getSource(US_STATES_SOURCE)) return;

  map.addSource(US_STATES_SOURCE, {
    type: "geojson",
    data: geojson,
    promoteId: "postal",
  });

  map.addLayer({
    id: US_STATES_FILL_LAYER,
    type: "fill",
    source: US_STATES_SOURCE,
    paint: {
      "fill-color": US_STATES_FILL_COLOR_SELECTION as never,
      "fill-outline-color": "#334155",
    },
  });

  options?.onLayersReady?.(map);
}

export function syncUsStatesHighlight(
  map: MapLibreMap,
  postalCodes: string[],
  selectedPostal: string | null
) {
  for (const code of postalCodes) {
    map.setFeatureState(
      { source: US_STATES_SOURCE, id: code },
      { selected: Boolean(selectedPostal && selectedPostal === code) }
    );
  }
}

export function bindUsStatesClick(
  map: MapLibreMap,
  handler: (name: string, postal: string) => void
) {
  map.on("click", US_STATES_FILL_LAYER, (e) => {
    const feature = e.features?.[0];
    const postal = feature?.properties?.postal as string | undefined;
    const name = feature?.properties?.name as string | undefined;
    if (postal && name) {
      handler(name, postal);
    }
  });

  map.on("mouseenter", US_STATES_FILL_LAYER, () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", US_STATES_FILL_LAYER, () => {
    map.getCanvas().style.cursor = "";
  });
}

/**
 * When `normalizedByPostal` is non-empty, paints a choropleth from 0–1 per postal;
 * otherwise restores selection-only gray/blue fills.
 */
export function syncUsStatesChoroplethFill(
  map: MapLibreMap,
  postalCodes: string[],
  selectedPostal: string | null,
  normalizedByPostal: Record<string, number> | null | undefined,
) {
  const values = normalizedByPostal ? Object.values(normalizedByPostal) : [];
  const active = values.length > 0;

  for (const code of postalCodes) {
    const selected = Boolean(selectedPostal && selectedPostal === code);
    if (!active) {
      map.setFeatureState(
        { source: US_STATES_SOURCE, id: code },
        { selected, chroma: false, t: 0 },
      );
      continue;
    }
    const raw = normalizedByPostal![code.toUpperCase()];
    const has = raw !== undefined && Number.isFinite(raw);
    map.setFeatureState(
      { source: US_STATES_SOURCE, id: code },
      { selected, chroma: has, t: has ? raw : 0 },
    );
  }

  map.setPaintProperty(
    US_STATES_FILL_LAYER,
    "fill-color",
    (active ? US_STATES_FILL_COLOR_CHOROPLETH : US_STATES_FILL_COLOR_SELECTION) as never,
  );
}
