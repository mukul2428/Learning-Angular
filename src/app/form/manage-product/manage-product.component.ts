import { Component, OnInit } from '@angular/core';
import { FirebasedataService } from '../appServices/firebasedata.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  //inject service
  constructor(private _firebaseData: FirebasedataService) { }

  ngOnInit(): void {
    //this will fetch data every time our page loads
    this.onFetchProduct();
  }

  dataTitle = "Product Added"
  products =[
    {
      id: 'p1',
      name: 'Laptop',
      price: 45000
    },
    {
      id: 'p2',
      name: 'Mobile',
      price: 28289
    },
    {
      id: 'p3',
      name: 'Tablet',
      price: 30300
    }
  ]

  onSaveProduct(){
    //getting "saveProducts" method from service
    //and passing "products" array to the service
    //subscribing to observable
    this._firebaseData.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }
  onAddProduct(id, name, price){
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
    })
  }
  onFetchProduct(){
    this._firebaseData.fetchProducts().subscribe(
      (response) => {
        //stringify and parsed our response data
        const data = JSON.stringify(response);
        this.products = JSON.parse(data);
      },
      (err) => console.log(err)
    )
  }
  onDeleteProduct(i){
    if(confirm('Do you want to delete this product?')){
      this.products.splice(i,1);
    }
  }
}
