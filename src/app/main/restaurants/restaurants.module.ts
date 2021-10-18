import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { EditComponent } from './add/edit/edit.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [EditComponent, IndexComponent],
  imports: [
    CommonModule,
    SharedModule,

    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
