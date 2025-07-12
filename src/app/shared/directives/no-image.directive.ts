import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(private elementRef: ElementRef) { }


  @HostListener('error')
  onloadImgDefault() {
    const element = this.elementRef.nativeElement;
  console.log('Esta imagen esta rota:' + element);
    element.src = '/assets/img/profile.png';
  }
 
}
