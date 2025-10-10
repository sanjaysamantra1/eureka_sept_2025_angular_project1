import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css'
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.lets_learn_subject();
    // this.lets_learn_behaviour_subject();
    // this.lets_learn_replay_subject();
    this.lets_learn_async_subject();
  }

  lets_learn_subject() {
    let mySubject = new Subject(); // mySubject -
    mySubject.next('AAAAA'); // AAAAA is published
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCC');
  }

  lets_learn_behaviour_subject() {
    let mySubject = new BehaviorSubject('Default Value'); // mySubject -
    mySubject.next('AAAAA'); // AAAAA is published
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCC');
  }

  lets_learn_replay_subject() {
    let mySubject = new ReplaySubject(); // mySubject -
    mySubject.next('AAAAA'); // AAAAA is published
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCC');
  }

  lets_learn_async_subject() {
    let mySubject = new AsyncSubject(); // mySubject -
    mySubject.next('AAAAA'); // AAAAA is published
    mySubject.subscribe(val => console.log('Subscriber-1 ', val));
    mySubject.next('BBBBB');
    mySubject.subscribe(val => console.log('Subscriber-2 ', val));
    mySubject.next('CCCCC');
    mySubject.complete();
  }
}
