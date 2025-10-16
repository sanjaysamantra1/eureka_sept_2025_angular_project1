import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo1',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './template-form-demo1.html',
  styleUrl: './template-form-demo1.css'
})
export class TemplateFormDemo1 {
  user = {
    firstName: 'Virat',
    lastName: 'Kohli',
    email: 'Virat@g,ail.com',
    address: {
      city: '',
      state: '',
      pincode:null
    }
  }

  submitMyForm(formObj: NgForm) {
    console.log(formObj);
  }
}
