"use client";

import "maplibre-gl/dist/maplibre-gl.css";

import type { FeatureCollection } from "geojson";
import type { Map as MapLibreMap } from "maplibre-gl";
import * as maplibregl from "maplibre-gl/dist/maplibre-gl-csp.js";
import { useEffect, useRef, useState } from "react";

import { ensureMaplibreWorkerUrl } from "@/lib/map/ensure-maplibre-worker";
import { loadBasemapStyle } from "@/lib/map/map-style";
import type { UsStateSelection } from "@/lib/map/types";
import {
  addUsStatesGeoJsonLayersOnce,
  bindUsStatesClick,
  syncUsStatesChoroplethFill,
  US_STATES_SOURCE,
} from "@/lib/map/us-states-map-layers";

type UsStatesMapProps = {
  geojson: FeatureCollection;
  selectedPostal: string | null;
  onSelectState: (selection: UsStateSelection) => void;
  /** Normalized 0–1 by postal (any case); when empty, fills are selection-only gray/blue. */
  choroplethByPostal?: Record<string, number> | null;
};

export function UsStatesMap({
  geojson,
  selectedPostal,
  onSelectState,
  choroplethByPostal = null,
}: UsStatesMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  /**
   * Increments when this effect cleans up (incl. Strict Mode). The `load` handler must
   * match the value captured at schedule time, or it is stale after `remove()`.
   */
  const lifecycleGenRef = useRef(0);
  const onSelectRef = useRef(onSelectState);
  const geojsonRef = useRef(geojson);
  const selectedPostalRef = useRef(selectedPostal);
  const choroplethRef = useRef(choroplethByPostal);
  const [mapLayersReady, setMapLayersReady] = useState(false);

  useEffect(() => {
    onSelectRef.current = onSelectState;
  }, [onSelectState]);

  useEffect(() => {
    geojsonRef.current = geojson;
  }, [geojson]);

  useEffect(() => {
    selectedPostalRef.current = selectedPostal;
  }, [selectedPostal]);

  useEffect(() => {
    choroplethRef.current = choroplethByPostal;
  }, [choroplethByPostal]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const generation = ++lifecycleGenRef.current;
    let cancelled = false;
    let mapInstance: MapLibreMap | null = null;

    const start = async () => {
      try {
        ensureMaplibreWorkerUrl();
        const style = await loadBasemapStyle();
        if (cancelled || generation !== lifecycleGenRef.current) return;

        const map = new maplibregl.Map({
          container,
          style,
          center: [-98, 39.5],
          zoom: 3.2,
        });
        mapInstance = map;
        mapRef.current = map;

        map.once("load", () => {
          if (generation !== lifecycleGenRef.current) return;

          const data = geojsonRef.current;

          addUsStatesGeoJsonLayersOnce(map, data, {
            onLayersReady: (m) => {
              bindUsStatesClick(m, (name, postal) => {
                onSelectRef.current?.({ name, postalCode: postal });
              });
            },
          });

          map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

          const postals = data.features.map((f) =>
            String((f.properties as Record<string, unknown>)?.postal ?? "")
          );
          syncUsStatesChoroplethFill(
            map,
            postals,
            selectedPostalRef.current,
            choroplethRef.current && Object.keys(choroplethRef.current).length > 0
              ? choroplethRef.current
              : null,
          );

          if (generation !== lifecycleGenRef.current) return;
          setMapLayersReady(true);
        });
      } catch {
        /* network/style fetch or Map constructor failed */
      }
    };

    void start();

    return () => {
      cancelled = true;
      lifecycleGenRef.current += 1;
      setMapLayersReady(false);
      mapRef.current = null;
      mapInstance?.remove();
      mapInstance = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!mapLayersReady || !map?.getSource(US_STATES_SOURCE) || !map.isStyleLoaded()) {
      return;
    }

    const postals = geojson.features.map((f) =>
      String((f.properties as Record<string, unknown>)?.postal ?? "")
    );
    const chroma =
      choroplethByPostal && Object.keys(choroplethByPostal).length > 0
        ? choroplethByPostal
        : null;
    syncUsStatesChoroplethFill(map, postals, selectedPostal, chroma);
  }, [geojson, mapLayersReady, selectedPostal, choroplethByPostal]);

  return (
    <div
      aria-describedby="map-instructions"
      aria-label="Interactive map of United States. Choose a state to view details in the panel below or beside the map."
      className="relative h-[min(20rem,42dvh)] w-full min-h-[16rem] overflow-hidden rounded-md border bg-muted/20 sm:h-[min(24rem,48dvh)] sm:min-h-[18rem] lg:h-[min(28rem,55vh)] lg:min-h-0"
      ref={containerRef}
      role="region"
    >
      <span className="sr-only" id="map-instructions">
        Pointing device users can click a state. Keyboard and screen reader users should
        use the state menu in the details panel.
      </span>
    </div>
  );
}
