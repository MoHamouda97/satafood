import { OrdersService } from 'src/services/orders/orders.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class OrderReportResolver implements Resolve<any> {
    
    constructor(private services: OrdersService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        const formData = new FormData();
        const order_status: any = 0;
        formData.append('Filter[order_status]', order_status);
        localStorage.setItem('lastFilter', 'Filter[order_status]');
        localStorage.setItem('lastFilterValue', order_status);
        return this.services.getOrdersByFilter(formData, 1);
    }
    resolves(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        const formData = new FormData();
        const order_status: any = 0;
        formData.append('Filter[order_status]', order_status);
        localStorage.setItem('lastFilter', 'Filter[order_status]');
        localStorage.setItem('lastFilterValue', order_status);
        return this.services.getOrdersByFilter(formData, 1);
    }
    
}