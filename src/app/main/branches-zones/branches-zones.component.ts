import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchesZonesService } from 'src/services/BranchesZones/branches-zones.service';
import { branches, restaurant_areas } from 'src/services/restaurants/RestaurantModel';

@Component({
  selector: 'app-branches-zones',
  templateUrl: './branches-zones.component.html',
  styleUrls: ['./branches-zones.component.css']
})
export class BranchesZonesComponent implements OnInit {

  resId;
branchareas;
heads = ["المنطقة","تكلفة التوصيل","وقت التوصيل"]
  constructor(private service:BranchesZonesService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
  this.resId =  this.activatedRoute.snapshot.paramMap.get('id');
     const data = await this.service.getBranchAreas(this.resId)
     this.branchareas = data
   }


}
