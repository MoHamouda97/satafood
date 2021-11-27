import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';
import { AppState } from 'src/app/apps/email/app.state';
import { selectTotalMonthSales } from '../../dashboard1/store/sales-reports/sales-reports.selectors';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html'
})
export class InfocardComponent implements OnInit {
  @Input('totMonthSales') totMonthSales?: any = [];
  @Input('totWeekSales') totWeekSales?: any = [];

  lang: any = lang.ar;
  $totMonthSales: any = [];
  $totWeekSales: any = [];

  constructor(private store: Store<AppState>,) { console.log(this.totMonthSales)}

  ngOnInit() {
if ((this.totMonthSales) != null) {
    this.totMonthSales = (Boolean(this.totMonthSales[0]["Ordertotals"])) ? this.totMonthSales[0]["Ordertotals"].toFixed(2) : 0;
    this.totWeekSales = (Boolean(this.totWeekSales[0]["Ordertotals"])) ? this.totWeekSales[0]["Ordertotals"].toFixed(2) : 0;
}
  }
  ngOnChanges(changes) {
if(changes.totWeekSales.firstChange == false) {
this.totMonthSales = (Boolean(changes.totMonthSales.currentValue[0]["Ordertotals"])) ? changes.totMonthSales.currentValue[0]["Ordertotals"].toFixed(2) : 0;
this.totWeekSales = (Boolean(changes.totWeekSales.currentValue[0]["Ordertotals"])) ? changes.totWeekSales.currentValue[0]["Ordertotals"].toFixed(2) : 0;
}

}
}
