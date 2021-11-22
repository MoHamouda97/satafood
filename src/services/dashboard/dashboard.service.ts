import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { InfoDashboard } from 'src/app/models/infodashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getInfoData() {


    return this.http.get<InfoDashboard>(`${environment.endpoint}companies/allcounts/1.json`);
  }
  allcountsCompanies(id) {


    return this.http.get<InfoDashboard>(`${environment.endpoint}companies/allcountsCompanies/${id}.json`);
  }



  login(body){
    return this.http.post(`${environment.endpoint}/login`, body);
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(body){
    return this.http.post(`${environment.endpoint}/createUser`, body);
  }
}
