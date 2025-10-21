import { Component } from '@angular/core';
import { LargeComponent } from '../large-component/large-component';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgComponentOutlet,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  largeComponent:any;
  constructor() {
    import('../large-component/large-component').then(m => {
      this.largeComponent = m.LargeComponent;
    });
  }
}
