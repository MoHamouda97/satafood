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
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg' })
  ],providers:[GoogleMapsAPIWrapper]
})
export class AreasModule { }
