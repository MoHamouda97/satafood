import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinMenuRoutingModule } from './min-menu-routing.module';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [AddComponent, IndexComponent],
  imports: [
    CommonModule,
    MinMenuRoutingModule
  ]
})
export class MinMenuModule { }
