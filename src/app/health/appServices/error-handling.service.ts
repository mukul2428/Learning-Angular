import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  //gloable error handler method
  handleError(err:HttpErrorResponse){
    //this "if" is for no internet connection
    if (!err.error || !err.error.error) {
      return throwError(this.errorMessages['UNKNOWN']) //throwing error
    }
    else {
      return throwError(this.errorMessages[err.error.error.message]);
    }
  }

  errorMessages ={
    UNKNOWN: "An Unknown Error is Occurred",
    EMAIL_EXISTS: 'This Email Already Exists',
    OPERATION_NOT_ALLOWED: '',
    EMAIL_NOT_FOUND: 'No Email found',
    INVALID_PASSWORD: 'The password is invalid'
  }
}
