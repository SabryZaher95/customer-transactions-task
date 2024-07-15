import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersTransactions } from '../interfaces/customers-transactions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersTransactionsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<CustomersTransactions[]> {
    return this.http.get<CustomersTransactions[]>(`${this.apiUrl}/transactions`);
  }
}
