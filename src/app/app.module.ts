import { EmployeeService } from 'app/services/employee.service';

import { DaService } from './services/da.service';
import { SalaryService } from './services/salary.service';
import { PerimeterService } from './services/perimeter.service';
import { TriService } from './services/tri.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CalculatorService} from './services/calculator.service';
import { TriangleService } from 'app/services/triangle.service';
import { PerimeterComponent } from './services/perimeter/perimeter.component';
import { LtaService } from 'app/services/lta.service';
import { HraService } from 'app/services/hra.service';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyService } from 'app/services/company.service';
import { EmployeesComponent } from './employees/employees.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { IndiaComponent } from './india/india.component';
import { PakistanComponent } from './india/pakistan/pakistan.component';
import { CompanyComponent } from './companies/company/company.component';
import { ExcompaniesComponent } from './excompanies/excompanies.component';
import { FilterComponent } from './excompanies/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    PerimeterComponent,
    CompaniesComponent,
    EmployeesComponent,
    ParentComponent,
    ChildComponent,
    IndiaComponent,
    PakistanComponent,
    CompanyComponent,
    ExcompaniesComponent,
    FilterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalculatorService,TriangleService,TriService,PerimeterService,SalaryService,DaService, LtaService, HraService,CompanyService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
