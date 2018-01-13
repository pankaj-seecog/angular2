import {Injectable} from '@angular/core';
import { PerimeterService } from 'app/services/perimeter.service';
@Injectable()
export class TriService {

  constructor(private x : PerimeterService){

  }

  area(a,b,c){
var s = this.x.semiperi(a,b,c);;
return Math.sqrt(s*(s-a)*(s-b)*(s-c));
  }
}
