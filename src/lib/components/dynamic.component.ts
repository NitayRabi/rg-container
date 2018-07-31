import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { HostDirective } from '../directives/host.directive';
import { IWidget, IWidgetComponent, IRgWidgetParams } from '../interfaces';

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

  private _params: IRgWidgetParams;
  @Input() set params (params: IRgWidgetParams) {
    this._params = params;
    if (params) {
      this.initComponent();
    }
  };

  get params(): IRgWidgetParams {
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
    if ((<IWidgetComponent>componentRef.instance).rgInit && this.params) {
      (<IWidgetComponent>componentRef.instance).rgInit(this.params);
    }
  }

}
