/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerimeterService } from './perimeter.service';

describe('PerimeterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerimeterService]
    });
  });

  it('should ...', inject([PerimeterService], (service: PerimeterService) => {
    expect(service).toBeTruthy();
  }));
});
