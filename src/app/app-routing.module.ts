import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersTableComponent } from './views/customers-table/customers-table.component';
import { TransactionsChartComponent } from './views/transactions-chart/transactions-chart.component';

const routes: Routes = [
  { path: '', component: CustomersTableComponent },
  // { path: 'tans', component: TransactionsChartComponent}
  { path: 'transaction/:customerId', component: TransactionsChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
