import { catchError, concatMap, finalize, map, mergeMap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SalesReportsActions } from './actions.types';
import { ReportsService } from 'src/services/reports/reports.service';
import { ActionTypes, IsLoading, loadSalesReportss, SalesReportsLoaded } from './sales-reports.actions';
import { BranchesService } from 'src/services/branches/branches.service';
import { SalesReportsReducer } from './reducers/sales-reports.reducer';
import { Reports } from '../ReportsModel';


@Injectable()

export class SalesReportsEffect {
 id;
 updatePresentations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionTypes.GetBranches),
      concatMap(() =>
        this.ResturantService.getRestaurantobserv(localStorage.getItem("RestaurantId")).pipe(
         map(data => {
             console.log(data)
            // fileUpload dispatches loadPresentations anyway, is there a need to do it twice?
              return  new loadSalesReportss(data[0].id);
           
          })
        )
      )
 )});
  ;
    loadSalesReports$ = createEffect(
        () => { return this.actions$
            .pipe(
                ofType(ActionTypes.loadSalesReports),
               
                mergeMap(action  => {
                    var data = action as any
                      return this.service.orderReport(data.BranchId) ;
                     
                }),
                map(rep => { 
                    let SalesReports: Reports[] = [{id: 1, ...rep}]
                    return   new  SalesReportsLoaded(SalesReports,false)
                                                        
                }),
                
                    finalize(() => new IsLoading(false))
            ) 
            })
          
    constructor(private actions$: Actions, private service: ReportsService, private ResturantService: BranchesService) {
  
    }
}
