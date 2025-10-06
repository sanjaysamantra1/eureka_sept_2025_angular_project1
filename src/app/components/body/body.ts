import { Directives } from './../directives/directives';
import { Databinding } from './../databinding/databinding';
import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Demo1 } from '../demo1/demo1';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { ClockDemo1 } from '../clock-demo1/clock-demo1';
import { HttpDemo1 } from '../http-demo1/http-demo1';
import { UserCrud } from '../user-crud/user-crud';
import { CommentDemo } from '../comment-demo/comment-demo';
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // Directives
    // ProductList
    // Demo1
    // PipesDemo
    // ParentDemo
    // ClockDemo1
    // HttpDemo1
    // UserCrud
    // CommentDemo
    UserList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
