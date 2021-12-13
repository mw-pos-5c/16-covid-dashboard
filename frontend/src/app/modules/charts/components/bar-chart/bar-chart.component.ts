import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() set chartLabel(value: string) {
    this.barChartData.datasets[0].label = value;
    this.chart?.update();
  }

  @Input() set dataSource(value: number[]) {
    this.barChartData.datasets[0].data = value;
    this.chart?.update();
  }
  @Input() set dataLabels(value: string[]) {
    this.barChartData.labels = value;
    this.chart?.update();
  }


  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '' },
    ]
  };

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
  public barChartType: ChartType = 'bar';

}
