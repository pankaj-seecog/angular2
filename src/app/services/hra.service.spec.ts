/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HraService } from './hra.service';

describe('HraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HraService]
    });
  });

  it('should ...', inject([HraService], (service: HraService) => {
    expect(service).toBeTruthy();
  }));
});
