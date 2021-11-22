
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, tap, filter, finalize } from 'rxjs/operators';
import { AppState } from 'src/app/apps/email/app.state';
import { select, Store } from '@ngrx/store';
import { loadExpensesCatMonthReports } from '../store/expenses-cat-month-reports/expenses-cat-month-reports.actions';
import { isExpensesCatMonthReportsLoaded } from '../store/expenses-cat-month-reports/expenses-cat-month-reports.selectors';

@Injectable()

export class ExpensesCatMonthReportsResolver implements Resolve<any> {
    loading = false;

    constructor(private stroe: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
        return this.stroe
            .pipe(
                select(isExpensesCatMonthReportsLoaded),
                tap(ExpensesCatMonthReportsLoaded => {
                    if (!this.loading && !ExpensesCatMonthReportsLoaded) {
                        this.loading = true;
                        this.stroe.dispatch(loadExpensesCatMonthReports())
                    }
                }),
                filter(ExpensesCatMonthReportsLoaded => ExpensesCatMonthReportsLoaded),
                first(),
                finalize(() => this.loading = false)
            )
    }

}