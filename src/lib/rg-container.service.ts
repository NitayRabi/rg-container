import { Injectable } from '@angular/core';

declare var Reflect;

@Injectable({
  providedIn: 'root'
})
export class RgContainerService {

  getAnnotations(comp: Object) {
    return Reflect.getMetadata('annotations', comp) || comp['__annotations__'][0];
  }

}
