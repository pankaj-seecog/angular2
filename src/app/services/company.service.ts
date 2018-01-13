import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Injectable()
export class CompanyService {

  constructor(private x : Http) { }

  save(company : any){
return this.x.post('https://myproject3-3a407.firebaseio.com/companies.json',company);
  }

  list(){
    return this.x.get('https://myproject3-3a407.firebaseio.com/companies.json');
      }

}
