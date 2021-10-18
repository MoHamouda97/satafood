import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantCuisinesRoutingModule } from './restaurant-cuisines-routing.module';
import { RestaurantCuisinesComponent } from './restaurant-cuisines.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [RestaurantCuisinesComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RestaurantCuisinesRoutingModule
  ]
})
export class RestaurantCuisinesModule { }
