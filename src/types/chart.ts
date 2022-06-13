import {
  ChartRangePadding,
  EdgeLabelPlacement,
  IntervalType,
  LabelIntersectAction,
  ValueType,
} from "@syncfusion/ej2-react-charts";

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

export interface ILinePrimaryXAxis {
  valueType: ValueType | undefined;
  labelFormat: string;
  intervalType: IntervalType | undefined;
  edgeLabelPlacement: EdgeLabelPlacement | undefined;
  majorGridLines: {
    width: number;
  };
  background: string;
}

export interface ILinePrimaryYAxis {
  labelFormat: string;
  rangePadding: ChartRangePadding | undefined;
  minimum: number;
  maximum: number;
  interval: number;
  lineStyle: {
    width: number;
  };
  majorTickLines: {
    width: number;
  };
  minorTickLines: {
    width: number;
  };
}

export interface IAreaPrimaryXAxis {
  valueType: ValueType | undefined;
  labelFormat: string;
  majorGridLines: {
    width: number;
  };
  intervalType: IntervalType | undefined;
  edgeLabelPlacement: EdgeLabelPlacement | undefined;
  labelStyle: {
    color: string;
  };
}

export interface IBarPrimaryXAxis {
  valueType: ValueType | undefined;
  interval: number;
  majorGridLines: {
    width: number;
  };
}

export interface IFinancialPrimaryXAxis {
  valueType: ValueType | undefined;
  minimum: Date;
  maximum: Date;
  crosshairTooltip: {
    enable: boolean;
  };
  majorGridLines: {
    width: number;
  };
}

export interface IColorMappingPrimaryXAxis {
  valueType: ValueType | undefined;
  majorGridLines: {
    width: number;
  };
  title: string;
}
