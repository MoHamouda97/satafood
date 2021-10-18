import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingTimesRoutingModule } from './working-times-routing.module';
import { WorkingTimesComponent } from './working-times.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [WorkingTimesComponent, AddEditComponent],
  imports: [
    CommonModule,
    SharedModule,

    WorkingTimesRoutingModule
  ]
})
export class WorkingTimesModule { }
