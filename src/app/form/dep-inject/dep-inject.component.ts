import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-dep-inject',
  templateUrl: './dep-inject.component.html',
  styleUrls: ['./dep-inject.component.css']
})
export class DepInjectComponent implements OnInit, AfterViewInit {


  //viewchild
  @ViewChild('viewChildBox', { static: true }) box!: ElementRef;
  defaultName:string = "Mukul Raghav"
  alertBtn(){
    alert(this.defaultName);
  }

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

  //for view child
  ngAfterViewInit(){
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor = "blue"
    this.box.nativeElement.classList = "boxBlue"
    this.box.nativeElement.innerHTML = "modified by viewChild"
  }

  notify() {
    this._msgService.messageAlert();
  }

  //to access this variable outside
  @Input() placeholderText:string ="UserName";

  @Output() outputVar = new EventEmitter<any>();

  //for subjects(changing value in every component)
  subjectVar: string = "mukul"

  updateVar(subVar){
    this._msgService.subjectVar.next(subVar.value);
    //for @output
    this.outputVar.emit(this.subjectVar);
  }

}
