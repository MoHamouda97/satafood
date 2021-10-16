import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinMenuRoutingModule } from './min-menu-routing.module';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/module/shared.module';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule, MatTabsModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { AddOptionsComponent } from './add-options/add-options.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';


@NgModule({
  declarations: [AddComponent, IndexComponent, TabsComponent, AddOptionsComponent, AddCategoryModalComponent],
  imports: [
    CommonModule,
    
    MatRippleModule,
    MatTabsModule,
MatInputModule,
    MinMenuRoutingModule,SharedModule
  ]
})
export class MinMenuModule { }
