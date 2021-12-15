import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewOrdersComponent } from './new-orders.component';


const routes: Routes = [    {
  path: '',
  children: [
      {
          path: 'new',
          component: NewOrdersComponent,
          data: {
              title: 'تقرير الطلبات',
          }                
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOrdersRoutingModule { }
