import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/module/shared.module';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


@NgModule({
  declarations: [AreasComponent, AddEditComponent],
  imports: [
    CommonModule,
    AreasRoutingModule,
    SharedModule,
  ],providers:[]
})
export class AreasModule { }
