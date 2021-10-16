import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisinesRoutingModule } from './cuisines-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CuisinesComponent } from './cuisines.component';
import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [AddEditComponent, CuisinesComponent],
  imports: [
    CommonModule,
    CuisinesRoutingModule,    SharedModule,

  ]
})
export class CuisinesModule { }
