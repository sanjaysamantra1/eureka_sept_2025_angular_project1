import { Directives } from './../directives/directives';
import { Databinding } from './../databinding/databinding';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [
    Databinding,
    Directives
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
