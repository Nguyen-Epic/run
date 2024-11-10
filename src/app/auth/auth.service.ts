import { CustomerService } from './../customer.service';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated : boolean = false
constructor (private router: Router, private CustomerService: CustomerService){}
  loginAdmin(form:any){
    if(form.controls['email'].value == 'admin@gmail.com' && form.controls['password'].value== '30032005'){
      this.router.navigate(['dashboard'])
      this.isAuthenticated=true
    }else{
      alert('Tài khoản hoặc Mật khẩu không chính xác.')
      this.isAuthenticated= false
    }
  }
  loginCustomer(form:any){
    const customer = this.CustomerService.getCustomer(form.controls['email'].value, form.controls['password'].value)
    if(customer){
      this.router.navigate(['']);
    }else{
      alert('Vui lòng thử lại sau');
    }
  }



}
