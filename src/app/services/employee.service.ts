import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
@Injectable()
export class EmployeeService {

  constructor(private  y: Http) { }

  save(employee : any){
    return this.y.post('https://employees-d645a.firebaseio.com/employees.json',employee);
      }

      list(){
        return this.y.get('https://employees-d645a.firebaseio.com/employees.json');
          }

          delete(employee : any){
            return this.y.post('https://employees-d645a.firebaseio.com/employees.json',employee);
              }
}
