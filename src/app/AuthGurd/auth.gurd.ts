import { CanActivate, Router , ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { take, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private jwtHelper: JwtHelperService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       debugger;
      const token = localStorage.getItem("jwt");

      //Check if the token is expired or not and if token is expired then redirect to login page and return false
      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      this.router.navigate(["login"]);
      return false;
      // this.router.navigate(['/login']);
      // return true;
  }
}