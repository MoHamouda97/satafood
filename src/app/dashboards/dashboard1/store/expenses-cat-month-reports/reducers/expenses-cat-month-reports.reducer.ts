import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ExpensesCatMonthReportsActions } from "../actions.types";

export interface ExpensesCatMonthReportsState extends EntityState<any> {
    ExpensesCatMonthReportsLoaded: boolean
}

export const adapter = createEntityAdapter<any>({
    selectId: ExpensesCatMonthReports => ExpensesCatMonthReports.id
})

export const initExpensesCatMonthReportsState = adapter.getInitialState({
    ExpensesCatMonthReportsLoaded: false
})

export const ExpensesCatMonthReportsReducer = createReducer(
    initExpensesCatMonthReportsState,
    on(ExpensesCatMonthReportsActions.ExpensesCatMonthReportsLoaded, (state, action) => adapter.addAll(action.ExpensesCatMonthReports, {...state, ExpensesCatMonthReportsLoaded: true})),
)

export const {selectAll} = adapter.getSelectors();