import { Component } from '@angular/core';
import products from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productArr = products;
  p:number = 1;
  faStar = faStar;
}
