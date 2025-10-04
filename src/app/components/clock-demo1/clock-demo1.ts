import { Component, inject } from '@angular/core';
import { ClockService } from '../../services/clock-service';

@Component({
  selector: 'app-clock-demo1',
  imports: [],
  templateUrl: './clock-demo1.html',
  styleUrl: './clock-demo1.css'
})
export class ClockDemo1 {
  clockService = inject(ClockService);

  /* constructor(private clockService: ClockService) {
  } */
  ngOnInit() {
    console.log('calling clock service mthod:: ', this.clockService.getFullTimestamp())
  }
}
