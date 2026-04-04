import type { StateLaborMetricsFilter } from "@/features/economic-data/queries/state-labor-metrics";
import type { StateTradeMetricsFilter } from "@/features/economic-data/queries/state-trade-metrics";

export const economicDataQueryKeys = {
  stateTradeMetrics: {
    root: ["state-trade-metrics"] as const,
    list: (filter?: StateTradeMetricsFilter) =>
      [
        ...economicDataQueryKeys.stateTradeMetrics.root,
        "list",
        filter?.year ?? null,
        filter?.stateCode ?? null,
      ] as const,
  },
  stateLaborMetrics: {
    root: ["state-labor-metrics"] as const,
    list: (filter?: StateLaborMetricsFilter) =>
      [
        ...economicDataQueryKeys.stateLaborMetrics.root,
        "list",
        filter?.year ?? null,
        filter?.stateCode ?? null,
      ] as const,
  },
  geo: {
    usStates: ["geo", "us-states"] as const,
  },
};
