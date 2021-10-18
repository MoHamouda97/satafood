import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Restuarant } from 'src/services/restaurants/RestaurantModel';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  restaurants :  Restuarant[] =  []
  URL = environment.photoPath;

  constructor(private service:RestaurantsService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {

    const data = await this.service.getRestaurant()
    console.log(data)
    this.restaurants = data
  }
  openLg(id,RestId){
    this.navigate.navigate(['/branches/all/'+RestId]);      


  }
}
