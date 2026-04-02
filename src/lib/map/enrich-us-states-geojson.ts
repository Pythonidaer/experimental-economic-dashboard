import type { Feature, FeatureCollection } from "geojson";

import { US_STATE_NAME_TO_POSTAL } from "./us-state-name-to-postal";

function enrichFeature(feature: Feature): Feature {
  const name = String((feature.properties as Record<string, unknown>)?.name ?? "");
  const postal = US_STATE_NAME_TO_POSTAL[name];
  const id = postal ?? name.replace(/\s+/g, "-").toLowerCase();

  return {
    ...feature,
    id,
    properties: {
      ...(feature.properties as Record<string, unknown>),
      postal: postal ?? id,
    },
  };
}

export function enrichUsStatesGeoJson(data: FeatureCollection): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: data.features.map(enrichFeature),
  };
}

/** Drop `undefined` and non-JSON values so worker serialization cannot choke. */
export function sanitizeFeatureCollectionForMap(data: FeatureCollection): FeatureCollection {
  return JSON.parse(JSON.stringify(data)) as FeatureCollection;
}
