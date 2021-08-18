import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-dep-inject',
  templateUrl: './dep-inject.component.html',
  styleUrls: ['./dep-inject.component.css']
})
export class DepInjectComponent implements OnInit {

  //using service by dependency injection
  constructor(private _msgService: DesignutilityService) { }

  //for getting variable from service
  product = "";

  objArr:any;
  apiFetchedData:any;

  ngOnInit() {
    this.product = this._msgService.product;
    this.objArr = this._msgService.objArr;
    //subscribing to obeservable(data from api)
    this._msgService.httpGetApi()
    .subscribe(apiData => this.apiFetchedData = apiData);
  }

  notify() {
    this._msgService.messageAlert();
  }

}
