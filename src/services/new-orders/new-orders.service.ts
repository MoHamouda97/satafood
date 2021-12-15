import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewOrdersService {

  constructor(private http: HttpClient) { }

  filterOrders(filterBy) {    
    return this.http.post(`${environment.endpoint}/orderdetails/sellallitems/5.json`, filterBy)
  }

  getCompanyShipOrders() {   
    const formData = new FormData();
    const order_status: any = 0;
    formData.append('Filter[order_status]', "1"); 
    return this.http.post(`${environment.endpoint}/orders.json?page=1`, formData).toPromise();
  }
  getOrdersByFilter( page){
    return this.http.get(`${environment.endpoint}/orders/currentorders/${localStorage.getItem("RestaurantId")}/1`)
  
  
  }
  getOrdersByFilter2(filter, page) {
    return this.http.post(`${environment.endpoint}/orders.json?page=${page}`, filter).toPromise();
  }

  changeOrderStatus(order_status, id) {
    return this.http.post(`${environment.endpoint}/orders/edit/${id}.json`, order_status).toPromise()
  }


  getDriver(){

    return this.http.get(`${environment.endpoint}/users/GetDrivers.json`).toPromise()

  }

}
