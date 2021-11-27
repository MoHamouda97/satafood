import { Observable } from 'rxjs';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/apps/email/app.state';
import * as lang from './../../../settings/lang';
import { selectExpensesCatMonthReportsQuery } from './store/expenses-cat-month-reports/expenses-cat-month-reports.selectors';
import { selectExpensesCatReportsQuery } from './store/expenses-cat-reports/expenses-cat-reports.selectors';
import { selectExpensesReportsQuery } from './store/expenses-reports/expenses-reports.selectors';
import { selectIncomeExpensesReportEntity } from './store/income-expenses/income-expenses.selectors';
import { selectItemsReportsDetails, selectItemsReportsCategories } from './store/items-reports/items-reports.selectors';
import { selectLoansReportsQuery } from './store/loans-reports/loans-reports.selectors';
import { selectMonthReportsQuery, selectMonthReportsOffer } from './store/month-reports/month-reports.selectors';
import { selectMarketersOrders, selectPlatformsOrders, selectPaymenttypesOrders } from './store/other-reports/other-reports.selectors';
import { selectWeekReportsQuery, selectWeekReportsOffer } from './store/week-reports/week-reports.selectors';
import { selectTotalMonthSales, selectTotalWeekSales, selectTotalMonthChart, selectTotalWeekChart, selectBestSeller, selectOrderPayment, isSalesReportsLoaded, IsLoadings, selectMydues } from './store/sales-reports/sales-reports.selectors';
import { loadMonthReports } from './store/month-reports/month-reports.actions';
import { IsLoading, loadSalesReportss } from './store/sales-reports/sales-reports.actions';
import { BranchesService } from 'src/services/branches/branches.service';
import { Restuarant } from 'src/services/restaurants/RestaurantModel';
import { ReportsService } from 'src/services/reports/reports.service';
import { Confirgration } from './store/ReportsModel';

@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

  totMonthSales$: Observable<any>;
  totWeekSales$: Observable<any>;
  monthChart$: Observable<any>;
  weekChart$: Observable<any>;
  weekQueryChart$: Observable<any>;
  weekOfferChart$: Observable<any>;
  monthQueryChart$: Observable<any>;
  monthOfferChart$: Observable<any>;
  itemsDetails$: Observable<any>;
  itemsCategories$: Observable<any>;
  marketersOrders$: Observable<any>;
  platFormsOrders$: Observable<any>;
  payments$: Observable<any>;
  incomeExpenses$: Observable<any>;
  expenses$: Observable<any>;
  loans$: Observable<any>;
  expensesCat$: Observable<any>;
  expensesCatMonth$: Observable<any>;
