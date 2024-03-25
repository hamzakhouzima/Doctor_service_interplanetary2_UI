import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {OperationComponent} from "./operation/operation.component";

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'dashboard',component:OperationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
