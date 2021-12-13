import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import AuthDto from "../models/AuthDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token: string | null = null;
  loggedIn: boolean = false;

  login(pw: string) {
    this.http.get<AuthDto>('http://localhost:5000/api/Authentication/Authenticate?pw='+pw).subscribe(value => {
      if (value && value.success) {
        this.token = value.token;
        this.loggedIn = true;
      }
    });
  }

  logout() {
    this.loggedIn = false;
    this.token = null;
  }
}
