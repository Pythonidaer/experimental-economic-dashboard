import type { StateExportProfilesFilter } from "@/features/economic-data/queries/state-export-profiles";
import type { StateIndustryDetailsFilter } from "@/features/economic-data/queries/state-industry-details";
import type { StateIndustriesFilter } from "@/features/economic-data/queries/state-industries";
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
  stateExportProfiles: {
    root: ["state-export-profiles"] as const,
    list: (filter?: StateExportProfilesFilter) =>
      [
        ...economicDataQueryKeys.stateExportProfiles.root,
        "list",
        filter?.year ?? null,
        filter?.stateCode ?? null,
        filter?.periodLabel ?? null,
      ] as const,
  },
  stateIndustries: {
    root: ["state-industries"] as const,
    list: (filter?: StateIndustriesFilter) =>
      [
        ...economicDataQueryKeys.stateIndustries.root,
        "list",
        filter?.year ?? null,
      ] as const,
  },
  stateIndustryDetails: {
    root: ["state-industry-details"] as const,
    list: (filter?: StateIndustryDetailsFilter) =>
      [
        ...economicDataQueryKeys.stateIndustryDetails.root,
        "list",
        filter?.year ?? null,
        filter?.region ?? null,
        filter?.naicsLevel ?? null,
      ] as const,
  },
  geo: {
    usStates: ["geo", "us-states"] as const,
  },
};
