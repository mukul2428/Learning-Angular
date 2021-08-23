import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','yellow');
  }

  changeBg(color:string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  //use hostlistener with directives
  @HostListener('mouseover') onMouseOver(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue');
    // alert("Hlle");
  }
  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  //use hostbinding
  @HostBinding('style.backgroundColor') bgColor = 'lightGray';
  @HostBinding('class.myClass') className;
  @HostBinding('attr.title') myTitle; //add title
  @HostListener('click') myClick(){
    this.bgColor = 'red';
    this.className = true;
    this.myTitle = 'this is test title';
  }

}
