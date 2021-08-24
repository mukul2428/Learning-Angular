import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  }
  onAddProduct(id, name, price){
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
    })
  }
  onFetchProduct(){

  }
  onDeleteProduct(i){
    if(confirm('Do you want to delete this product?')){
      this.products.splice(i,1);
    }
  }
}
