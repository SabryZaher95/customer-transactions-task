import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/core/interfaces/customers';
import { CustomersTransactions } from 'src/app/core/interfaces/customers-transactions';
import { CustomersTransactionsService } from 'src/app/core/services/customers-transactions.service';
import { CustomersService } from 'src/app/core/services/customers.service';

interface CustomerWithTransactions extends Customers {
  transactions: CustomersTransactions[];
  totalAmount: number
}

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit{

  customersWithTransactions: CustomerWithTransactions[] = [];
  constructor(private _CustomersService: CustomersService,
    private _CustomersTransactions: CustomersTransactionsService,
    private router: Router)
    {}

  ngOnInit(): void {
    this.getCustomersWithTransactions();
  }

  getCustomersWithTransactions(){
    this._CustomersService.getCustomers().subscribe((customers: Customers[]) => {
      this._CustomersTransactions.getTransactions().subscribe((transactions: CustomersTransactions[]) => {
        this.customersWithTransactions = customers.map(customer => {
          const customerTransactions = transactions.filter(transaction => transaction.customer_id === customer.id);
          const totalAmount = customerTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
          return {
            ...customer,
            transactions: customerTransactions,
            totalAmount: totalAmount
          };
        })
      })
    })
  }

  viewTransaction(id: number){
    this.router.navigate(['/transaction', id])
  }
}
