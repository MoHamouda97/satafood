import { Routes } from "@angular/router";
import { OrderReportComponent } from "./order-report/order-report.component";
import { OrderReportResolver } from "./order-report/services/order-report.resolver";

export const OrdersRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reports',
                component: OrderReportComponent,
                data: {
                    title: 'تقرير الطلبات',
                },                
                resolve: {
                    orders: OrderReportResolver,
                }                
            }
        ]
    }
]