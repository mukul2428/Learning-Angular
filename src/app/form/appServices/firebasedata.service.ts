import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebasedataService {

  constructor(private http:HttpClient) { }

  url = 'https://web-project-d5a3f-default-rtdb.firebaseio.com/products.json';

  private headers = new HttpHeaders({'Content-Type' : 'application/json'});

  //passed "products" array as an argument which we want to store on firebase
  saveProducts(products:any[]){
    // return this.http.post(this.url, products);
    return this.http.put(this.url, products, {headers : this.headers});
  }

  fetchProducts(){
    return this.http.get(this.url);
  }
}
