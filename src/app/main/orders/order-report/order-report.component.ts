import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent implements OnInit {
  orders: any[] = [];
  loading: boolean = false;
  pages: any = {};
  marketers: any = {};
  paymenttypes: any = {};
  platforms: any = {};
  tables: any = {};
  users: any = {};
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router)
    this.router.data.subscribe(
      res => {
        this.orders = res.orders.data;
        this.pages = res.orders.pagination;
        this.marketers = Object.entries(res.orders.marketers)
        this.paymenttypes = Object.entries(res.orders.paymenttypes)
        this.platforms = Object.entries(res.orders.platforms)
        this.tables = Object.entries(res.orders.tables)
        this.users = Object.entries(res.orders.users)
      }
    )
  }

}
