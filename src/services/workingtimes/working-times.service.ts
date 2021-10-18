import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restuarant, working_times } from '../restaurants/RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class WorkingTimesService {

  constructor(private http: HttpClient) { }
  getBranchTimes(Branchid) {

    return this.http.get<working_times>(`${environment.endpoint}/Restaurant/getWorkingTimesForBranch/${Branchid}`).toPromise();

  }
  add(data: any) {

    return this.http.post(`${environment.endpoint}/Restaurant/addWorkingdays`, data).toPromise();

  }
}
