import { CanActivate, Router , ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { take, map, tap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //   if (localStorage.getItem('currentUser')) {
    //       return true;
    //   }

     // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      
      this.router.navigate(['/login']);
      return true;
  }
}