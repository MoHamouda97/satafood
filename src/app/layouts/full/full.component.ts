import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import { select, Store } from '@ngrx/store';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/dashboards/dashboard-components/reducers';
import { selectBestSeller } from 'src/app/dashboards/dashboard1/store/sales-reports/sales-reports.selectors';
import { BranchesService } from 'src/services/branches/branches.service';
import { OrdersService } from 'src/services/orders/orders.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private store: Store<AppState>,public router: Router,public BranchesSerive:BranchesService) { }

  tabStatus = 'justified';

  public isCollapsed = false;
  totMonthSales$: Observable<any>;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;
  public expandLogo = false;

  options = {
    theme: 'light', // two possible values: light, dark
    dir: 'rtl', // two possible values: ltr, rtl
    layout: 'vertical', // fixed value. shouldn't be changed.
    sidebartype: 'mini-sidebar', // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarpos: 'fixed', // two possible values: fixed, absolute
    headerpos: 'fixed', // two possible values: fixed, absolute
    boxed: 'full', // two possible values: full, boxed
    navbarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: 'skin2', // six possible values: skin(1/2/3/4/5/6)
    logobg: 'skin2' // six possible values: skin(1/2/3/4/5/6)
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

   async ngOnInit() {

    if (this.router.url === '/') {
      
      this.router.navigate(['/dashboard/dashboard1']);
    }

    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
      case 'iconbar':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      case 'overlay':
        if (this.innerWidth < 767) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  toggleSidebarType() {
    switch (this.options.sidebartype) {
      case 'full':
      case 'iconbar':
        this.options.sidebartype = 'mini-sidebar';
        break;

      case 'overlay':
        this.showMobileMenu = !this.showMobileMenu;
        break;

      case 'mini-sidebar':
        if (this.defaultSidebar === 'mini-sidebar') {
          this.options.sidebartype = 'full';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }
}
