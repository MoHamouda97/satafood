import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from 'src/module/shared.module';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


@NgModule({
  declarations: [IndexComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg' }),
    BranchesRoutingModule
  ],providers:[GoogleMapsAPIWrapper],
    
  
})
export class BranchesModule { }
