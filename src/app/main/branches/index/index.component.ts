import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchesService } from 'src/services/branches/branches.service';
import { Restuarant } from 'src/services/restaurants/RestaurantModel';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
branches = new Array<Restuarant>();
resId;
  constructor(private service:BranchesService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
 this.resId =  this.activatedRoute.snapshot.paramMap.get('id');
    const data = this.service.getRestaurant(this.resId).subscribe(res => {
      this.branches = res;

    })
  }
  SwitchToAdd(){
    this.navigate.navigate(['/branches/add/'+this.resId]);      

  }
}
