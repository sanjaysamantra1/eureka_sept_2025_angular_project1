import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomout]'
})
export class Zoomout {
  // ele = new ElementRef(); // developer creating object of a class
  constructor(private ele: ElementRef) { } // Dependency Injection

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,105%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
