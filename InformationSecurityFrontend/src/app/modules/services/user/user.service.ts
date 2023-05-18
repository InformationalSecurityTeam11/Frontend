import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../../models/User";
import {Observable} from "rxjs";
import {environment} from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  registerStandardUser(user : User) : Observable<any> {
    return this.http.post<any>(environment.apiHost + 'api/user/register', user, {
      headers:this.headers,
    });
  }


  activateAccount(verificationCode: string) : Observable<any>{
    return this.http.get<any>(environment.apiHost + 'api/user/activate/' + verificationCode,{
      headers:this.headers,
    });
  }
}
