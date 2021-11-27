import { Action, createAction, props } from '@ngrx/store';
import { Reports } from '../ReportsModel';

export enum ActionTypes {
    GetBranches = '[Login Resolver] Load GetBranches',
    loadSalesReports = '[Login Resolver] Load SalesReports',
    IsLoading = '[Load SalesReports Effect] SalesReports Loadeds',
    SalesReportsLoaded = '[Load SalesReports Effect] SalesReports Loaded'
  }

export class GetBranches implements Action {
    readonly type = ActionTypes.GetBranches;  
  }

export class loadSalesReportss implements Action {
    readonly type = ActionTypes.loadSalesReports;  
    constructor(public BranchId: string) {}
  }
  export class IsLoading implements Action {
    readonly type = ActionTypes.IsLoading;  
    constructor(public bool: Boolean) {}
  }
  export class SalesReportsLoaded implements Action {
    readonly type = ActionTypes.SalesReportsLoaded;  
    constructor(public SalesReports: Reports[],public Loading:Boolean) {}
  }

export type ActionsUnion =  GetBranches |  loadSalesReportss|  IsLoading |   SalesReportsLoaded;
