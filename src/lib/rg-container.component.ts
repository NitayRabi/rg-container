import { Component, Input } from '@angular/core';
import { IRgContainerOptions, IRgWidgetParams } from './interfaces';

@Component({
  selector: 'rg-container',
  templateUrl: 'rg-container.component.html',
  styles: []
})
export class RgContainerComponent {

  private _options: IRgContainerOptions;
  params: IRgWidgetParams<any>;

  @Input()
  set options(options: IRgContainerOptions) {
    this._options = options;
    this.params = {
      context: options.context
    }
  }

  get options(): IRgContainerOptions {
    return this._options;
  }

}
