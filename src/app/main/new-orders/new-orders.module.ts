import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOrdersRoutingModule } from './new-orders-routing.module';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { SharedModule } from 'src/module/shared.module';
import { OrderReportResolver } from '../orders/order-report/services/order-report.resolver';
import { AdressPopupComponent } from '../orders/order-report/adress-popup/adress-popup.component';
import { RouterModule } from '@angular/router';
import { NewOrdersComponent } from './new-orders.component';
import { OrdersHelper } from '../orders/classes/orders-helper';


@NgModule({
  declarations: [NewOrdersComponent,AdressPopupComponent],
   imports: [
    CommonModule,
    SharedModule,
    NewOrdersRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg' }),
],
providers: [
    OrderReportResolver,
    GoogleMapsAPIWrapper, OrdersHelper

]
})
export class NewOrdersModule { }
