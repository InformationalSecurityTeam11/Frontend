import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CertificateRequestIn} from "../../../models/CertificateRequestIn";
import {Observable} from "rxjs";
import {environment} from "../../../environment/environment";
import {CertificateInfo, ValidateCertificate} from "../../../models/Certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http:HttpClient) {}

  createCertificateRequest(request : CertificateRequestIn): Observable<any> {
    return this.http.post<any>(environment.apiHost + "api/certificate/request", request, {
      headers : this.headers
    })
  }

  getAllCertificates(): Observable<CertificateInfo[]> {
    this.headers =  new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<CertificateInfo[]>(environment.apiHost + 'api/certificate', {
      headers: this.headers,
    });
  }

  getOwnCertificates(): Observable<CertificateInfo[]> {
    this.headers =  new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<CertificateInfo[]>(environment.apiHost + 'api/certificate/own', {
      headers: this.headers,
    });
  }

  downloadCertificate(serial: number) : Observable<any> {
    return this.http.get(environment.apiHost + 'api/certificate/download/' + serial, {
      headers:this.headers,
      responseType: 'blob',
    });
  }

  validateCertificate(serial: number):Observable<ValidateCertificate> {
    const validateCertificate = {
      serialNumber : serial
    }
    return this.http.post<ValidateCertificate>(environment.apiHost + 'api/certificate/validate', validateCertificate,{
      headers: this.headers,
    });
  }

  verifyCertificate(file: FormData): Observable<string> {
    this.headers =  new HttpHeaders({
    });
    console.log(this.headers);
    console.log(file);
    return this.http.post(environment.apiHost + 'api/certificate/verify/upload', file, {
      headers:this.headers,
      responseType: 'text'
    });
  }

}
