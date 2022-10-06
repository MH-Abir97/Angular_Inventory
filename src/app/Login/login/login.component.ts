import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userDataList:any={};
  TempUserData:any={}
  constructor( private router: Router,private _fb:FormBuilder,private toastr: ToastrService) { 
    
   this.loginForm=_fb.group({
    UserName:'',
    Password:''
   })

  }

  ngOnInit(): void {
  }

  LoginSave(){
    debugger;
    
      var UserData:any={};
      UserData.UserName=this.loginForm.value.UserName;
      UserData.Password=this.loginForm.value.Password;
      sessionStorage.setItem('userDetails', JSON.stringify(UserData)); 
      this.userDataList= sessionStorage.getItem("userDetails");
      this.TempUserData=JSON.parse(this.userDataList)
     

     if (this.TempUserData.UserName=="Admin" && this.TempUserData.Password=="1234"){
        this.router.navigate(['/dashboard']);
        this.toastr.success("Login Successfully !!!");
      }else{
        this.toastr.error("Password error!!!");
        
      }
      
   
  }

}
