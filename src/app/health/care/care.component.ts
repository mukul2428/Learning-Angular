import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent implements OnInit {


  //for printing on web page
  name:string = "Mukul";
  input:boolean = false;
  greet = "";
  name1 : string = "";
  displayName:boolean = true;
  colors =["blue", "green", "orange", "yellow"];

  onClick(event) {
    console.log("Welcome Mukul Raghav");
    console.log(event);
    this.greet = "Good Morning";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
