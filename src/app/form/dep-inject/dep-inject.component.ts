import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Renderer2, ContentChild, HostListener } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { filter, map, pluck, take, tap, toArray } from 'rxjs/operators';
import { TestdirectiveDirective } from '../appDirectives/testdirective.directive';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-dep-inject',
  templateUrl: './dep-inject.component.html',
  styleUrls: ['./dep-inject.component.css']
})
export class DepInjectComponent implements OnInit, AfterViewInit {


  //for content child
  @ContentChild('child', { static: false }) childPara!: ElementRef

  //viewchild
  @ViewChild('viewChildBox', { static: true }) box!: ElementRef;
  defaultName: string = "Mukul Raghav"
  alertBtn() {
    alert(this.defaultName);
    //for content child
    var text = this.renderer.createText(' This text is created by renderer');
    this.renderer.appendChild(this.childPara.nativeElement, text);
  }

  //view child with directive
  @ViewChild(TestdirectiveDirective) myDir;
  changeColor(color) {
    this.myDir.changeBg(color);
  }


  //using subjects by injecting services, renderer2
  constructor(private _msgService: DesignutilityService,
    private renderer: Renderer2) {
    this._msgService.subjectVar.subscribe(subVar => {
      this.subjectVar = subVar;
    })
  }


  //for getting variable from service
  product = "";

  objArr: any;
  apiFetchedData: any;

  //for map
  sub1!: Subscription;

  ngOnInit() {
    this.product = this._msgService.product;
    this.objArr = this._msgService.objArr;
    //subscribing to obeservable(data from api)
    this._msgService.httpGetApi()
      .subscribe(apiData => this.apiFetchedData = apiData);

    //use of map
    const broadCastVideos = interval(1000);
    //tranforming our data using pipe before subscribing
    this.sub1 = broadCastVideos.pipe(
      // tap(res=>{ //tap used
      //   if(res>10){
      //     this.sub1.unsubscribe();
      //   }
      // }),
      take(7), //take operator used
      map(data => 'Video ' + data * 10)
    )
      .subscribe(res => {
        console.log(res);
      })
    // setTimeout(() => { //unsubsribe after 10 seconds
    //   this.sub1.unsubscribe();
    // }, 10000);

    //for map(making array into observable)
    const members = from([
      { id: 1, name: "Mukul", gender:"male" },
      { id: 2, name: "Raghav",gender:"male" },
      { id: 3, name: "Manish",gender:"male" },
      { id: 4, name: "Mehul", gender:"male" },
      { id: 5, name: "Vaishnavi", gender:"female" },
      { id: 6, name: "Ankita", gender:"female" },
      { id: 7, name: "Priyanka", gender:"female" },

    ])
    members.pipe(
      // map(data => data.name), //using map
      filter(member => member.name.length > 5 && member.gender == "female"), //filtering the data
      pluck('name'), //using pluck
      toArray() //converting all "name" data into array
    )
    .subscribe(res => {
      console.log(res);
    })
  }

  //for view child
  ngAfterViewInit() {
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor = "blue"
    this.box.nativeElement.classList = "boxBlue"
    this.box.nativeElement.innerHTML = "modified by viewChild"

    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
    this.renderer.addClass(this.box.nativeElement, 'myClass');
    this.renderer.setAttribute(this.box.nativeElement, 'title', 'This is test title');

    //for content child
    this.renderer.setStyle(this.childPara.nativeElement, 'color', 'blue');
  }

  notify() {
    this._msgService.messageAlert();
  }

  //to access this variable outside
  @Input() placeholderText: string = "UserName";

  @Output() outputVar = new EventEmitter<any>();

  //for subjects(changing value in every component)
  subjectVar: string = "mukul"

  updateVar(subVar) {
    this._msgService.subjectVar.next(subVar.value);
    //for @output
    this.outputVar.emit(this.subjectVar);
  }

  //use hostlistener with directives
  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log("Scrolling");
  }

  //pipe
  value = "This is test pipe"

}
