import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidersRoutingModule } from './sliders-routing.module';
import { EditComponent } from './add/edit/edit.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [EditComponent, IndexComponent],
  imports: [
    CommonModule,
    SlidersRoutingModule
  ]
})
export class SlidersModule { }
