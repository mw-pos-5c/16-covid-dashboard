import { Component, OnInit } from '@angular/core';
import {CovidService} from "../../services/covid.service";
import LineChartDataDto from "../../models/LineChartDataDto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public service: CovidService) { }

  lineChartData: LineChartDataDto = {labels: [], values: []};
  pieChartData: LineChartDataDto = {labels: [], values: []};

  ngOnInit(): void {
    this.service.loadLineChart().subscribe(value => {
      this.lineChartData = value;
    });

    this.service.loadPieChart().subscribe(value => {
      this.pieChartData = value;
    });
  }


}
