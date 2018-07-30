import { Component, Input } from '@angular/core';
import { IRgContainerOptions, IWidget } from './interfaces';
import { IPrivateWidget, IRgContainerPrivateOptions } from './interfaces/options-private.interface';
import { RgContainerService } from './rg-container.service';

@Component({
  selector: 'rg-container',
  templateUrl: 'rg-container.component.html',
  styles: []
})
export class RgContainerComponent {

  _options: IRgContainerPrivateOptions;

  @Input()
  set options(options: IRgContainerOptions) {
    if (!options) {
      return;
    }
    this._options = {
      ...options,
      widgets: this.gatherMetaData(options.widgets)
    };
    this.loadComponents();
  }

  constructor(private service: RgContainerService) { }

  private gatherMetaData(widgets: IWidget[]): IPrivateWidget[] {
    return widgets.map(widget => {
      const privateWidget: IPrivateWidget = {
        ...widget,
        compMetaData: this.service.getAnnotations(widget.component)
      };
      return privateWidget;
    });
  }

  loadComponents() {

  }

}
