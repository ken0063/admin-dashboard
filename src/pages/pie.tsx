import { Header, Pie as PieChart } from "../components";
import { pieChartData } from "../lib/data/dummy";

const Pie = () => {
  return (
    <div className="h-screen p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;
