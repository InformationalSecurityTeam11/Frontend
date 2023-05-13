import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  certificateForm = this.formBuilder.group({
    parentCertSerialNum: ['', Validators.required],
    type: ['', Validators.required],
    organization: ['', Validators.required],
    organizationUnit: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.certificateForm.value);
    if (!this.certificateForm.valid) {
      alert("Please fill the form!")
    }
  }
}
