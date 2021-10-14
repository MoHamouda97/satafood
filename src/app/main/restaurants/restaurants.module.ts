import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { EditComponent } from './add/edit/edit.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [EditComponent, IndexComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
