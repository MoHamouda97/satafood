import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CuisinesComponent } from './cuisines.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'all',
          component: CuisinesComponent ,
          data: {
              title: 'اقسام المطاعم',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add',
          component: AddEditComponent,
          data: {
              title: 'اضافة اقسام المطاعم',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisinesRoutingModule { }
