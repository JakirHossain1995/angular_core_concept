import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elRef: ElementRef) {
    //this.elRef.nativeElement.style.border = "2px solid black";
   }

   //HostListner
   @HostListener('click') myClick(){
      this.elRef.nativeElement.style.border = "2px solid black";
      alert('HostListner changed the border of the host element');
   }

   @HostBinding('style.backgroundColor') bgColor;
   
   @HostListener('mouseover') myMouseOver(){
    this.bgColor = "lightgray"
   }
    @HostListener('mouseout') myMouseOut(){
    this.bgColor  = "aqua";
   }

}
