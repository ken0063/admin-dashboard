import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../components";
import { useStateContext } from "../hooks/useStateContext";
import { barPrimaryXAxis } from "../lib/data/barChart";
import { barCustomSeries, barPrimaryYAxis } from "../lib/data/dummy";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="h-screen p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          legendSettings={{ background: "white" }}
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries?.map((item, idx) => (
              <SeriesDirective key={idx} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
