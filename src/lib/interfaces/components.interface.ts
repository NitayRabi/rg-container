export interface IRgWidgetParams {
  context: any;
}

export interface IWidgetComponent {
  rgInit: (param: IRgWidgetParams) => void;
}
