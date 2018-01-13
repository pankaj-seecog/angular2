import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/services/company.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
private companies : any[]=[];
  constructor(private x : CompanyService) { }

  ngOnInit() {
    this.x.list().subscribe(
      (res : Response)=>{
let records = res.json();
this.companies = Object.keys(records).map(function(key){
return {key : key,data : records[key]}
});
      },
      ()=>{},
      ()=>{}
    )
  }

}
