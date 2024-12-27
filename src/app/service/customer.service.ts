import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http:HttpClient) { }
  public getCustomers():Observable<Array<Customer>>{
   return this.http.get<Array<Customer>>(`${environment.backendHost}/customers`)
  }
  public saveCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${environment.backendHost}/savecustomer`,customer)
  }
  public deleteCustomer(id:number){
    return this.http.delete(`${environment.backendHost}/deletecustomer/${id}`)
  }
  public searchCustomer(key:string):Observable<Array<Customer>>{
    const params= new HttpParams().set('keyword',key)
    return this.http.get<Array<Customer>>(`${environment.backendHost}/customers/search`,{params})
  }
}
