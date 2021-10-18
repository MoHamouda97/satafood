import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BranchesZonesComponent } from './branches-zones.component';


const routes: Routes = [{
  path: '',
  children: [
      {
          path: 'all/:id',
          component: BranchesZonesComponent ,
          data: {
              title: 'مناطق توزيع  الفرع',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add/:id',
          component: AddEditComponent,
          data: {
              title: 'اضافة مناطق توزيع  الفرع ',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesZonesRoutingModule { }
