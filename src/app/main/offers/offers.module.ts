import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [AddComponent, IndexComponent],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
