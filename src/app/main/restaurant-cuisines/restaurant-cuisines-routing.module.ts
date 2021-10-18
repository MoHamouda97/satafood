import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { RestaurantCuisinesComponent } from './restaurant-cuisines.component';


const routes: Routes = [{
  path: '',
  children: [
      {
          path: 'all/:id',
          component: RestaurantCuisinesComponent ,
          data: {
              title: 'انواع الطعام',
          },                
          resolve: {
              //offers: AllOffersResolver,
          }                
      },
      {
          path: 'add/:id',
          component: AddComponent,
          data: {
              title: 'اضافة انواع الطعام ',
          }, 
                                        
      }          
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantCuisinesRoutingModule { }
