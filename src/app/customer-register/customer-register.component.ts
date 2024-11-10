import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-customer-register',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css',
})
export class CustomerRegisterComponent {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      comfirm_password: ['', Validators.required],
    });
  }
  onRegister() {
    console.log(this.registerForm.value);
    this.customerService.AddCustomer(this.registerForm);
  }
}
