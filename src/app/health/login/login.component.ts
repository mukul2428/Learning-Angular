import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { AuthService } from '../appServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // dependency injection, injecting services to use them
  constructor(private router: Router,
    private fb: FormBuilder,
    private _authService: AuthService) { }

  error;

  Form!: FormGroup;

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.Form.valid) {
      const email = this.Form.value.email;
      const password = this.Form.value.password;

      let authObservable: Observable<AuthResponse>;

      if (this.loginMode) {
        //login request
        authObservable = this._authService.signIn(email, password);
      }
      else {
        //signup request
        //passing email & password to service
        authObservable = this._authService.signUp(email, password);
      }
      authObservable.subscribe(
        res => {
           console.log(res); 
           this.router.navigate(['home']);
        },
        err => {
          console.log(err);
          //get error message
          // this.error = err.error.error.message;
          this.error = err;
        }
      )
    }
    else {

    }
  }

  onClick() {
    this.router.navigate(['home']);
  }

  loginMode: boolean = true;
  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }
}
