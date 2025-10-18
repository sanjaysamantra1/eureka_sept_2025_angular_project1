import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Contactus } from './components/contactus/contactus';
import { Careers } from './components/careers/careers';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { UserDetails } from './components/user-details/user-details';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'careers', component: Careers },
  { path: 'contactus', component: Contactus },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: UserDetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: ProductDetails },
];
