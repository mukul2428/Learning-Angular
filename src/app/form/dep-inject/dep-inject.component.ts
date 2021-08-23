import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2, ContentChild, HostListener } from '@angular/core';
import { TestdirectiveDirective } from '../appDirectives/testdirective.directive';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-dep-inject',
  templateUrl: './dep-inject.component.html',
  styleUrls: ['./dep-inject.component.css']
})
export class DepInjectComponent implements OnInit, AfterViewInit {


  //for content child
  @ContentChild('child', { static: false })  childPara!:ElementRef

  //viewchild
  @ViewChild('viewChildBox', { static: true }) box!: ElementRef;
  defaultName:string = "Mukul Raghav"
  alertBtn(){
    alert(this.defaultName);
    //for content child
    var text = this.renderer.createText(' This text is created by renderer');
    this.renderer.appendChild(this.childPara.nativeElement,text);
  }

  //view child with directive
  @ViewChild(TestdirectiveDirective) myDir;
  changeColor(color){
    this.myDir.changeBg(color);
  }


  //using subjects by injecting services, renderer2
  constructor(private _msgService: DesignutilityService,
    private renderer : Renderer2) { 
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

    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','red');
    this.renderer.addClass(this.box.nativeElement, 'myClass');
    this.renderer.setAttribute(this.box.nativeElement, 'title', 'This is test title');

    //for content child
    this.renderer.setStyle(this.childPara.nativeElement, 'color','blue');
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

  //use hostlistener with directives
  @HostListener('window:scroll',['$event']) myScroll(){
    console.log("Scrolling");
  }

  //pipe
  value = "This is test pipe"

}
