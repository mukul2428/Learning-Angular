import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  //injecting http module, here "http" is a local variable
  constructor(private http:HttpClient) { }

  messageAlert() {
    alert("Thanks for Subscribing!!");
  }

  //using this variable in whole project
  product = "Laptop"
  objArr = [
    {name: "PS5", id: 898},
    {name: "Mobile", id: 823},
    {name: "PC", id: 133},
    {name: "Tablet", id:828}
  ] 

  //making a method for using http module having 
  //return type as "observable" of type "any"
  httpGetApi(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  //for subjects
  subjectVar = new Subject<any>();

}
