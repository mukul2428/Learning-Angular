import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  dataTitle: string = "Product Added";
  fetching: boolean = false;

  products = [
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

  onSaveProduct() {
    //getting "saveProducts" method from service
    //and passing "products" array to the service
    //subscribing to observable
    this._firebaseData.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }
  onAddProduct(id, name, price) {

    if (this.editMode) {
      //changing data at that index which is selected
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      }
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    }
    else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value
      })
    }
    this.onSaveProduct();
  }
  onFetchProduct() {
    this.fetching = true;

    this._firebaseData.fetchProducts().subscribe(
      (response) => {
        //stringify and parsed our response data
        const data = JSON.stringify(response);
        this.products = JSON.parse(data);
        this.fetching = false;
      },
      (err) => console.log(err)
    )
  }
  onDeleteProduct(i: number) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(i, 1);
      this.onSaveProduct();
    }
  }

  editMode: boolean = false;
  editIndex!: number;

  //for editing and updating in dom we use "viewchild"
  @ViewChild('id') id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('price') price!: ElementRef;
  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    //updating values of dom
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }
}
