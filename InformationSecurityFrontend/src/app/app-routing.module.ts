import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./modules/auth/registration/registration.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import {RequestFormComponent} from "./modules/user/request-form/request-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  {path: 'newCertificate', component: RequestFormComponent},
  {path: 'home', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
