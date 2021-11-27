import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrdersService } from 'src/services/orders/orders.service';

@Component({
  selector: 'app-order-report-filter',
  templateUrl: './order-report-filter.component.html',
  styleUrls: ['./order-report-filter.component.css']
})
export class OrderReportFilterComponent implements OnInit {
  @Input('marketers') marketers: any = [];
  @Input('paymenttypes') paymenttypes: any = [];
  @Input('platforms') platforms: any = [];
  @Input('tables') tables: any = [];
  @Input('users') users: any = [];
  @Output('loading') loading: EventEmitter<any> = new EventEmitter();
  @Output('data') data: EventEmitter<any> = new EventEmitter();
  @Output('pages') pages: EventEmitter<any> = new EventEmitter();

  selectedOrder: any = null;
  selectedUser: any = null;
  selectedMarketers: any = null;
  selectedPaymenttypes: any = null;
  selectedPlatforms: any = null;
  selectedTables: any = null;

  constructor(private service: OrdersService) { }

  ngOnInit() {
  }

  async filter(filter, val, type = '') {    
    const formData = new FormData(); 

    formData.append(filter, val);

    this.loading.emit(true);

    const data: any = await this.service.getOrdersByFilter2(formData, 1);

    this.data.emit(data.data);
    this.pages.emit(data.pagination);
    this.loading.emit(false);

    localStorage.setItem('lastFilter', filter);
    localStorage.setItem('lastFilterValue', val);
  }   

}
