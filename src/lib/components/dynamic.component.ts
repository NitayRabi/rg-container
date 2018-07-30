import { Component, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { HostDirective } from '../directives/host.directive';


@Component({
  selector: 'rg-dynamic',
  templateUrl: 'dynamic.component.html',
  styles: []
})
export class DynamicComponent {

  @Input() set component(component: any) {
    this.initComponent(component);
  }

  @ViewChild(HostDirective) host: HostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  initComponent(component: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(factory);
  }
}
