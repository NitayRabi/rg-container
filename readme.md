# Rg-Container
Dynamic component rendering container - 
- Widget styling
- Data sharing using inputs/context

## Installing
`npm install rg-container`

## Importing
Import the entire module - 

**important!**
use `withComponents([])`/`entryComponents: []` method for all components rendered via *rg-container*
```typescript
// module.ts file
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RgContainerModule } from 'rg-container';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    RgContainerModule.withComponents([SampleComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

##Usage

**html**
```html
<rg-container [options]="options"></rg-container>
```

**ts** (Make sure all rendered components were stated in `RgContainerModule.withComponents([SampleComponent])`/`entryComponents:[SampleComponent]`)
```typescript
import { Component } from '@angular/core';
import { IRgContainerOptions } from 'rg-container';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: IRgContainerOptions = {
    // Passing data in context shared between components, container, and this component
    context: {
      something: {
        0: 1422
      }
    },
    // Styling of rg-container
    style: {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'flex-direction': 'column',
      background: 'green',
      width: '250px',
      height: '800px',
      overflow: 'auto'
    },
    // Array of Widgets.
    widgets: [
      {
        // Styling the widget (passes to containing div for the component)
        style: {
          padding: '15px',
          margin: '15px',
          width: '200px',
          height: '540px',
          'border-radius': '10px',
          background: 'blue',
          overflow: 'hidden'
        },
        // Rendered component
        component: SampleComponent,
        // Dictionry of inputs passed to component
        inputs: {
          data: ['string', 'another string']
        }
      }
    ]
  };

}

```

## Component Data Sharing

You can share data with the rendered component using two methods - 
- passing inputs through `IRgContainerOptions`'s `inputs` dictionary.
- using `rgInit` method which passes `context` of type `T` (passed through `IRgContainerOptions`'s context field)

```typescript
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IRgWidgetParams, IRgWidgetComponent } from 'rg-container';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, IRgWidgetComponent, OnDestroy {

  context: any;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  data: string[];

  rgInit(params: IRgWidgetParams<any>) {
    this.context = params.context;
  }

}

```
