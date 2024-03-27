import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {OperationComponent} from "./operation/operation.component";
import {PatientDataComponent} from "./patient-data/patient-data.component";
import {PatientFormComponent} from "./patient-form/patient-form.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'dashboard',component:PatientFormComponent},
  {path:'search',component:SearchComponent},
  { path: 'patient-data', component: PatientDataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
