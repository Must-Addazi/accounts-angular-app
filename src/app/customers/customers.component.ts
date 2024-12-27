import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
deleteCustomer(id: number) {
  let conf = confirm("Are you sure?");
    if(!conf) return;
    this.customerService.deleteCustomer(id).subscribe({
      next:()=>{
       this.handelsearchCustomer()
      }
    })
}
  public customers!:Array<Customer>
  public searchCustomerFormGroup!:FormGroup
  public keyword!:string
  constructor( private customerService:CustomerService ,private fb:FormBuilder){
  }
  ngOnInit(): void {
    this.searchCustomerFormGroup=this.fb.group({
      keyword:this.fb.control('')
    })
  this.customerService.getCustomers().subscribe({
    next:(data)=>{
      this.customers=data
    },
    error:()=>{
      console.log(this.customers)
    }
  })
  }
public handelsearchCustomer(){
  this.keyword=this.searchCustomerFormGroup.value.keyword
  this.customerService.searchCustomer(this.keyword).subscribe({
    next:(data)=>{
      this.customers=data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}


}
