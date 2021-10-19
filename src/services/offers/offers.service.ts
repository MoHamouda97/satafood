import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreasCreate } from '../cities/citiesModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  GetCities() {

    return this.http.get<Array<AreasCreate>>(`${environment.endpoint}/Cities/getCities`).toPromise();

  }
}
