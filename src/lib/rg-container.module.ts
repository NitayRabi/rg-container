import { NgModule } from '@angular/core';
import { RgContainerComponent } from './rg-container.component';
import { CommonModule } from '@angular/common';
import { HostDirective } from './directives/host.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RgContainerComponent, HostDirective],
  exports: [RgContainerComponent]
})
export class RgContainerModule { }
