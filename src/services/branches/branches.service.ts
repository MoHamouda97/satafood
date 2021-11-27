import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { branches, Restuarant } from '../restaurants/RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) { }
  getRestaurantobserv(id) :Observable<any>{

    return this.http.get<Array<Restuarant>>(`${environment.endpoint}/Restaurant/getRestaurantBranches/${id}`) 
    .pipe(
      shareReplay()
    );

  }
  getRestaurant(id) {

    return this.http.get<Array<Restuarant>>(`${environment.endpoint}/Restaurant/getRestaurantBranches/${id}`);

  }
  add(data) {

    return this.http.post<branches>(`${environment.endpoint}/Restaurant/addBranches`,data).toPromise();

  }
}
