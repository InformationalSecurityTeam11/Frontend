import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {UserService} from "../../services/user/user.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  );
  hasError = false;

  constructor(private router:Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
  }


  login() {
    if(!this.loginForm.valid) {this.hasError = true; return;}
    else this.hasError = false;

    const loginInfo = {
      email: this.loginForm.value.email,
      password:this.loginForm.value.password
    }

    this.authenticationService.login(loginInfo).subscribe({

      next: (result) => {
        localStorage.setItem('user', JSON.stringify(result["token"]));
        localStorage.setItem('refreshToken', JSON.stringify(result["refreshToken"]));
        this.router.navigate(['/']);
        console.log(JSON.stringify(result["token"]))
        console.log(JSON.stringify(result["token"]))

      },
      error : (error) =>{
        if(error instanceof HttpErrorResponse){
          this.hasError = true;
        }
      }

    });
  }





  sendEmailReset() {

  }

}
