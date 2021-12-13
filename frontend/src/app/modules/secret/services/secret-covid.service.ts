import { Injectable } from '@angular/core';
import LabeledValues from "../../../models/LineChartDataDto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecretCovidService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:5000/api/SecretCovid/";

  public loadLineChart() {
    return this.http.get<LabeledValues>(this.url+"GetTimeline");
  }

  public loadPieChart() {
    return this.http.get<LabeledValues>(this.url+"GetStateMaxData");
  }
}
