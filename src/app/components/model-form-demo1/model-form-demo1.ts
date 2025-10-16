import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-form-demo1',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-form-demo1.html',
  styleUrl: './model-form-demo1.css'
})
export class ModelFormDemo1 {
  registerForm!: FormGroup;

  constructor() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      })
    })
  }
}
