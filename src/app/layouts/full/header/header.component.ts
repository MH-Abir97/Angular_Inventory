import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

 /**
  *
  */
 constructor(private router:Router,private jwtHelper:JwtHelperService) {
  

 }
  // SignOut(){
  //   debugger;
  //    //this.router.navigate(["/"]);
  //    localStorage.removeItem("jwt");
  // }

  public logOut = () => {
    
    this.router.navigate(["/"]);
    localStorage.removeItem("jwt");
  }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

 
}
