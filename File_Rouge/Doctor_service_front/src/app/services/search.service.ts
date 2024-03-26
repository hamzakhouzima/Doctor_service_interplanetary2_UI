import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

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
}
