import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild2', 'b'],
  outputs: ['nameEvent']
})
export class Child2Demo {
  aChild2: any;
  b: number | undefined;

  myName: string = 'Virat Kohli';
  nameEvent = new EventEmitter(); // eventemitter class object
  sendDataToParent() {
    this.nameEvent.emit(this.myName); // trigger event with some data
  }
}
