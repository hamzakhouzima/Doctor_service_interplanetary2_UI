import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from "../services/search.service";
import {PatientDataService} from "../services/patient-data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchCID: string = '';

  emailBar : Boolean = false;
  CIDBar : Boolean = true;

  constructor(private searchService: SearchService, private router: Router, private patientDataService: PatientDataService) {}
  email: string = '';
  patientData: any;
  DataAvailability: Boolean = false;

  searchPatient() {
    if (this.searchCID) {
      this.searchService.searchPatient(this.searchCID).subscribe({
        next: (data: any) => {
          // Update patient data in the service
          this.patientDataService.updatePatientData(data.body.patientData);
          if(data.body.patientData){
            localStorage.setItem('patientData',data.body.patientData );
            // JSON.stringify(data.body.patientData)
            this.router.navigate(['/patient-data']);



          }

        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }


  searchByEmail() {
    if (this.email) {
      this.searchService.searchByEmail(this.email).subscribe({
        next: (data: any) => {
          const patientData = JSON.parse(data.patientData); // Parse patientData string
          this.patientDataService.updatePatientData(patientData);
          if (patientData) {
            localStorage.setItem('patientData', JSON.stringify(patientData));
            this.router.navigate(['/patient-data']);
            console.log(patientData);
          }
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

  showEmailBar(){
    this.emailBar = true;
    this.CIDBar = false;

    console.log(""+this.emailBar);
  }
  showCIDBar(){
    this.emailBar = false;
    this.CIDBar = true;
  }




}
