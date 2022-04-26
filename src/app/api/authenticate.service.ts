import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  verifyUserCredentials(email, uPassword) {
    console.log('Email ' + email);
   // return this.http.get<any>(`${environment.apiUrl}/api/test`);
   
    return this.http.post<any>(`${environment.apiUrl}/api/login`, { 
                              'loginID': email, 
                              'uPassword': uPassword,
                              'apiKey' : environment.apiKey,
                              'appID' : environment.appId
                            });
  }

}
