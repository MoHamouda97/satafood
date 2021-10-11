import { Routes } from "@angular/router";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { AllComponent } from "./all/all.component";


export const CitiesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllComponent,
                data: {
                    title: 'المدن',
                },                
                resolve: {
                    //offers: AllOffersResolver,
                }                
            },
            {
                path: 'add',
                component: AddEditComponent,
                data: {
                    title: 'اضافة مدينة',
                }, 
                                              
            },
            {
                path: 'edit/:id',
                component: AddEditComponent,
                data: {
                    title: 'تعديل مدينة',
                },                              
            }            
        ]
    }
]