import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';


const headers : HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});
@Injectable({
  providedIn: 'root'
})


export class SearchService {


  constructor(private http: HttpClient) {}

  searchPatient(searchCID: string): Observable<any> {
    if (searchCID) {
      return this.http.get<any>(`http://localhost:8000/api/interplanetary2/GetPatient/${searchCID}`);
    }
    throw new Error('CID is required');
  }

  searchByEmail(email: string): Observable<any> {
    const emailData = { email: email };

    // Send the email data as JSON in the request body
    return this.http.post(`http://localhost:8000/api/interplanetary2/patient/`, JSON.stringify(emailData), { headers });
  }


}
