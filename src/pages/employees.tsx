import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../lib/data/dummy";

const Employees = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid?.map((item, idx) => (
            <ColumnDirective key={idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
