import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { restaurant_cuisines } from 'src/services/restaurants/RestaurantModel';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-cuisines',
  templateUrl: './restaurant-cuisines.component.html',
  styleUrls: ['./restaurant-cuisines.component.css']
})
export class RestaurantCuisinesComponent implements OnInit {
  resId
  heads = ["الاسم","الاسم انجليزي" ]
  dataarray: restaurant_cuisines[];
  constructor(private service:RestaurantsService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.resId =  this.activatedRoute.snapshot.paramMap.get('id');
       const data = await this.service.getRestCuisines(this.resId)
       this.dataarray = data
     }
}
