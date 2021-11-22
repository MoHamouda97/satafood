import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
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
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'الرئيسية',
        }
        ,
        resolve: {
          // SalesReports: SalesReportsResolver,
          // ItemsReports: ItemsReportsResolver,
          // MonthReports: MonthReportsResolver,
          // WeekReports: WeekReportsResolver,
          // OtherReports: OtherReportsResolver,
          // IncomeExpensesReport: IncomeExpensesReportResolver,
          // ExpensesReports: ExpensesReportsResolver,
          // LoansReports: LoansReportsResolver,
          // ExpensesCatReports: ExpensesCatReportsResolver,
          // ExpensesCatMonthReports: ExpensesCatMonthReportsResolver,
        }   
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 2' }
          ]
        }
      },
      {
        path: 'dashboard3',
        component: Dashboard3Component,
        data: {
          title: 'Dashboard 3',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 3' }
          ]
        }
      }
    ]
  }
];
