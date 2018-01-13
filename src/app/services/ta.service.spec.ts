/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaService } from './ta.service';

describe('TaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaService]
    });
  });

  it('should ...', inject([TaService], (service: TaService) => {
    expect(service).toBeTruthy();
  }));
});
