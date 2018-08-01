import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { HostDirective } from '../directives/host.directive';
import { IWidget, IRgWidgetComponent, IRgWidgetParams } from '../interfaces';

@Component({
  selector: 'rg-dynamic',
  templateUrl: 'dynamic.component.html',
  styles: []
})
export class DynamicComponent {

  private _widget: IWidget;
  @Input() set widget(widget: IWidget) {
    this._widget = widget;
    if (widget) {
      this.initComponent();
    }
  }

  get widget(): IWidget {
    return this._widget;
  }

  private _params: IRgWidgetParams<any>;
  @Input() set params (params: IRgWidgetParams<any>) {
    this._params = params;
    if (params) {
      this.initComponent();
    }
  };

  get params(): IRgWidgetParams<any> {
    return this._params;
  }

  @ViewChild(HostDirective) host: HostDirective;

  get viewContainerRef(): ViewContainerRef {
    return this.host.viewContainerRef;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  private initComponent() {
    this.viewContainerRef.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.widget.component);
    const componentRef = this.viewContainerRef.createComponent(factory);
    // Merge all inputs
    if (this.widget.inputs) {
      Object.keys(this.widget.inputs).forEach(key => {
        componentRef.instance[key] = this.widget.inputs[key];
      });
    }
    if ((<IRgWidgetComponent>componentRef.instance).rgInit && this.params) {
      (<IRgWidgetComponent>componentRef.instance).rgInit(this.params);
    }
  }

}
