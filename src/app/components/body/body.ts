import { ObservableDemo2 } from './../observable-demo2/observable-demo2';
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
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { EmployeeList } from '../employee-list/employee-list';
import { EmployeeAdd } from '../employee-add/employee-add';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';

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
    // UserList
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    // SubjectDemo1
    // EmployeeList,
    // EmployeeAdd
    // SignalDemo1
    SignalDemo2
  ],
  templateUrl: './body.html',
  styleUrl: './body.css'
})
export class Body {

}
