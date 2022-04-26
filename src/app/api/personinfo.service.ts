import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersoninfoService {

  individualData:any;

  constructor(private http: HttpClient) { }

  addperson(postdata) {
   // console.log(postdata.individual_name);
    return this.http.post<any>(`${environment.apiUrl}/api/addperson`, postdata );
  }

  updateperson(postdata) {
    // console.log(postdata.individual_name);
     return this.http.post<any>(`${environment.apiUrl}/api/updateperson`, postdata );
   }

  getall() {
    // console.log(postdata.individual_name);
     return this.http.get<any>(`${environment.apiUrl}/api/listall` );
   }

   getIndividualData(id, jwt) {
     console.log('jwt ' + jwt);
     return this.http.post<any>(`${environment.apiUrl}/api/getIndividualData`, { 
                                  'id' : id,
                                  'jwt' : jwt, 
                                  'apiKey' : environment.apiKey,
                                  'appID' : environment.appId
                                 } 
                                );
   }

   deleteIndividualData(id, jwt) {
    console.log('jwt ' + jwt);
    return this.http.post<any>(`${environment.apiUrl}/api/deleteIndividualData`, { 
                                  'id' : id,
                                  'jwt' : jwt, 
                                  'apiKey' : environment.apiKey,
                                  'appID' : environment.appId
                                } 
                               );
  }

   setPersonalData( data:any) {
     this.individualData = data;
   }

   getPersonalData( ) {
    return this.individualData ;
   }


}
