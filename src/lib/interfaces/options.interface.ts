export interface IComponentBaseOptions {
  style?: any;
}

export interface IWidget extends IComponentBaseOptions {
  order?: number;
  inputs?: { [inputName: string]: any };
  component: any;
}

export interface IRgContainerOptions extends IComponentBaseOptions {
  widgets: IWidget[];
  context?: any;
}
