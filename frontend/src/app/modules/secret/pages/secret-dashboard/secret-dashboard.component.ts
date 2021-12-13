import { Component, OnInit } from '@angular/core';
import LineChartDataDto from "../../../../models/LineChartDataDto";
import {SecretCovidService} from "../../services/secret-covid.service";

@Component({
  selector: 'app-secret-dashboard',
  templateUrl: './secret-dashboard.component.html',
  styleUrls: ['./secret-dashboard.component.scss']
})
export class SecretDashboardComponent implements OnInit {

  constructor(private service: SecretCovidService) { }

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
