import { TriService } from './services/tri.service';
import { CalculatorService } from './services/calculator.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TriangleService } from 'app/services/triangle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //constructor(private x : CalculatorService){

 // }
  constructor(private y : TriangleService,private z :  TriService) {

  }
  //ngOnInit(){
//console.log('The sum is '+this.x.add(2,5));
ngOnInit(){
  console.log('The area is '+this.z.area(12,8,10));
  }

}
