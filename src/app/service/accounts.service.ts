import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Accountdetails } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  credit(accountId: string, amount: number, description: string) {
    throw new Error('Method not implemented.');
  }
  debit(accountId: string, amount: number, description: string) {
    throw new Error('Method not implemented.');
  }
  transfer(accountId: string, accountDestination: string, amount: number, description: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  public getAccount(id: String, currentPage: number, pageSize: number):Observable<Accountdetails>{
    console.log(id)
    return this.http.get<Accountdetails>(`${environment.backendHost}/accounts/${id}/pageOperations`)
  }
}
