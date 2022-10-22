import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {
  UserEntry:FormGroup;

  options= [
    {Id:1,RoleName:"SAdmin"},
    {Id:2,RoleName:"Admin"},
    {Id:3,RoleName:"User"},
  ];

  filteredOptions:any= Observable<any[]>;
  
  constructor(private _fb:FormBuilder,private _AuthenticateService:AuthenticationService,private toastr: ToastrService,) {
    this.UserEntry=_fb.group({
      Email:'',
      UserName:'',
      Password:'',
      RoleName:'',
      myControl:'',
     })
   }

  ngOnInit(): void {

    this.filteredOptions = this.UserEntry.controls['myControl'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.RoleName.toLowerCase().includes(filterValue));
  }

  PasswordHideAndShow(){
    debugger;
    console.log("Password");
  }


  SaveUser(){
   
    this.UserEntry.value.RoleName=this.UserEntry.value.myControl;
    this.UserEntry.value;
    
    this._AuthenticateService.SaveUser(this.UserEntry.value).subscribe((res)=>{
      debugger;
  
     if(res.status=="Success"){
      this.toastr.success("User Save Successfully !!!");
      this.UserEntry.reset();
      
     }else{
      this.toastr.success("Server Error !!!");
      this.UserEntry.reset();
     }
   
    //  Email:'',
    //  UserName:'',
    //  Password:'',
    //  RoleName:'',
    //  myControl:'',

    })
  }

}
