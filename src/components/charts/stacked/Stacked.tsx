import {
  Category,
  ChartComponent,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../../hooks/useStateContext";
import { stackedPrimaryXAxis } from "../../../lib/data/barChart";

import {
  stackedCustomSeries,
  stackedPrimaryYAxis,
} from "../../../lib/data/dummy";

type Props = {
  width?: string;
  height?: string;
};

const Stacked = ({ width, height }: Props): JSX.Element => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="charts"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries?.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
