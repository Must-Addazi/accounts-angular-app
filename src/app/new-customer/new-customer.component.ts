import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  public customerForm!:FormGroup
  
constructor(private customerService:CustomerService,private fb:FormBuilder, private router:Router){

}
  ngOnInit(): void {
  this.customerForm=this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
     email: [null, [Validators.required, Validators.email]],
  })
  }

public saveCustomer(){
 let customer=this.customerForm.value;
this.customerService.saveCustomer(customer).subscribe({
  next:(data)=>{
alert("customer saved succefully")
this.customerForm.reset()
this.router.navigateByUrl("/customers")
  },
  error:(err)=>{
    console.log(err)
  }
})
}
}
