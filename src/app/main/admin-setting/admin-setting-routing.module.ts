import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSettingComponent } from './admin-setting.component';


const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'all',
          component: AdminSettingComponent ,
          data: {
              title: 'الاعدادات',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      }       
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSettingRoutingModule { }
