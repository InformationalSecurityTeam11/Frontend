import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit{

  showPasswordInputs: boolean = false;

  constructor() { }

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  passwordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  })



  sendEmail() {
    if (this.emailForm?.valid) {
      // Code to send recovery email
      this.showPasswordInputs = true;
    }
  }

  resetPassword() {
    if (this.passwordForm?.valid) {
      const newPassword = this.passwordForm?.get('newPassword')?.value;
      const repeatPassword = this.passwordForm?.get('repeatPassword')?.value;

      if (newPassword === repeatPassword) {
        // Code to reset password
        console.log('Password reset successful');
      } else {
        console.log('Passwords do not match');
      }
    }
  }

  ngOnInit(): void {
  }
}
