"use client";

/**
 * Use the **CSP** MapLibre build: the default `maplibre-gl` bundle injects an inline
 * Blob worker by stringifying Rollup `define()` factories, which Turbopack breaks,
 * causing `sendAsync` / `projection` worker RPC errors. The CSP entry expects an
 * explicit worker URL instead (see MapLibre CSP docs).
 *
 * @see https://maplibre.org/maplibre-gl-js/docs/examples/csp-header/
 */
import * as maplibregl from "maplibre-gl/dist/maplibre-gl-csp.js";

let workerUrlConfigured = false;

export function ensureMaplibreWorkerUrl() {
  if (workerUrlConfigured || typeof window === "undefined") {
    return;
  }
  // Query string forces reload if an old tiny/wrong worker was cached (DevTools can show ~0.2 kB on bad 304s).
  maplibregl.setWorkerUrl(
    `${window.location.origin}/maplibre-gl-csp-worker.js?v=${maplibregl.getVersion()}`
  );
  workerUrlConfigured = true;
}
