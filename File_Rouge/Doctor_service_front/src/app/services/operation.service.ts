import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {KeycloakService} from "keycloak-angular";
@Injectable({
  providedIn: 'root'
})


export class OperationService {


  constructor(private readonly http: HttpClient, private readonly keycloakService: KeycloakService) {}


//here we define the methods needed to operate on the interplanetary2 service




  saveData(data: any): Observable<any> {
console.log('service post request method running .....')
    return this.http.post<any>('http://localhost:8000/api/interplanetary2/AddPatient', data);
  }
  // onSubmit() {
  //   OperationService.addPatient();
  // }

  getData() {
    // Get access token from Keycloak service
    const token = this.keycloakService.getToken();
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get('http://localhost:8000/api/interplanetary2/GetPatient/QmT7D2mwY21r4cTotPqqN9tsnq5ijirG5KPCGgJ9DSAfuP', { headers });
  }


}




