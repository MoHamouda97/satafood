import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'src/app/options';
import { environment } from 'src/environments/environment';
import { TownsCreate } from '../cities/citiesModel';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  
  constructor(private http: HttpClient) { }
  getTownsList() {

    return this.http.get<Array<TownsCreate>>(`${environment.endpoint}/Cities/getTowns`).toPromise();

  }
  add(data: any) {

    return this.http.post(`${environment.endpoint}/Cities/Areas/add`, data,options).toPromise();

  }
}
