import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrdersHelper } from './classes/orders-helper';
import { OrdersRoutes } from './order.routing';
import { OrderReportModule } from './order-report/order-report.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(OrdersRoutes),
        OrderReportModule
    ],
    exports: [],
    providers: [
        OrdersHelper
    ]
})

export class OrdersModule {}