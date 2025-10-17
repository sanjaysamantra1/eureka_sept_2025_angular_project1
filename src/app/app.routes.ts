import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Contactus } from './components/contactus/contactus';
import { Careers } from './components/careers/careers';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'careers', component: Careers },
  { path: 'contactus', component: Contactus },
];
