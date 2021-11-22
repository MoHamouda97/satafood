import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ExpensesCatMonthReportsState } from "./reducers/expenses-cat-month-reports.reducer";
import * as fromExpensesCatMonthReports from "./reducers/expenses-cat-month-reports.reducer";

export const selectExpensesCatMonthReportsState = createFeatureSelector<ExpensesCatMonthReportsState>('ExpensesCatMonthReports');

export const selectExpensesCatMonthReports = createSelector(
    selectExpensesCatMonthReportsState,
    fromExpensesCatMonthReports.selectAll
)

export const selectExpensesCatMonthReportsEntity = createSelector(
    selectExpensesCatMonthReports,
    ExpensesCatMonth => ExpensesCatMonth
)

export const selectExpensesCatMonthReportsQuery = createSelector(
    selectExpensesCatMonthReports,
    ExpensesCatMonth => ExpensesCatMonth[0]['query']
)

export const selectExpensesCatMonthReportsOffer = createSelector(
    selectExpensesCatMonthReports,
    ExpensesCatMonth => ExpensesCatMonth[0]['offerdetailsarray']
)

export const isExpensesCatMonthReportsLoaded = createSelector(
    selectExpensesCatMonthReportsState,
    state => state.ExpensesCatMonthReportsLoaded
)