"use client";

import type { FeatureCollection } from "geojson";
import { useQuery } from "@tanstack/react-query";

import { economicDataQueryKeys } from "@/features/economic-data/utils/query-keys";
import {
  enrichUsStatesGeoJson,
  sanitizeFeatureCollectionForMap,
} from "@/lib/map/enrich-us-states-geojson";

async function fetchUsStatesGeoJson(): Promise<FeatureCollection> {
  const res = await fetch("/geo/us-states.json");
  if (!res.ok) {
    throw new Error("Could not load US states boundaries.");
  }
  const raw = (await res.json()) as unknown;
  if (
    !raw ||
    typeof raw !== "object" ||
    (raw as FeatureCollection).type !== "FeatureCollection" ||
    !Array.isArray((raw as FeatureCollection).features)
  ) {
    throw new Error("Invalid US states GeoJSON (expected FeatureCollection).");
  }
  const enriched = enrichUsStatesGeoJson(raw as FeatureCollection);
  return sanitizeFeatureCollectionForMap(enriched);
}

export function useUsStatesGeoJson() {
  return useQuery({
    queryKey: economicDataQueryKeys.geo.usStates,
    queryFn: fetchUsStatesGeoJson,
    staleTime: 24 * 60 * 60 * 1000,
  });
}
