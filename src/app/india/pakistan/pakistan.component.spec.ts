/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PakistanComponent } from './pakistan.component';

describe('PakistanComponent', () => {
  let component: PakistanComponent;
  let fixture: ComponentFixture<PakistanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakistanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
