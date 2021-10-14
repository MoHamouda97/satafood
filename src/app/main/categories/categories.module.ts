import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { SliderComponent } from './slider/slider.component';
import { RestaurantareasComponent } from './restaurantareas/restaurantareas.component';


@NgModule({
  declarations: [SliderComponent, RestaurantareasComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
