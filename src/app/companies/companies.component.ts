import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/services/company.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
private company : any = {};
private companies : any[] = [];
  constructor(private coms : CompanyService) { }

  ngOnInit() {
    this.coms.list().subscribe(
      (res : Response)=>{
      let records = res.json();
      console.log(records)

this.companies = Object.keys(records).map(function(key){
return {key : key,data : records[key]};
})

      },
      (error)=>{
        console.log('Error is ')
        console.log(error)
      }
      )
  }
 
  
  displayDetail(detail){
	  console.log(JSON.stringify(detail))
this.company = detail.data;
}
}