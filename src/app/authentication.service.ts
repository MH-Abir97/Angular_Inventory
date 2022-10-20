import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL="https://localhost:44384/api";
  constructor(private _httpClient:HttpClient) { 

  }



  UserSignIn(params: any): Observable<any> {
    debugger;
    const body = JSON.stringify(params);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._httpClient.post(this.API_URL +'/Authentication/Login/', body, httpOptions);
    
  }

  GetReportData():Observable<any>{
    debugger;
    return this._httpClient.get(this.API_URL+'/Token/Get');
    
    
  }


}
