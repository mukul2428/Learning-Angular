import { Component, Input, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-dep-inject',
  templateUrl: './dep-inject.component.html',
  styleUrls: ['./dep-inject.component.css']
})
export class DepInjectComponent implements OnInit {

  //using subjects by injecting services
  constructor(private _msgService: DesignutilityService) { 
    this._msgService.subjectVar.subscribe(subVar => {
      this.subjectVar = subVar;
    })
  }
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

  //for subjects(changing value in every component)
  subjectVar: string = "mukul"
  updateVar(subVar){
    this._msgService.subjectVar.next(subVar.value);
  }

  notify() {
    this._msgService.messageAlert();
  }

  //to access this variable outside
  @Input() placeholderText:string ="UserName";

}
