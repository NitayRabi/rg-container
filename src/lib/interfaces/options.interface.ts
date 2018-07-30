export interface IComponentBaseOptions {
  style?: any;
}

export interface IWidget extends IComponentBaseOptions {
  order?: number;
  component: any;
}

export interface IRgContainerOptions extends IComponentBaseOptions {
  widgets: IWidget[];
}
