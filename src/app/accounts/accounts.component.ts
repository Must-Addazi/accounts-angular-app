import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountsService } from '../service/accounts.service';
import { Accountdetails } from '../models/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
operationFromGroup!: FormGroup;
handlgetAccount() {
  let id= this.accountForm.value.accountId
  this.accountsService.getAccount(id,this.currentPage,this.pageSize).subscribe({
    next:(data)=>{
  this.accountPage=data
    },
    error:(err)=>{
   this.errorMessage=err.message
    }
  })
}
gotoPage(page: number) {
  this.currentPage=page;
  this.handlgetAccount();
}

  public accountForm! :FormGroup
  public currentPage:number=1
  public pageSize:number=5
  public accountPage!:Accountdetails
  errorMessage! :string ;
  ngOnInit(): void {
   this.accountForm=this.fb.group({
    accountId:this.fb.control('')
   })
   this.operationFromGroup=this.fb.group({
    operationType : this.fb.control(null),
    amount : this.fb.control(0),
    description : this.fb.control(null),
    accountDestination : this.fb.control(null)
  })
  }
   constructor(private fb:FormBuilder,private accountsService:AccountsService){

   }

}
