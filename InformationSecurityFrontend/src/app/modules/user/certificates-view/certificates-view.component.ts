import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CertificateService} from "../../services/certificate/certificate.service";
import {CertificateInfo} from "../../../models/Certificate";

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})
export class CertificatesViewComponent implements OnInit{
  certificates: any;
  urlSegment : any;
  @Input() own: boolean = false;

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.own = urlSegments.join('/') === 'myCertificates';
    });
    if (this.urlSegment === 'myCertificates')
    this.certificateService.getAllCertificates().subscribe( {
      next: (result) => {
        this.certificates = result;
      },
      error: (error) => {
        console.log(error);
      }
    })
    else {
      this.certificateService.getOwnCertificates().subscribe( {
        next: (result) => {
          this.certificates = result;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }


  }

  downloadCertificate(certificateInfo : CertificateInfo) {
    this.certificateService.downloadCertificate(certificateInfo.serialNumber).subscribe(response => {
      console.log("response: ",response);
      const file = new Blob([response], { type: 'application/octet-stream' });
      const downloadURL = URL.createObjectURL(file);

      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'certificate.txt';

      link.click();
      URL.revokeObjectURL(downloadURL);
    });
  }

}
