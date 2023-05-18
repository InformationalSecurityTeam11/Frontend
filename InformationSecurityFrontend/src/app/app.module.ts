import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegistrationComponent} from "./modules/auth/registration/registration.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import { NavbarComponent } from './modules/layout/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Interceptor} from "./modules/auth/interceptor/interceptor";
import {AuthModule} from "./modules/auth/auth.module";
import {LayoutModule} from "./modules/layout/layout.module";
import { RequestFormComponent } from './modules/user/request-form/request-form.component';
import { CertificatesViewComponent } from './modules/user/certificates-view/certificates-view.component';
import { ValidationComponent } from './modules/user/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestFormComponent,
    CertificatesViewComponent,
    ValidationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    LayoutModule

  ],
  providers: [
    {  provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
