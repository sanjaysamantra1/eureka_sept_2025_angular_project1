import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomout]'
})
export class Zoomout {
  constructor(private ele: ElementRef) { } // Dependency Injection

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,105%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
