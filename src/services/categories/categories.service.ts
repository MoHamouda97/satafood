import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuCategories } from '../cities/citiesModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  getCategories() {

    return this.http.get<Array<MenuCategories>>(`${environment.endpoint}/Categories/index`).toPromise();

  }
  add(data) {

    return this.http.post<MenuCategories>(`${environment.endpoint}/Categories/add`,data).toPromise();

  }
}

