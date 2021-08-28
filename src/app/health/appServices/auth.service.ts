import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { config } from '../config';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
import { Subject } from 'rxjs';
import { User } from '../appModels/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //using subject to transfer user's data
  //to other components, this subject is of type "User"
  user = new Subject<User>();

  constructor(
    private http: HttpClient,
    private config: config,
    private _errService: ErrorHandlingService) { }

  signUp(email, password) {
    //this signUp method returning AuthResponse
    //this is signup request
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.config.API_KEY}`, {
      //acc. to firebase doc.
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe( //handling error using pipe
      catchError(err => {
        return this._errService.handleError(err)
      }),
      tap(res => {
        this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn);//added "+" to convert into number
      })
    )
  }
  signIn(email, password) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.config.API_KEY}`, {
      //acc. to firebase doc.
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe( //handling error using pipe
      catchError(err => {
        return this._errService.handleError(err)
      }), tap(res => {
        this.authenticatedUser(res.email, res.localId, res.idToken, +res.expiresIn);//added "+" to convert into number
      })
    )
  }

  //when user is already loggedin then get its data 
  //from local storage
  autoSignIn() {
    //parse string data into object and get it from
    //localStorage
    const userData = JSON.parse(localStorage.getItem('UserData')!);

    //if user data is not present in local storage
    if (!userData) {
      return;
    }
    //get user's data
    const loggedInUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    //if token is valid
    if (loggedInUser.token) {
      //used subject to broadcast for others
      this.user.next(loggedInUser);
    }
  }

  //saving user's data in our app
  private authenticatedUser(email, userId, token, expiresIn) {

    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    //sending subject to observers to subscribe it
    this.user.next(user);

    //saving user's data in local storage
    localStorage.setItem('UserData', JSON.stringify(user));

  }
}
