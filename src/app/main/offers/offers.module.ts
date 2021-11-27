import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersComponent } from './index/index.component';
import { SharedModule } from 'src/module/shared.module';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { OfferRoutingModule } from './offers-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ OffersComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    OfferRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg' })
  ],providers:[GoogleMapsAPIWrapper]
})
export class OffersModule { }
