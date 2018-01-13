
import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
private companies : any[]=[];
  constructor(private x : Http) { }

  ngOnInit() {
this.x.get('https://myproject3-3a407.firebaseio.com/companies.json').subscribe(
  (res : Response)=>{
var records = res.json();
this.companies = Object.keys(records).map(function(key){
  return {key : key,data : records[key]}
})
  },
  (error)=>{
    console.log('The error is ')
    console.log(error)
  },
  ()=>{}
)


  }

}
