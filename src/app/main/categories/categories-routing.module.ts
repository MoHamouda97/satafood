import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './add/edit/edit.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all',
          component: IndexComponent ,
          data: {
              title: 'الاقسام الرئيسية',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add',
          component: EditComponent,
          data: {
              title: 'اضافة القسم الرئيسي',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
