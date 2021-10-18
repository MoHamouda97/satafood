import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { branches, Restuarant } from '../restaurants/RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) { }
  getRestaurant(id) {

    return this.http.get<Array<Restuarant>>(`${environment.endpoint}/Restaurant/getRestaurantBranches/${id}`).toPromise();

  }
  add(data) {

    return this.http.post<branches>(`${environment.endpoint}/Restaurant/addBranches`,data).toPromise();

  }
}
