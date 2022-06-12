import { LabelIntersectAction, ValueType } from "@syncfusion/ej2-react-charts";

export interface IStackedPrimaryXAxis {
  majorGridLines: {
    width: number;
  };
  minorGridLines: {
    width: number;
  };
  majorTickLines: {
    width: number;
  };
  minorTickLines: {
    width: number;
  };
  interval: number;
  lineStyle: {
    width: number;
  };
  labelIntersectAction: LabelIntersectAction | undefined;
  valueType: ValueType | undefined;
}
