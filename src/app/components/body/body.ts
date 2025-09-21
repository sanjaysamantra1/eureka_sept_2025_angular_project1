import { Directives } from './../directives/directives';
import { Databinding } from './../databinding/databinding';
import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Demo1 } from '../demo1/demo1';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives
    // ProductList
    Demo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
