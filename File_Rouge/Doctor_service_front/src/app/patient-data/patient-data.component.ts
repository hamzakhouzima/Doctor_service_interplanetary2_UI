import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../services/patient-data.service';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {
  patientData: any;

  constructor(private patientDataService: PatientDataService) {}

  ngOnInit(): void {
    this.patientDataService.currentPatientData.subscribe(data => {
      this.patientData =JSON.parse(data) ;
      // formalisedData = this.patientData;
      console.log("It's working biiiiiiiitch "+this.patientData);
      if (!this.patientData) {
        console.error('Patient Data is not available.');
      }
      // else{
      //
      // }
    });
  }
}
