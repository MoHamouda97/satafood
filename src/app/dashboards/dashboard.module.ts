import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

import {
  InfocardComponent,
  ChatComponent,
  CommentComponent,
  TopsellComponent,
  ActivityComponent,
  BrowserStatsComponent,
  DeviceVisitsComponent,
  EarningsComponent,
  FeedsComponent,
  InfoBoxComponent,
  MixstatsComponent,
  ProductInfoComponent,
  ProjectComponent,
  ReviewComponent,
  SalesComponent,
  SalesIncomeComponent,
  TasklistComponent,
  UserProfileComponent,
  UserDetailsComponent,
  VisitorsComponent,
  VisitsBounceComponent,
  WeathercardComponent,
  WelcomeComponent
} from './dashboard-components';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/module/shared.module';
import { ExpensesCatMonthReportsResolver } from './dashboard1/services/expenses-cat-month-reports.resolver';
import { ExpensesCatReportsResolver } from './dashboard1/services/expenses-cat-reports.resolver';
import { ExpensesReportsResolver } from './dashboard1/services/expenses-reports.resolver';
import { IncomeExpensesReportResolver } from './dashboard1/services/income-expenses.resolver';
import { ItemsReportsResolver } from './dashboard1/services/items-reports.resolver';
import { LoansReportsResolver } from './dashboard1/services/loans-reports.resolver';
import { MonthReportsResolver } from './dashboard1/services/month-reports.resolver';
import { OtherReportsResolver } from './dashboard1/services/other-reports.resolver';
import { SalesReportsResolver } from './dashboard1/services/sales-reports.resolver';
import { WeekReportsResolver } from './dashboard1/services/week-reports.resolver';
import { ExpensesCatMonthReportsEffect } from './dashboard1/store/expenses-cat-month-reports/expenses-cat-month-reports.effects';
import { ExpensesCatMonthReportsReducer } from './dashboard1/store/expenses-cat-month-reports/reducers/expenses-cat-month-reports.reducer';
import { ExpensesCatReportsEffect } from './dashboard1/store/expenses-cat-reports/expenses-cat-reports.effects';
import { ExpensesCatReportsReducer } from './dashboard1/store/expenses-cat-reports/reducers/expenses-cat-reports.reducer';
import { ExpensesReportsEffect } from './dashboard1/store/expenses-reports/expenses-reports.effects';
import { ExpensesReportsReducer } from './dashboard1/store/expenses-reports/reducers/expenses-reports.reducer';
import { IncomeExpensesReportEffect } from './dashboard1/store/income-expenses/income-expenses.effects';
import { IncomeExpensesReportReducer } from './dashboard1/store/income-expenses/reducers/income-expenses.reducer';
import { ItemsReportsEffect } from './dashboard1/store/items-reports/items-reports.effects';
import { ItemsReportsReducer } from './dashboard1/store/items-reports/reducers/items-reports.reducer';
import { LoansReportsEffect } from './dashboard1/store/loans-reports/loans-reports.effects';
import { LoansReportsReducer } from './dashboard1/store/loans-reports/reducers/loans-reports.reducer';
import { MonthReportsEffect } from './dashboard1/store/month-reports/month-reports.effects';
import { MonthReportsReducer } from './dashboard1/store/month-reports/reducers/month-reports.reducer';
import { OtherReportsEffect } from './dashboard1/store/other-reports/other-reports.effects';
import { OtherReportsReducer } from './dashboard1/store/other-reports/reducers/other-reports.reducer';
import { SalesReportsReducer } from './dashboard1/store/sales-reports/reducers/sales-reports.reducer';
import { SalesReportsEffect } from './dashboard1/store/sales-reports/sales-reports.effects';
import { WeekReportsReducer } from './dashboard1/store/week-reports/reducers/week-reports.reducer';
import { WeekReportsEffect } from './dashboard1/store/week-reports/week-reports.effects';
import { ItemsReportsComponent } from './dashboard-components/items-reports/items-reports.component';
import { StatsInfoComponent } from './dashboard-components/stats-info/stats-info.component';
import { BarChartComponent } from './dashboard-components/bar-chart/bar-chart.component';
import { InfoTblComponent } from './dashboard-components/info-tbl/info-tbl.component';
import { NzAlertModule, NzSpinModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    NzSpinModule,
NzAlertModule,
    NgxDatatableModule,
    EffectsModule.forFeature([
      SalesReportsEffect,
      MonthReportsEffect,
      WeekReportsEffect,
      OtherReportsEffect,
      IncomeExpensesReportEffect,
      ExpensesReportsEffect,
      LoansReportsEffect,
      ExpensesCatReportsEffect,
      ExpensesCatMonthReportsEffect,
    ]),
    StoreModule.forFeature('SalesReports', SalesReportsReducer), 
    
    StoreModule.forFeature('ItemsReports', ItemsReportsReducer), 
    StoreModule.forFeature('MonthReports', MonthReportsReducer), 
    StoreModule.forFeature('WeekReports', WeekReportsReducer), 
    StoreModule.forFeature('OtherReports', OtherReportsReducer),
    StoreModule.forFeature('IncomeExpensesReport', IncomeExpensesReportReducer), 
    StoreModule.forFeature('ExpensesReports', ExpensesReportsReducer), 
    StoreModule.forFeature('LoansReports', LoansReportsReducer), 
    StoreModule.forFeature('ExpensesCatReports', ExpensesCatReportsReducer),
    StoreModule.forFeature('ExpensesCatMonthReports', ExpensesCatMonthReportsReducer),
    SharedModule
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    InfocardComponent,
    ChatComponent,
    CommentComponent,
    TopsellComponent,
    ActivityComponent,
    BrowserStatsComponent,
    DeviceVisitsComponent,
    EarningsComponent,
    FeedsComponent,
    InfoBoxComponent,
    StatsInfoComponent,
    MixstatsComponent,
    ProductInfoComponent,
    ProjectComponent,
    BarChartComponent,
    ReviewComponent,
    SalesComponent,
    SalesIncomeComponent,
    InfoTblComponent,
    
    TasklistComponent,
    UserProfileComponent,
    UserDetailsComponent,
    VisitorsComponent,
    VisitsBounceComponent,
    WeathercardComponent,
    WelcomeComponent,
    ItemsReportsComponent
  ],
  providers: [
    SalesReportsResolver,
    //ItemsReportsResolver,
    //MonthReportsResolver,
    //WeekReportsResolver,
    //OtherReportsResolver,
    //IncomeExpensesReportResolver,
    ExpensesReportsResolver,
    LoansReportsResolver,
    ExpensesCatReportsResolver,
    ExpensesCatMonthReportsResolver,
  ]
})
export class DashboardModule {}
