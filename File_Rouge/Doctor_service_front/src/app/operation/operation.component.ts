import { Component } from '@angular/core';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-patient',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
  constructor(private operationService: OperationService) {}

  addPatient() {

    console.log("Add patient is Called")

    const patientData = {

        "demographics": {
          "age": 45,
          "gender": "male",
          "ethnicity": "african",
          "location": {
            "country": "tunisia",
            "region": "souissi"
          }
        },
        "medicalHistory": {
          "familyHistoryHeartDisease": false,
          "existingConditions": [
            "Asthma",
            "Hypertension"
          ],
          "previousSurgeries": ["Appendectomy"],
          "medications": ["Albuterol", "Lisinopril"]
        },
        "vitalSigns": {
          "bloodPressure": {
            "systolic": 120,
            "diastolic": 8
          },
          "heartRate": {
            "resting": 70,
            "exercise": 100
          },
          "respiratoryRate": 16,
          "bmi": 25.2
        },
        "laboratoryTests": {
          "lipidProfile": {
            "totalCholesterol": 200,
            "ldl": 130,
            "hdl": 50,
            "triglycerides": 150
          },
          "bloodSugar": {
            "fasting": 85,
            "postprandial": 120
          },
          "electrolytes": {
            "potassium": 4.2,
            "sodium": 138,
            "chloride": 102
          },
          "crp": 0.5
        },
        "heartData": {
          // Include data structures for ECG, ECHO, stress test, and coronary scan
          // (omitted for brevity)
        },
        "lifestyle": {
          "smokingStatus": "Non-smoker",
          "alcoholConsumption": {
            "frequency": "Occasional",
            "amount": 1
          },
          "physicalActivity": {
            "frequency": "3 times per week",
            "duration": "30 minutes"
          },
          "diet": "Mediterranean"
        },
        "contactInformation": {
          "first_name" : "hamza",
          "last_name" : "khouzima",

          "primaryPhone": "+1234567890",
          "secondaryPhone": "+1555555555",
          "email": "222@hamza.com",
          "emergencyContact": {
            "name": "khalid khouzima",
            "phone": "+000000000",
            "relationship": "not related"
          }
        }

      }

    ;

    this.operationService.saveData(patientData).subscribe(
      response => {
        console.log('Patient added successfully:', response);
        // Handle success response here
      },
      error => {
        console.error('Error adding patient:', error);
        // Handle error response here
      }
    );
  }
}
