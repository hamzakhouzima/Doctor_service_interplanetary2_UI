import { Component } from '@angular/core';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchCID: string = '';
  patientData: any = null;

  constructor(private searchService: SearchService) {}

  searchPatient() {
    if (this.searchCID) {
      this.searchService.searchPatient(this.searchCID).subscribe({
        next: (data: any) => {
          if (data && data.body.patientData) {
            const cleanedData = data.body.patientData.replace(/\\r\\n/g, '').replace(/\\n/g, '').replace(/\\r/g, '');

            console.log(cleanedData);

            this.patientData = JSON.parse(cleanedData);
          } else {
            console.error('Patient data is empty.');
            this.patientData = null; // Reset or handle as needed
          }
        },
        error: (error: any) => {
          console.error(error);
          this.patientData = null; // Reset or handle as needed
        }
      });
    }
  }

}
