import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css'
})
export class ObservableDemo1 {
  ngOnInit() {
    // this.from_demo();
    // this.interval_demo();
    this.digital_clock();
    // this.custom_observable();
    this.few_pipes();
  }
  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];
    // convert array data to observable data
    let carsPublisher = from(cars);
    carsPublisher.subscribe(val => console.log(val));
  }

  nums: Observable<number> | undefined;
  interval_demo() {
    this.nums = interval(1000); // publisher
    this.nums.subscribe(val => console.log(val));
  }

  currentTime$: Observable<string> | undefined;
  digital_clock() {
    this.currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()))
  }

  custom_observable() {
    const carsObservable = new Observable((publisher) => {
      publisher.next('Tata');
      publisher.next('Honda');
      publisher.next('Maruti');
      publisher.next('Hyundai');
      publisher.complete();
    });
    carsObservable.subscribe({
      next: (response) => console.log('Partial response: ', response),
      error: (err) => console.log(err),
      complete: () => console.log('All data received'),
    });
  }

  few_pipes() {
    const numPublisher = interval(1000);
    // numPublisher.subscribe(val => console.log(val));

    const nums_upto_10 = numPublisher.pipe(take(10));
    // nums_upto_10.subscribe(val => console.log(val));

    const even_nums = numPublisher.pipe(filter(ele => ele % 2 == 0));
    // even_nums.subscribe(val => console.log(val));

    const num_square = numPublisher.pipe(map(ele => ele * ele));
    num_square.subscribe(val => console.log(val));
  }
}
