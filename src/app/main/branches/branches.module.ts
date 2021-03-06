import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [IndexComponent, AddComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule
  ]
})
export class BranchesModule { }
