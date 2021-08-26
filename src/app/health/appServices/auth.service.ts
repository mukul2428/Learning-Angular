import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private config: config) { }

  signUp(email, password) {
    //this signUp method returning AuthResponse
    //this is signup request
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.config.API_KEY}`, {
      //acc. to firebase doc.
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
  signIn(email, password){
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.config.API_KEY}`,{
       //acc. to firebase doc.
       email: email,
       password: password,
       returnSecureToken: true
    })
  }
}
