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

  // constructor(private searchService: SearchService, private router: Router) {}
  //
  // searchPatient() {
  //   if (this.searchCID) {
  //     this.searchService.searchPatient(this.searchCID).subscribe({
  //       next: (data: any) => {
  //         // Pass patient data to patient data component
  //         this.router.navigate(['/patient-data'], { state: { patientData: data.body.patientData } });
  //
  //         console.log(data.body.patientData);
  //       },
  //       error: (error: any) => {
  //         console.error('search component says! : '+error);
  //       }
  //     });
  //   }
  // }
  constructor(private searchService: SearchService, private router: Router, private patientDataService: PatientDataService) {}

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
}
