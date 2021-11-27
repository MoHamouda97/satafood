import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'src/app/options';
import { environment } from 'src/environments/environment';
import { TownsCreate } from '../cities/citiesModel';
import { restaurant_cuisines, Restuarant } from './RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  
  constructor(private http: HttpClient) { }
  getRestaurant() {

    return this.http.get<Array<Restuarant>>(`${environment.endpoint}/Restaurant/getRestaurant`).toPromise();

  }
    getMyRestaurant(id) {

    return this.http.get<Array<Restuarant>>(`${environment.endpoint}/Restaurant/getRestaurantByUser/${id}`).toPromise();

  }
  getCuisines() {

    return this.http.get<Array<restaurant_cuisines>>(`${environment.endpoint}/Restaurant/getCusinesList`).toPromise();

  }
  add(data: any) {

    return this.http.post<any>(`${environment.endpoint}/Restaurant/addRestaurants`, data,options).toPromise();

  }
  delete(data: any) {

    return this.http.post<any>(`${environment.endpoint}/Restaurant/deleteRestaurants`, data,options).toPromise();

  }
  addRestCuisines(data: any) {

    return this.http.post(`${environment.endpoint}/Restaurant/addCusinesRestaurants`, data,options).toPromise();

  }
  getRestCuisines(data: any) {

    return this.http.get<Array<restaurant_cuisines>>(`${environment.endpoint}/Restaurant/getRestaurantCuisines/${data}`).toPromise();

  }
}
