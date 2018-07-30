import { Component, Input } from '@angular/core';
import { IRgContainerOptions } from './interfaces';

@Component({
  selector: 'rg-container',
  templateUrl: 'rg-container.component.html',
  styles: []
})
export class RgContainerComponent {

  @Input()
  options: IRgContainerOptions;

}
