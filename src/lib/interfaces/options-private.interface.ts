import { IRgContainerOptions, IWidget } from './options.interface';

export interface IPrivateWidget extends IWidget {
  compMetaData: any;
}

export interface IRgContainerPrivateOptions extends IRgContainerOptions {
  widgets: IPrivateWidget[];
}
