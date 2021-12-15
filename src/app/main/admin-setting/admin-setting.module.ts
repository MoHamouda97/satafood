import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSettingRoutingModule } from './admin-setting-routing.module';
import { AdminSettingComponent } from './admin-setting.component';
import { AdminSettingHelper } from './adminSettingHelpter';
import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [AdminSettingComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminSettingRoutingModule
  ],
  providers: [
      AdminSettingHelper
  ]
})
export class AdminSettingModule { }
