import { Component, OnInit } from '@angular/core';
import { AuthService } from './health/appServices/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'insurance-app';

  constructor(private _authService: AuthService){}

  ngOnInit(){
    //whenever app will start, this method will be called 
    this._authService.autoSignIn();
  }

}
