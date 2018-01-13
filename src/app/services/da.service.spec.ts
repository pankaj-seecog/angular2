/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DaService } from './da.service';

describe('DaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaService]
    });
  });

  it('should ...', inject([DaService], (service: DaService) => {
    expect(service).toBeTruthy();
  }));
});
