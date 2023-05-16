import { Component } from '@angular/core';
import {CertificateService} from "../../services/certificate/certificate.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  verificationMethod: string = 'serialNumber';
  serialNumber: string = '';
  certificateFile: File | null = null;
  validCertificate: boolean = false;
  invalidCertificate : boolean = false;

  constructor(private certificateService : CertificateService) {
  }

  verifyBySerialNumber() {
    this.certificateService.validateCertificate(parseInt(this.serialNumber)).subscribe({
      next: (result) => {
        this.validCertificate = result.valid;
        if (!result.valid) {
          this.invalidCertificate = true;
        }
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          console.log(error)
        }
      }
    })

  }

  onFileSelected(event: any) {

    this.certificateFile = event.target.files[0];
  }

  verifyByCertificateFile() {
    if (this.certificateFile) {
      // Logika za proveru validnosti sertifikata putem upload-a sertifikata
      console.log('Provera putem upload-a sertifikata:', this.certificateFile);
    }
  }

  changeValues() {
    this.invalidCertificate = false;
    this.validCertificate = false;
  }
}
