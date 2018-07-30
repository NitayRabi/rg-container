import { ANALYZE_FOR_ENTRY_COMPONENTS, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { RgContainerComponent } from './rg-container.component';
import { HostDirective } from './directives/host.directive';
import { DynamicComponent } from './components/dynamic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RgContainerComponent, HostDirective, DynamicComponent],
  exports: [RgContainerComponent]
})
export class RgContainerModule {
  static withComponents(components: any[]) {
    return {
      ngModule: RgContainerModule,
      providers: [{
        provide: ANALYZE_FOR_ENTRY_COMPONENTS,
        useValue: components,
        multi: true
      }]
    };
  }
}
