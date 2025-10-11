import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css'
})
export class SignalDemo1 {
  count = 0;
  countDouble = this.count * 2;

  num = signal(0); // signal variable
  numDouble = computed(() => this.num() * 2); // computed signal variable
  numSquare = computed(() => this.num() * this.num()); // computed signal variable


  cookieCount: WritableSignal<number> = signal(10); // signal variable
  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);
  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
}
