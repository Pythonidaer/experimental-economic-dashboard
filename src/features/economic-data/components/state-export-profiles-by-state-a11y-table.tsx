import {
  EXPORT_PROFILE_METRIC_LABELS,
  NON_MANUFACTURED_EXPORTS_SCOPED_NOTE,
  type ExportProfileBarDatum,
  type ExportProfileMetricKey,
} from "@/features/economic-data/utils/export-profiles-chart-data";
import { formatExportMillionsUsdCompact } from "@/features/economic-data/utils/format-export-profile-value";
import { formatExportPeriodLabelForDisplay } from "@/features/economic-data/utils/format-export-period-label";

type Props = {
  data: readonly ExportProfileBarDatum[];
  metric: ExportProfileMetricKey;
  labelledBy: string;
  describedBy: string;
};

export function StateExportProfilesByStateA11yTable({
  data,
  metric,
  labelledBy,
  describedBy,
}: Props) {
  const metricLabel = EXPORT_PROFILE_METRIC_LABELS[metric];

  return (
    <div className="a11y-visually-hidden">
      <table aria-describedby={describedBy} aria-labelledby={labelledBy}>
        <caption>
          {metricLabel} by state. Latest loaded period per state. Values are millions of U.S.
          dollars; cells use compact dollar formatting. Origin-of-movement concept, not
          production-by-state. Row order matches the bar chart.
          {metric === "non_manufactured_exports"
            ? ` Non-manufactured bucket: ${NON_MANUFACTURED_EXPORTS_SCOPED_NOTE}`
            : ""}
        </caption>
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">State code</th>
            <th scope="col">Period</th>
            <th scope="col">{metricLabel}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.stateCode}>
              <td>{row.stateName}</td>
              <td>{row.stateCode}</td>
              <td>{formatExportPeriodLabelForDisplay(row.periodLabel || null)}</td>
              <td>{formatExportMillionsUsdCompact(row.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
