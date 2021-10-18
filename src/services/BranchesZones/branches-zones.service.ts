import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restuarant } from '../restaurants/RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class BranchesZonesService {


  
  constructor(private http: HttpClient) { }

  getBranchAreas(id) {

    return this.http.get(`${environment.endpoint}/Branches/getBranchAreas/${id}`).toPromise();

  }
  add(data: any) {

    return this.http.post(`${environment.endpoint}/Branches/addZonesForBranch`, data).toPromise();

  }
}
