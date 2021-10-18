import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all/:id',
          component: IndexComponent ,
          data: {
            title: 'فروع المطعم',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add/:id',
          component: AddComponent,
          data: {
              title: 'اضافة فرع',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
