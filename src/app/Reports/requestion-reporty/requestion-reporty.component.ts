import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-requestion-reporty',
  templateUrl: './requestion-reporty.component.html',
  styleUrls: ['./requestion-reporty.component.css']
})
export class RequestionReportyComponent implements OnInit {

  constructor(  private jwtHelper : JwtHelperService,
    private _AuthService:AuthenticationService) { }

  ngOnInit(): void {
  }

PrintView(){
  window.print();
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
