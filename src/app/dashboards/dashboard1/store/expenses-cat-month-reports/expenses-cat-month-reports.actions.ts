import { createAction, props } from '@ngrx/store';

export const loadExpensesCatMonthReports = createAction(
    '[Login Resolver] Load ExpensesCatMonthReports'
)

export const ExpensesCatMonthReportsLoaded = createAction(
    '[Load ExpensesCatMonthReports Effect] ExpensesCatMonthReports Loaded',
    props<{ExpensesCatMonthReports: any}>()
)