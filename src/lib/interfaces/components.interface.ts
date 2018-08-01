export interface IRgWidgetParams<T> {
  context: T;
}

export interface IRgWidgetComponent {
  rgInit: <T>(param: IRgWidgetParams<T>) => void;
}
