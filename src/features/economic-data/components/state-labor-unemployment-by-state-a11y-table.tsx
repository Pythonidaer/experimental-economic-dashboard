import { formatUnemploymentRate } from "@/features/economic-data/utils/format-labor-metrics";
import type { UnemploymentByStateBarDatum } from "@/features/economic-data/utils/unemployment-by-state-chart-data";

type Props = {
  data: readonly UnemploymentByStateBarDatum[];
  labelledBy: string;
  describedBy: string;
};

export function StateLaborUnemploymentByStateA11yTable({
  data,
  labelledBy,
  describedBy,
}: Props) {
  return (
    <table
      aria-describedby={describedBy}
      aria-labelledby={labelledBy}
      className="sr-only"
    >
      <caption>
        Unemployment rate by state (2024 annual average where available). Row order
        matches the chart (including sort and filter).
      </caption>
      <thead>
        <tr>
          <th scope="col">State</th>
          <th scope="col">Unemployment rate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.stateCode}>
            <td>{row.stateName}</td>
            <td>{formatUnemploymentRate(row.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
