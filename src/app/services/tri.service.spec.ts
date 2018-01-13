/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TriService } from './tri.service';

describe('TriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriService]
    });
  });

  it('should ...', inject([TriService], (service: TriService) => {
    expect(service).toBeTruthy();
  }));
});
