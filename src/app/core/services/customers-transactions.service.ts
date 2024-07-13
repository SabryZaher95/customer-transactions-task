import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersTransactions } from '../interfaces/customers-transactions';

@Injectable({
  providedIn: 'root'
})
export class CustomersTransactionsService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<CustomersTransactions[]> {
    return this.http.get<CustomersTransactions[]>(`${this.apiUrl}/transactions`);
  }
}
