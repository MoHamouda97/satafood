import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Reports } from "../../ReportsModel";
import { SalesReportsActions } from "../actions.types";
import { ActionsUnion, ActionTypes } from "../sales-reports.actions";

export interface SalesReportsState extends EntityState<Reports> {
    SalesReportsLoaded: boolean,
    IsLoading: boolean,

}
var array : any[] 
export const Big = array;

export const adapter = createEntityAdapter<Reports>({
    selectId: SalesReports => SalesReports.id,
    
})
export const adapterPost = createEntityAdapter<Reports>({
  selectId: SalesReports => SalesReports.id,
  
})
export const initSalesReportsState = adapter.getInitialState({
    SalesReportsLoaded: false
})

export function SalesReportsReducer(state = initSalesReportsState, action: ActionsUnion) {
    console.log(action);
    switch (action.type) {
      case ActionTypes.SalesReportsLoaded:
        console.log(state)
        return  adapter.addAll(action.SalesReports,
                          {...state, SalesReportsLoaded: true,IsLoading:false});

                          case ActionTypes.loadSalesReports:
                            console.log(state)
                            return  adapter.addOne(action.BranchId as any,
                              {...state, SalesReportsLoaded: true,IsLoading:true});
                    
                        

      case ActionTypes.IsLoading:
         
           
        return  adapter.addAll(action.bool as any,
             {...state, SalesReportsLoaded: action.bool})
        ;
  
      default:
        return state;
    }
  }


export const {selectIds} = adapter.getSelectors();
export const {selectAll} = adapter.getSelectors();
