import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesModel } from 'src/app/models/MenuModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  

  constructor(private http: HttpClient) { }


  
  GetArea() {

    return this.http.get<Array<CategoriesModel>>(`${environment.endpoint}/Cities/getCities`).toPromise();

  }
}

