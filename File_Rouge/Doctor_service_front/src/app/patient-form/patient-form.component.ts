import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { OperationService } from '../services/operation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientForm!: FormGroup;
  // private route: any;

  constructor(private fb: FormBuilder, private operationService: OperationService , private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.patientForm = this.fb.group({
      demographics: this.fb.group({
        age: ['', Validators.required],
        gender: ['', Validators.required],
        ethnicity: ['', Validators.required],
        location: this.fb.group({
          country: ['', Validators.required],
          region: ['', Validators.required]
        })
      }),
      medicalHistory: this.fb.group({
        familyHistoryHeartDisease: [false],
        existingConditions: this.fb.array([]),
        previousSurgeries: this.fb.array([]),
        medications: this.fb.array([])
      }),
      vitalSigns: this.fb.group({
        bloodPressure: this.fb.group({
          systolic: ['', Validators.required],
          diastolic: ['', Validators.required]
        }),
        heartRate: this.fb.group({
          resting: ['', Validators.required],
          exercise: ['', Validators.required]
        }),
        respiratoryRate: ['', Validators.required],
        bmi: ['', Validators.required]
      }),
      laboratoryTests: this.fb.group({
        lipidProfile: this.fb.group({
          totalCholesterol: ['', Validators.required],
          ldl: ['', Validators.required],
          hdl: ['', Validators.required],
          triglycerides: ['', Validators.required]
        }),
        bloodSugar: this.fb.group({
          fasting: ['', Validators.required],
          postprandial: ['', Validators.required]
        }),
        electrolytes: this.fb.group({
          potassium: ['', Validators.required],
          sodium: ['', Validators.required],
          chloride: ['', Validators.required]
        }),
        crp: ['', Validators.required]
      }),
      heartData: this.fb.group({}),
      lifestyle: this.fb.group({
        smokingStatus: ['', Validators.required],
        alcoholConsumption: this.fb.group({
          frequency: ['', Validators.required],
          amount: ['', Validators.required]
        }),
        physicalActivity: this.fb.group({
          frequency: ['', Validators.required],
          duration: ['', Validators.required]
        }),
        diet: ['', Validators.required]
      }),
      contactInformation: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        primaryPhone: ['', Validators.required],
        secondaryPhone: [''],
        email: ['', Validators.required],
        emergencyContact: this.fb.group({
          name: ['', Validators.required],
          phone: ['', Validators.required],
          relationship: ['', Validators.required]
        })
      })
    });
  }

  onSubmit() {
    console.log(this.patientForm.value);

    this.operationService.saveData(this.patientForm.value).subscribe(
      response => {
        console.log('Data saved successfully:', response);
        // Handle success response here
      },
      error => {
        console.error('Error saving data:', error);
        // Handle error response here
      }
    );
  }

  // Helper methods to manage dynamic form arrays (existingConditions, previousSurgeries, medications)
  get existingConditions(): FormArray | null{
    return this.patientForm.get('medicalHistory')!.get('existingConditions') as FormArray;
  }

  addExistingCondition() {
    this.existingConditions!.push(this.fb.control('', Validators.required));
  }

  removeExistingCondition(index: number | null) {
    if (index != null) {
      this.existingConditions!.removeAt(index);
    }
  }

  get previousSurgeries(): FormArray | null{
    return this.patientForm.get('medicalHistory')!.get('previousSurgeries') as FormArray;
  }

  addPreviousSurgery() {
    this.previousSurgeries!.push(this.fb.control('', Validators.required));
  }

  removePreviousSurgery(index: number | null) {
    if (index != null) {
      this.previousSurgeries!.removeAt(index);
    }
  }

  get medications(): FormArray | null {
    return this.patientForm.get('medicalHistory')!.get('medications') as FormArray;
  }

  addMedication() {
    this.medications!.push(this.fb.control('', Validators.required));
  }

  removeMedication(index: number | null) {
    if (index != null) {
      this.medications!.removeAt(index);
    }
  }



  navigateToSearch(): void {
    // operationService.
    this.router.navigate(['/search']);

  }

}
