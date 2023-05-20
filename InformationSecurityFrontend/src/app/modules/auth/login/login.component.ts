import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {UserService} from "../../services/user/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginCredentials} from "../../../models/User";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup(
    {
      //TODO: VRATITI KAKO JE BILO
      // email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      // password: new FormControl('', [Validators.required, Validators.minLength(5)])
      email: new FormControl(''),
      password: new FormControl('')
    }
  );
  hasError = false;
  verification = false;
  verificationCode: any;

  constructor(private router:Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
  }


  login() {
    if(!this.loginForm.valid) {this.hasError = true; return;}
    else this.hasError = false;

    const loginInfo : LoginCredentials = {
      email: this.loginForm.value.email || "",
      password:this.loginForm.value.password || ""
    }
    this.authenticationService.login(loginInfo).subscribe({

      next: (result) => {
        console.log(result)
        this.verification = true;
      },
      error : (error) =>{
        if(error instanceof HttpErrorResponse){
          this.hasError = true;
          console.log(error)
        }
      }

    });
  }

  submitForm() {
    this.authenticationService.confirmLogin(this.verificationCode).subscribe({
      next: (result) => {
        console.log(result)
        localStorage.setItem('user', JSON.stringify(result["accessToken"]));
        localStorage.setItem('refreshToken', JSON.stringify(result["refreshToken"]));
        this.authenticationService.setUser();
        this.router.navigate(['/allCertificates']);

      },
      error: (error) => {
        if(error instanceof HttpErrorResponse){
          this.hasError = true;
          console.log(error)
        }
      }
    })

  }

  sendEmailReset() {
    this.router.navigate(['/resetPassword']);
  }
}
