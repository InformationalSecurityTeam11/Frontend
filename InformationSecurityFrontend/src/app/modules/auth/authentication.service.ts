import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import {Token} from "./token/token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  user$ = new BehaviorSubject(null);

  constructor(private http:HttpClient) {
  }

  login(auth:any):Observable<Token>{
    return this.http.post<Token>(environment.apiHost + 'api/user/login', auth, {
      headers:this.headers,
    });
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('user') != null;
  }

}
