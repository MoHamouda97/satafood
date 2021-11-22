import { concatMap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ExpensesCatMonthReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { ExpensesCatMonthReportsLoaded } from './expenses-cat-month-reports.actions';

@Injectable()

export class ExpensesCatMonthReportsEffect {

    loadExpensesCatMonthReports$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(ExpensesCatMonthReportsActions.loadExpensesCatMonthReports),
                concatMap(action => this.service.ExpensesCatMonthReport()),
                map(rep => {
                    let ExpensesCatMonthReports: any[] = [{id: 1, ...rep}]
                    return ExpensesCatMonthReports                                       
                }),
                map(ExpensesCatMonthReports => ExpensesCatMonthReportsLoaded({ExpensesCatMonthReports}))
            ) 
    )

    constructor(private actions$: Actions, private service: ReportsService) {}
}
