import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersTableComponent } from './views/customers-table/customers-table.component';
import { TransactionsChartComponent } from './views/transactions-chart/transactions-chart.component';
import { SearchPipe } from './core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './views/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersTableComponent,
    TransactionsChartComponent,
    SearchPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
