import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
export interface User {
  name: string;
}
@Component({
  selector: 'app-requestion-entry',
  templateUrl: './requestion-entry.component.html',
  styleUrls: ['./requestion-entry.component.css']
})
export class RequestionEntryComponent implements OnInit {
  myControl = new FormControl();
  states:any;
  filteredOptions:any=Observable<User[]>;;
  RequestionEntry:FormGroup;
  constructor(private _fb:FormBuilder) {
   this.RequestionEntry=_fb.group({
    EmployeeId:'0',
   })
   }

  ngOnInit(): void {
    this.loadStates();
    
  }

  loadStates() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
       Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
       Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
       Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
       North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
       South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
       Wisconsin, Wyoming';
    this.states =  allStates.split(/, +/g).map( function (state) {
       return {
          value: state.toUpperCase(),
          display: state
       };
    });
 }
}
