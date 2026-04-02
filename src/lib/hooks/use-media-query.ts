import { useSyncExternalStore } from "react";

/**
 * Subscribes to `window.matchMedia`. Server snapshot is `false` so SSR output is stable;
 * after hydration, the client snapshot updates to match the real viewport.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
