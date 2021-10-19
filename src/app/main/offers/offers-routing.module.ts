import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AreasComponent } from './index/index.component';


const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all',
          component: AddComponent ,
          data: {
              title: 'المناطق',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add',
          component: AreasComponent,
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
