import type { StyleSpecification } from "maplibre-gl";

/** Demo vector style — no API key; suitable for MVP. */
export const DEFAULT_MAP_STYLE_URL = "https://demotiles.maplibre.org/style.json";

/**
 * Fetches the remote style as an object and sets an explicit Mercator projection.
 * MapLibre v5 can throw in `migrateProjection` when loading the same URL it previously
 * saw with no `projection` during Strict Mode / HMR teardown — a plain object avoids that path.
 */
export async function loadBasemapStyle(): Promise<StyleSpecification> {
  const res = await fetch(DEFAULT_MAP_STYLE_URL);
  if (!res.ok) {
    throw new Error(`Failed to load map style: ${res.status} ${res.statusText}`);
  }
  const style = (await res.json()) as StyleSpecification;
  return {
    ...style,
    projection: { type: "mercator" },
  };
}
