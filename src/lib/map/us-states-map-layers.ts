import type { FeatureCollection } from "geojson";
import type { Map as MapLibreMap } from "maplibre-gl";

export const US_STATES_SOURCE = "us-states";
export const US_STATES_FILL_LAYER = "us-states-fill";

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
      "fill-color": [
        "case",
        ["boolean", ["feature-state", "selected"], false],
        "#2563eb",
        "rgba(148, 163, 184, 0.45)",
      ],
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
