import { TaService } from './ta.service';
import { LtaService } from './lta.service';
import { DaService } from './da.service';
import { HraService } from './hra.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SalaryService {

  constructor(private x: HraService, private y : DaService, private z :LtaService, private k :TaService) { }

  sal(bs){

    return bs;
      }
}
