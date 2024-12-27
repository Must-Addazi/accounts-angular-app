import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {path:"customers",component:CustomersComponent},
  {path:"newCustomer",component:NewCustomerComponent},
  {path:"account",component:AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
