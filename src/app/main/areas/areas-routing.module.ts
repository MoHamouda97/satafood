import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AreasComponent } from './areas.component';


const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all',
          component: AreasComponent ,
          data: {
              title: 'المناطق',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add',
          component: AddEditComponent,
          data: {
              title: 'اضافة منطقة',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
