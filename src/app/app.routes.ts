import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Contactus } from './components/contactus/contactus';
import { Careers } from './components/careers/careers';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { UserDetails } from './components/user-details/user-details';
import { ProductDetails } from './components/product-details/product-details';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { teacherGuard } from './guards/teacher-guard-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ]
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate: [canExitGuard]
  },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: UserDetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: ProductDetails },
  {
    path: 'uploadvideos',
    component: UploadVideos,
    canActivate: [teacherGuard]
  },
];
