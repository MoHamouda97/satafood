import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'src/app/options';
import { environment } from 'src/environments/environment';
import { AreasCreate } from './citiesModel';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  add(data: any) {

    return this.http.post(`${environment.endpoint}/Cities/add`, data,options).toPromise();

  }

  GetArea() {

    return this.http.get<AreasCreate>(`${environment.endpoint}/Cities/getCities`).toPromise();

  }
}
