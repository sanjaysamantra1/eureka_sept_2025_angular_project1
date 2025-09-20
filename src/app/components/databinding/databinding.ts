import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  userName: string = 'Virat Kohli';
  img_url = 'https://img.freepik.com/free-photo/closeup-shot-purple-flower_181624-25863.jpg?semt=ais_incoming&w=740&q=80'
  rowSpanValue = 2;
  user = { name: 'sanjay', age: 40, add: 'Bangalore' };
  num1 = 10;
  num2 = 20;

  flag: boolean = true;
  toggleFlag() {
    this.flag = !this.flag;
  }
  addition(a: any, b: any) {
    console.log(`Addition of ${a} and ${b} is ${+a + +b}`)
  }

}
