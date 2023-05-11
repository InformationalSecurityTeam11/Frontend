import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../models/User";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerForm = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(13)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repeatedPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    activationMethod: new FormControl("Email")// početna vrednost Email
  });
  hasError : boolean = false;

  constructor(private router: Router, private userService : UserService){

  }
  get password() {return this.registerForm.get('password');}
  get repeatedPassword() {return this.registerForm.get('repeatedPassword');}


  register() : void {

    if (!this.registerForm.valid) {
      alert("Please fill the form")
      return

    }

    if (this.password?.value !== this.repeatedPassword?.value) {
      this.hasError = true;
      alert("Passwords don't match")
      return;
    }

    if (this.registerForm.valid) {
      this.hasError = false;
      alert("Successfully registered")
      const user : User =  {
        name : this.registerForm.value.name || "",
        surname : this.registerForm.value.surname || "",
        telephoneNumber: this.registerForm.value.phoneNumber || "",
        email:this.registerForm.value.email || "",
        password: this.registerForm.value.password || "",
        activationMethod: this.registerForm.value.activationMethod || "Email"
      }
    }

  }
}
