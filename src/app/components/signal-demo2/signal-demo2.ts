import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css'
})
export class SignalDemo2 {
  num: WritableSignal<number> = signal(0);
  messages: WritableSignal<string[]> = signal([]);

  numDouble: Signal<number> = computed(() => this.num() * 2);
  numSquare: Signal<number> = computed(() => this.num() * this.num());

  increment() {
    this.num.update((value: number) => value + 1)
    this.messages.set([...this.messages(), `Value of Num is: ${this.num()}`]);
  }
  decrement() {
    this.num.update((val: number) => val - 1);
    this.messages().pop()
    this.messages.set([... this.messages()]);
  }
  reset() {
    this.num.set(0);
    this.messages.set([]);
  }

  // console.log('==============================')

  userId = signal(1);
  userData: any;
  userDetailsEffect = effect(() => { // this piece of code runs whenever userId signal changes
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  constructor(private httpClient: HttpClient) {
  }
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData = response;
    })
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }
}
