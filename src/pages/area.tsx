import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../components";
import { useStateContext } from "../hooks/useStateContext";
import { areaPrimaryXAxis } from "../lib/data/barChart";
import { areaCustomSeries, areaPrimaryYAxis } from "../lib/data/dummy";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="h-screen p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Infaltion Rate in Percentage" />
      <ChartComponent
        height="420px"
        id="area-chart"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        legendSettings={{ background: "white" }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries?.map((item, idx) => (
            <SeriesDirective key={idx} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
