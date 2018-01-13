import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/services/employee.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private employee : any = {};
  private employees : any[] = [];
    constructor(private emp : EmployeeService) { }

    ngOnInit() {
      this.emp.list().subscribe(
        (res : Response)=>{
        let records = res.json();
        console.log(records)

  this.employees = Object.keys(records).map(function(key){
  return {key : key,data : records[key]};
  })

        },
        (error)=>{
          console.log('Error is ')
          console.log(error)
        }
        )
    }
    saveEmployee(){
  this.emp.save(this.employee).subscribe(
  (res : Response)=>{
  console.log('Data gets saved')
  console.log(res)
  },
  ()=>{}
  )
    }


  }