loading : boolean;
  allWeekChartData: any = [];
  allMonthChartData: any = [];
  marketersOrders: any[] = [];
  platFormsOrders: any[] = [];
  payments: any[] = [];
  incomeExpenses: any[] = [];
  expensessTotal: number = 0;
  loansTotal: number = 0;
  BranchArray: Restuarant[] = [];

  incomeExpensesHeader: any[] = [
    'التاريخ',
    'الخصم',
    'الايراد',
    'الخدمة',
    'الضريبة',
    'التكلفة',
    'السلف',
    'الصافي',
    'التراكمي',
  ]

  monthColors: any[] = ['#4798e8', '#01c0c8'];

  lang: any = lang.ar
  ChangeBranch($event) {
    console.log( $event)
   this.store.dispatch(new loadSalesReportss($event));
   this.loading = true


  }
  constructor(private store: Store<AppState>,public branchlist:BranchesService,public reportService:ReportsService) {
    const data =  this.branchlist.getRestaurant(localStorage.getItem("RestaurantId"))
    data.subscribe(res => {
      console.log(res)
      this.BranchArray = res

    })
   //
  }
 
   ngOnInit() {

    this.totMonthSales$ = this.store.pipe(select(selectTotalMonthSales));
  
    this.totWeekSales$ = this.store.pipe(select(selectTotalWeekSales));

    this.monthChart$ = this.store.pipe(select(selectTotalMonthChart));
    this.weekChart$ = this.store.pipe(select(selectTotalWeekChart));
     this.store.pipe(select(IsLoadings)).subscribe(data=>{
      console.log(data)
     this.loading = data
    })
    // this.weekQueryChart$ = this.store.pipe(select(selectWeekReportsQuery))
    // this.weekQueryChart$.subscribe(res => this.allWeekChartData = res);

    // this.weekOfferChart$ = this.store.pipe(select(selectWeekReportsOffer));
    // this.weekOfferChart$.subscribe(
    //   res => {
    //     const sushiData = { SumTotal: res['سوشي'], catname: 'عروض السوشي'};
    //     const chineseData = { SumTotal: res['صيني'], catname: 'عروض الصيني'};
    //     this.allWeekChartData = [sushiData, chineseData, ...this.allWeekChartData];
    //   });

    // this.monthQueryChart$ = this.store.pipe(select(selectMonthReportsQuery));
    // this.monthQueryChart$.subscribe(res => this.allMonthChartData = res);

    // this.monthOfferChart$ = this.store.pipe(select(selectMonthReportsOffer));
    // this.monthOfferChart$.subscribe(
    //   res => {
    //     const sushiData = { SumTotal: res['سوشي'], catname: 'عروض السوشي'};
    //     const chineseData = { SumTotal: res['صيني'], catname: 'عروض الصيني'};
    //     this.allMonthChartData = [sushiData, chineseData, ...this.allMonthChartData];
    //   }
    // )

    this.itemsDetails$ = this.store.pipe(select(selectBestSeller));
    // this.itemsCategories$ = this.store.pipe(select(selectItemsReportsCategories));
    this.expenses$ = this.store.pipe(select(selectMydues));
    this.expenses$.subscribe(res => {
      if (res != null){
       console.log(res) 
      }
       });

    // this.marketersOrders$ = this.store.pipe(select(selectMarketersOrders));
    // this.marketersOrders$.subscribe(res => this.marketersOrders = res);
    // this.marketersOrders = this.marketersOrders.filter(m => Boolean(m["marketer"]))
    
    // this.platFormsOrders$ = this.store.pipe(select(selectPlatformsOrders));
    // this.platFormsOrders$.subscribe(res => this.platFormsOrders = res);
    // this.platFormsOrders = this.platFormsOrders.filter(p => Boolean(p["platform"]))

    this.payments$ = this.store.pipe(select(selectOrderPayment));
    this.payments$.subscribe(res => { this.payments = res  });
    this.payments =    this.payments.filter(p => Boolean(p["paymenttype"]))
    
  
    // this.incomeExpenses$ = this.store.pipe(select(selectIncomeExpensesReportEntity));
    // this.incomeExpenses$.subscribe( res => this.incomeExpenses = this.moneyFlow(res[0]["allsales"], res[0]["Expenses"], res[0]["StaffPayments"]) )
    

    // this.loans$ = this.store.pipe(select(selectLoansReportsQuery));
    // this.loans$.subscribe(res => (res.length > 0) ? this.loansTotal = res[0]["SumTotal"] : this.loansTotal = 0);

    // this.expensesCat$ = this.store.pipe(select(selectExpensesCatReportsQuery));
    // this.expensesCatMonth$ = this.store.pipe(select(selectExpensesCatMonthReportsQuery));
  }
  ngOnChanges(changes: SimpleChanges) {
console.log(changes)
  }
  moneyFlow(income: any[], expenses: any[], loans: any[]) {
    let incomeExpenses: any [] = [];

    let expense = income.map(val => {
      const index = expenses.findIndex(d => d.modifiedd == val["modifiedd"]);
      return (index > -1) ? {...val, expense: expenses[index]["SumTotal"]} : {...val, expense: 0};
    });

    let loan = expense.map(val => {
      const index = loans.findIndex(d => d.modifiedd == val["modifiedd"]);
      return (index > -1) ? {...val, loan: loans[index]["SumTotal"]} : {...val, loan: 0};
    });

    let net = loan.map(val => {
      return {...val, net: val["SumTotal"] - (val["expense"] + val["loan"]) }
    })

    net.forEach((val, index) => {
      let existing = (index == 0) ? val["net"] : val["net"] + incomeExpenses[index - 1]["existing"];
      let moneyFlow = Object.assign({}, val, {existing: existing});
      incomeExpenses = [...incomeExpenses, moneyFlow]
    })

    return incomeExpenses;
  }

}
