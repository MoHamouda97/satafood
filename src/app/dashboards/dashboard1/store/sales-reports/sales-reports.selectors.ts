import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  SalesReportsState } from "./reducers/sales-reports.reducer";
import * as fromSalesReports from "./reducers/sales-reports.reducer";

export const selectSalesReportsState = createFeatureSelector<SalesReportsState>('SalesReports');

export const selectSalesReports = createSelector(
    selectSalesReportsState,
    fromSalesReports.selectAll
)
export const Loading = createSelector(
    selectSalesReportsState,
    fromSalesReports.selectIds
)
export const selectSalesReportsEntity = createSelector(
    selectSalesReports,
    sales => sales
)

export const selectTotalMonthSales = createSelector(
    selectSalesReports,
    sales => sales[0].monthorders
)

export const selectTotalWeekSales = createSelector(
    selectSalesReports,
    sales => sales[0]["weekorders"]
)

export const selectTotalMonthChart = createSelector(
    selectSalesReports,
    sales => sales[0]["monthordersForchart"]
)

export const selectTotalWeekChart = createSelector(
    selectSalesReports,
    sales => sales[0]["weekordersForchart"]
)
export const selectBestSeller = createSelector(
    selectSalesReports,
    sales => sales[0]["orderdetails"]
)
export const selectOrderPayment = createSelector(
    selectSalesReports,
    sales => sales[0]["OrderByPayment"]
)
export const selectMydues = createSelector(
    selectSalesReports,
    sales =>   (sales[0].Confirgrations != null) ? (sales[0].monthorders[0].Ordertotals * (  sales[0].Confirgrations[0].value / 100 )) : 0
     
    )
export const IsLoadings = createSelector(
    selectSalesReportsState,
    sales => sales.IsLoading
)
export const isSalesReportsLoaded = createSelector(
    selectSalesReportsState,
    state => state.SalesReportsLoaded
)

/*
monthorders: [{…}]
monthordersForchart: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
weekorders: [{…}]
weekordersForchart: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
*/