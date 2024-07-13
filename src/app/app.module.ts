import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersTableComponent } from './views/customers-table/customers-table.component';
import { TransactionsChartComponent } from './views/transactions-chart/transactions-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersTableComponent,
    TransactionsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
