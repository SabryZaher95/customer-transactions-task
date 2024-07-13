import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { CustomersTransactions } from 'src/app/core/interfaces/customers-transactions';
import { CustomersTransactionsService } from 'src/app/core/services/customers-transactions.service';

@Component({
  selector: 'app-transactions-chart',
  templateUrl: './transactions-chart.component.html',
  styleUrls: ['./transactions-chart.component.scss']
})
export class TransactionsChartComponent implements OnInit{

  customerId: number | null = null;
  transactions: CustomersTransactions[] = [];

  constructor(private route: ActivatedRoute, private _CustomersTransactionsService: CustomersTransactionsService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      debugger;
      this.customerId = +params['customerId'];
      this.loadTransactions();
    });
  }

  chart: any;

  loadTransactions(): void {
    if (this.customerId !== null) {
      this._CustomersTransactionsService.getTransactions().subscribe(transactions => {
        this.transactions = transactions.filter(transaction => transaction.customer_id === this.customerId);
        this.createChart();
      });
    }
  }

  /*createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }*/

  createChart(): void {
    const canvas = document.getElementById('transactionsChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      const dates = this.transactions.map(transaction => transaction.date);
      const amounts = this.transactions.map(transaction => transaction.amount);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Transaction Amount',
            data: amounts,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
          }]
        },
        options: {
          scales: {
            x: { display: true, title: { display: true, text: 'Date' } },
            y: { display: true, title: { display: true, text: 'Amount' } }
          }
        }
      });
    }
  }

}
