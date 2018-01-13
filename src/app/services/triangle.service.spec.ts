/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TriangleService } from './triangle.service';

describe('TriangleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleService]
    });
  });

  it('should ...', inject([TriangleService], (service: TriangleService) => {
    expect(service).toBeTruthy();
  }));
});
