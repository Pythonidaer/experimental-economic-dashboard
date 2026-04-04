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
        Unemployment rate by state using the latest year available for each state in
        the dataset. Rows are sorted highest to lowest, matching the bar chart.
      </caption>
      <thead>
        <tr>
          <th scope="col">State</th>
          <th scope="col">State code</th>
          <th scope="col">Year</th>
          <th scope="col">Unemployment rate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.stateCode}>
            <td>{row.stateName}</td>
            <td>{row.stateCode}</td>
            <td>{row.year}</td>
            <td>{formatUnemploymentRate(row.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
