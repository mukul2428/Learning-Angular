import { Component, OnInit, ViewChild } from '@angular/core';
import { DepInjectComponent } from '../dep-inject/dep-inject.component';

@Component({
  selector: 'app-mergecmp',
  templateUrl: './mergecmp.component.html',
  styleUrls: ['./mergecmp.component.css']
})
export class MergecmpComponent implements OnInit {

  constructor() { }

  outputVar:any;

  ngOnInit(): void {
  }

  outputFun(event){
    this.outputVar = event;
  }

  //for viewchild
  @ViewChild(DepInjectComponent) child!:DepInjectComponent;

  changeChildProperty(){
    this.child.defaultName = "Raghav Mukul"
  }
  callChildMethod(){
    this.child.alertBtn();
  }

}
