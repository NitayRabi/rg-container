import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rgHost]'
})
export class HostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
