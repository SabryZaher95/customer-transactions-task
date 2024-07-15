import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersTableComponent } from './views/customers-table/customers-table.component';
import { TransactionsChartComponent } from './views/transactions-chart/transactions-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CustomersTableComponent},
  { path: 'transaction/:id', component: TransactionsChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
