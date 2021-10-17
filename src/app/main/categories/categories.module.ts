import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { EditComponent } from './add/edit/edit.component';
import { IndexComponent } from './index/index.component';

import { SharedModule } from 'src/module/shared.module';


@NgModule({
  declarations: [EditComponent, IndexComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
  ]
})
export class CategoriesModule { }
