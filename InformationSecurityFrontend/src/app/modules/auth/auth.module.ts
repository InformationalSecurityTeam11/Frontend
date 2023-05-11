import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[LoginComponent, RegistrationComponent]

})
export class AuthModule { }
