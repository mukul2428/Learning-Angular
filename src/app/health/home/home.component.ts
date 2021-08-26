import { Component, OnInit } from '@angular/core';
import { AuthService } from '../appServices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //this will be true if user is loggedin
  isLoggedIn = false;

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    //subscribing to subject(which has data of user)
    this._authService.user.subscribe(res=>{
        if(res){
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      })
  }

}
