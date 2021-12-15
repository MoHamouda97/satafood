import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NewOrdersService } from 'src/services/new-orders/new-orders.service';
import { OrdersService } from 'src/services/orders/orders.service';
import { OrdersHelper } from '../orders/classes/orders-helper';
import { NewOrdersModule } from './new-orders.module';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent implements OnInit {

  @Input('data') data: any[] = [];
  @Input('pages') pages: any = {};
  @Input('loading') loading: boolean = false;
  selectedPaymenttypes  : string[] = [];

  header: any[] = [
    '#',
    'العميل',
    'العنوان',

    'تكلفة الطلب',
    'الضريبة',
    'خصم',
    'طريقة الدفع',

    'حالة الطلب',
    'التاريخ',
    'عنوان العميل',
    'تفاصيل الطلب',

  ];

  details: any = [];
  isVisible: boolean = false;
  drivers: any = [];

  popupHeader: any[] = [
    '#',
    'الطبق',
    'الكمية',
    'السعر',
    'التاريخ',
    'الخيارات'
  ];  

  billingData: any = {};
  isBillingVisible: boolean = false;

  constructor(private helper: OrdersHelper, private service: NewOrdersService) {  }

  async ngOnInit() {
    const data: any = await this.service.getOrdersByFilter(1).toPromise();
    this.data = this.helper.shapeOrderObject(data)
    this.loading = false;
    if (localStorage.getItem("groupid") == "1"){

    this.header.splice(11, 1);

    }
  }


  getOrderDetails(details: any[],adress) {    
    
    (details.length == 0) ? this.details = [] : this.details = this.helper.createDetails(details);
    console.log(adress)
    this.billingData = adress;

    this.isVisible = true;
  }  

  async onPageChange(page) {
    const formData = new FormData();
    formData.append(localStorage.getItem('lastFilter'), localStorage.getItem('lastFilterValue'));

    this.loading = true;
     const data: any = await this.service.getOrdersByFilter(formData).toPromise();
     this.data = this.helper.shapeOrderObject(data.data)
     this.loading = false;
  } 
  
  async changeState(index,values, event) {
    event.stopPropagation();
    console.log(this.selectedPaymenttypes[index])
    const order_status = values.order_status;
    const formData = new FormData();
    formData.append('order_status', (parseInt(order_status) + 1).toString())
    formData.append('waiter_id', this.selectedPaymenttypes[index])

    this.loading = true;

     const data: any = await this.service.changeOrderStatus(formData, values.id);
        
      if (data.success) {
        const change = this.data.filter(d => d.id != values.id);
        this.data = this.helper.shapeOrderObject(change);
      }
      this.loading = false;
  }

  showAdress(adress, event) {
    event.stopPropagation();
    this.billingData = adress;
    this.isBillingVisible = true;
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' : 
            this.data = this.helper.shapeOrderObject(changes.data.currentValue);
            break;
          case 'loading' : 
            this.loading = changes.loading.currentValue;
            break;
          case 'pages' : 
            this.pages = changes.pages.currentValue;
            break;
        }
      }
    }

  }   


}
