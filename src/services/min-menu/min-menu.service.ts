import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItemsTopics } from 'src/app/models/MenuModel';
import { options } from 'src/app/options';
import { environment } from 'src/environments/environment';
import { MenuCategories, MenuItems, TownsCreate } from '../cities/citiesModel';

@Injectable({
  providedIn: 'root'
})
export class MinMenuService {

  constructor(private http: HttpClient) { }
  getMenuCategories(restId:number) {

    return this.http.get<Array<MenuCategories>>(`${environment.endpoint}/Menu/getMenuCategories/${restId}`).toPromise();

  }
  getItemsByCategories(catId:number) {

    return this.http.get<Array<MenuItems>>(`${environment.endpoint}/Menu/getItemsByCategories/${catId}`).toPromise();

  }

  addNewItemInMenu(data) {

    return this.http.post<MenuItems>(`${environment.endpoint}/Menu/addMenuItems`,data,options).toPromise();

  }
  addNewOptionAndTopicInMenu(data) {

    return this.http.post<MenuItemsTopics>(`${environment.endpoint}/Menu/addMenuTopics`,data).toPromise();

  }

  addCategoryMenu(data) {

    return this.http.post<MenuItemsTopics>(`${environment.endpoint}/Categories/add`,data).toPromise();

  }
}
