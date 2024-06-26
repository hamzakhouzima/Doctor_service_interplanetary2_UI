import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../services/patient-data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {
  patientData: any;

  constructor(private patientDataService: PatientDataService , private router: Router) {}

  // ngOnInit(): void {
  //   this.patientDataService.currentPatientData.subscribe(data => {
  //     this.patientData =JSON.parse(data) ;
  //     // formalisedData = this.patientData;
  //     console.log("It's working biiiiiiiitch "+this.patientData);
  //     if (!this.patientData) {
  //       console.error('Patient Data is not available.');
  //     }
  //     // else{
  //     //
  //     // }
  //   });
  // }
  ngOnInit(): void {
    // Retrieve patient data from local storage
    const storedData = localStorage.getItem('patientData');
    if (storedData) {
      this.patientData = JSON.parse(storedData);
    } else {
      console.error('Patient Data is not available in local storage.');
    }
  }

  navigateToSearch(): void {
    this.router.navigate(['/search']);

  }



}
