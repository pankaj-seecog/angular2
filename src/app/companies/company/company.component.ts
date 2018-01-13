import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
@Input() info : any;
@Output() fireDetail =new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
	  console.log('The company information is ')
	  console.log(JSON.stringify(this.info))
  }
  
  viewDetails(){
	  console.log('Details are')
	  this.fireDetail.emit(this.info);
  }

}
