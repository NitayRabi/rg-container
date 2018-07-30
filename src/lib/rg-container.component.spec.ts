import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgContainerComponent } from './rg-container.component';

describe('RgContainerComponent', () => {
  let component: RgContainerComponent;
  let fixture: ComponentFixture<RgContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
