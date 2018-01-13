/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LtaService } from './lta.service';

describe('LtaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LtaService]
    });
  });

  it('should ...', inject([LtaService], (service: LtaService) => {
    expect(service).toBeTruthy();
  }));
});
