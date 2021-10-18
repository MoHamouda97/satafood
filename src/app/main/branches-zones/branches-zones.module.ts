import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesZonesRoutingModule } from './branches-zones-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BranchesZonesComponent } from './branches-zones.component';
import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [AddEditComponent, BranchesZonesComponent],
  imports: [
    CommonModule,
    SharedModule,

    BranchesZonesRoutingModule
  ]
})
export class BranchesZonesModule { }
