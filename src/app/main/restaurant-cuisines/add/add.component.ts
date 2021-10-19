import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { restaurant_cuisines } from 'src/services/restaurants/RestaurantModel';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  restaurant_cuisines = new restaurant_cuisines()
  zonesList: restaurant_cuisines[];
  constructor(private service:RestaurantsService,private location: Location, private navigate: Router, private activatedRoute: ActivatedRoute) { }


  async ngOnInit() {
    var resId =  this.activatedRoute.snapshot.paramMap.get('id');

this.restaurant_cuisines.restaurant_id = parseInt(resId)
const data = await this.service.getCuisines();
this.zonesList = data
  }
  async add() {

      const data = await this.service.addRestCuisines({"data":this.restaurant_cuisines});
      this.location.back()
  }

}
