import { formatTradeCurrency } from "@/features/economic-data/utils/format-trade-currency";
import type { TotalTradeByStateBarDatum } from "@/features/economic-data/utils/total-trade-by-state-chart-data";

type Props = {
  data: readonly TotalTradeByStateBarDatum[];
  labelledBy: string;
  describedBy: string;
};

/**
 * Screen-reader-first replica of the bar chart: same ordering and values as Nivo input.
 * The chart SVG is aria-hidden; this table is the canonical accessible representation.
 */
export function StateTradeTotalByStateA11yTable({
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
        Total trade value by state, in US dollars, summed across all years in the
        dataset. Rows are sorted highest to lowest, matching the bar chart.
      </caption>
      <thead>
        <tr>
          <th scope="col">State</th>
          <th scope="col">State code</th>
          <th scope="col">Total trade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.stateCode}>
            <td>{row.stateName}</td>
            <td>{row.stateCode}</td>
            <td>{formatTradeCurrency(row.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
