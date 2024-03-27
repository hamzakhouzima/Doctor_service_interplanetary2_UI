import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
  private patientDataSource = new BehaviorSubject<any>(null);
  currentPatientData = this.patientDataSource.asObservable();

  constructor() { }

  updatePatientData(data: any) {
    this.patientDataSource.next(data);
  }
}
