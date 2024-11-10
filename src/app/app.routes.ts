import { CustomerRegisterComponent } from './customer-register/customer-register.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'list',component:ProductListComponent,title:'Product-list'},
  {path:'cart/:id',component: CartComponent, title: ' Cart'},
  {path:'login',component:CustomerLoginComponent,title:'Login'},
  {path:'admin', component: AdminLoginComponent,title:'Admin'},
  {path:'register',component: CustomerRegisterComponent,title:'Register'},
  {path:'dashboard',component : DashboardComponent,title:'Dashboard', canActivate:[authGuard],
    children :[
      {path: 'product', component:ProductListComponent,title:'Product'},
      {path: 'user-list', component: UserListComponent, title:'User list'}]
  }
];
