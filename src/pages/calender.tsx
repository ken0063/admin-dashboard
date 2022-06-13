import {
  Agenda,
  Day,
  DragAndDrop,
  Inject,
  Month,
  Resize,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import { Header } from "../components";
import { scheduleData } from "../lib/data/dummy";

const Calender = () => {
  return (
    <div className="h-screen p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="App" title="Calender" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
