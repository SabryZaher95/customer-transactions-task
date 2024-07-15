import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { CustomersTransactions } from 'src/app/core/interfaces/customers-transactions';
import { CustomersTransactionsService } from 'src/app/core/services/customers-transactions.service';

@Component({
  selector: 'app-transactions-chart',
  templateUrl: './transactions-chart.component.html',
  styleUrls: ['./transactions-chart.component.scss'],
})
export class TransactionsChartComponent implements OnInit, OnDestroy {
  customerId: number | null = null;
  transactions: CustomersTransactions[] = [];

  constructor(
    private route: ActivatedRoute,
    private _CustomersTransactionsService: CustomersTransactionsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.customerId = +params['id'];
      this.loadTransactions();
    });
  }

  chart?: Chart;

  loadTransactions(): void {
    if (this.customerId !== null) {
      this._CustomersTransactionsService
        .getTransactions()
        .subscribe((transactions) => {
          this.transactions = transactions.filter(
            (transaction) => transaction.customer_id === this.customerId
          );
          this.createChart();
        });
    }
  }

  //---------- Function to draw the chart --------------
  createChart(): void {
    const canvas = document.getElementById('MyChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      if (this.chart) {
        this.chart.destroy();
      }
      const dates = this.transactions.map((transaction) => transaction.date);
      const amounts = this.transactions.map(
        (transaction) => transaction.amount
      );

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Transaction Amount',
              data: amounts,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            x: { display: true, title: { display: true, text: 'Date' } },
            y: { display: true, title: { display: true, text: 'Amount' } },
          },
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
