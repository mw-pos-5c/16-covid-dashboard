import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import {NgChartsModule} from "ng2-charts";




@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  exports: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
  ]
})
export class ChartsModule { }
