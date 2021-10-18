import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { WorkingTimesComponent } from './working-times.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'all/:id',
          component: WorkingTimesComponent ,
          data: {
              title: 'مواعيد  الفرع',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add/:id',
          component: AddEditComponent,
          data: {
              title: 'اضافة ميعاد للفرع',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingTimesRoutingModule { }
