import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {OperationComponent} from "./operation/operation.component";
import {PatientDataComponent} from "./patient-data/patient-data.component";
import {PatientFormComponent} from "./patient-form/patient-form.component";
import {SearchComponent} from "./search/search.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: PatientFormComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'patient-data', component: PatientDataComponent, canActivate: [AuthGuard] },
  // { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  // { path: '**', component: PageNotFoundComponent }  // Uncomment this for handling 404 pages
  // { path: 'protected-route', component: ProtectedComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
