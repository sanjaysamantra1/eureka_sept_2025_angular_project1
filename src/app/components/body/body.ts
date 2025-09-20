import { Databinding } from './../databinding/databinding';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [
    Databinding
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
