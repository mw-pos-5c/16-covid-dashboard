import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {


  @Input() set dataLabels(value: string[]) {
    this.pieChartData.labels = value;
    this.chart?.update();
  }

  @Input() set dataSource(value: number[]) {
    this.pieChartData.datasets[0].data = value;
    this.chart?.update();
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [ {
      data: []
    } ]
  };

  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  pieChartType: ChartType = 'pie';

}
