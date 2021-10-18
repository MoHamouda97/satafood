import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { TabsComponent } from './tabs/tabs.component';


const routes: Routes = [{
  path: '',
  children: [
      {
          path: 'all/:id',
          component: IndexComponent ,
          data: {
              title: 'قائمة المطعم الرئيسية',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add/:id/:ResId',
          component: TabsComponent,
          data: {
              title: 'اضافة اطباق واقسام القائمة ',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinMenuRoutingModule { }
