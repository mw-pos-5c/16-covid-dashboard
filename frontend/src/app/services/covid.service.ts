import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import LabeledValues from "../models/LineChartDataDto";

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:5000/api/Covid/";



  public loadLineChart() {
      return this.http.get<LabeledValues>(this.url+"GetTimeline");
  }

  public loadPieChart() {
    return this.http.get<LabeledValues>(this.url+"GetStateSumData");
  }


}
