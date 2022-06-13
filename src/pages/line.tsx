import { Header, Line as LineChart } from "../components";

const Line = () => {
  return (
    <div className="h-screen p-10 m-4 mt-24 bg-white md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Infaltion Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
