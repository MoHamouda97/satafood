import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ResTaurantROUTES, ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  URL = environment.photoPath
  ResturantName = localStorage.getItem("RestaurantName")
  ResturantPhoto = localStorage.getItem("RestaurantLogo")

  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  logout(){

    localStorage.setItem("token","null")
    this.router.navigate(['/authentication/login']);

  }
  // End open close
  ngOnInit() {
    console.log(localStorage.getItem("RestaurantId"))
    
    if (localStorage.getItem("RestaurantId") == "null"){
      this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);

    }else {
      this.sidebarnavItems = ResTaurantROUTES.filter(sidebarnavItem => sidebarnavItem);

    }
  }
}
