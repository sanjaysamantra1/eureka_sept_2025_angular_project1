
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  num: number = 4;
  cars = ['Tata', 'Honda', 'Maruti', 'Hyudai', 'Toyota'];

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8500, "gender": "male" }
  ];

  isActive = true;
  isDisabled = false;

  myStyle1 = {
    color: 'red',
    border: '5px dotted green',
    padding: '5px'
  }
  myStyle2 = {
    color: 'blue',
    border: '5px dotted yellow',
    padding: '10px'
  }
}
