import { TestBed, inject } from '@angular/core/testing';

import { RgContainerService } from './rg-container.service';

describe('RgContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RgContainerService]
    });
  });

  it('should be created', inject([RgContainerService], (service: RgContainerService) => {
    expect(service).toBeTruthy();
  }));
});
