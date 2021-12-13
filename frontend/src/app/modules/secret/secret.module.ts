import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretDashboardComponent } from './pages/secret-dashboard/secret-dashboard.component';
import {ChartsModule} from "../charts/charts.module";


@NgModule({
  declarations: [
    SecretDashboardComponent
  ],
  imports: [
    CommonModule,
    SecretRoutingModule,
    ChartsModule
  ]
})
export class SecretModule { }
