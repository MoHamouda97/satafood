import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferViweModel } from 'src/services/offers/offersViewModel';
import { AddComponent } from './add/add.component';
import { OffersComponent } from './index/index.component';


const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all',
          component: OffersComponent ,
          data: {
              title: 'المناطق',
          },                
                      
      },
      { 
          path: 'add',
          component: AddComponent,
          data: {
              title: 'اضافة منطقة',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],providers:[]
})
export class OfferRoutingModule { }
