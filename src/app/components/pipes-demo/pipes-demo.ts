import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { SortArrPipe } from '../../custom-pipes/sort-arr-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, OrdinalPipe, SortArrPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemo {
  myName = 'SaChIn tenDuLkAr';
  salary = 5000;
  today = new Date();
  user = { name: 'Sanjay', address: 'Bangalore', age: 55 };
  arr = [10, 20, 30, 40, 50, 60, 70];
  num: number = 21;

  numArr = [20, 10, 50, 30, 40];
}
